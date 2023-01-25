import React from 'react';

import { Link } from 'react-router-dom';
import { List, ListInlineItem } from 'reactstrap'

import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';

const Categories = ({ currentCategory, setCurrentCategory }) => {
    const { loading, error, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.getCategories || [];

    if (loading) {
        return (
            <div>Loading ...</div>
        )
    }

    if (error) {
        return (
            <p>{error.message}</p>
        )
    }

    return (
        <div>
            <h4>Categories</h4>
            {currentCategory === 'All' ? (
                <Link className='cat-active' to={`/home/All`}>All</Link>
            ) : (
                <Link className='cat-inactive' to={`/home/All`}>All</Link>
            )}
            {categories.map(category => {
                return (<div key={category.id}>
                    {currentCategory === category.categoryName ? (

                        <Link
                            className='cat-active'
                            to={`/home/${category.categoryName}`}>{category.categoryName}</Link>
                    ) : (
                        <Link
                            className='cat-inactive'
                            onClick={() => { setCurrentCategory(category.categoryName) }}
                            to={`/home/${category.categoryName}`}>{category.categoryName}</Link>
                    )
                    }
                </div>
                )
            })}
        </div>
    )
}

export default Categories;