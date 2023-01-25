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
            <ul className='cat-list'>
                <li className='cat-list-item'>
                    {currentCategory === 'All' ? (
                        <Link className='category cat-active' to={`/home/All`}>All</Link>
                    ) : (
                        <Link className='category cat-inactive' to={`/home/All`}>All</Link>
                    )}
                </li>
                {categories.map(category => {
                    return (<li key={category.id} className='cat-list-item'>
                        {currentCategory === category.categoryName ? (
                            <Link
                                className='category cat-active'
                                to={`/home/${category.categoryName}`}>{category.categoryName}</Link>

                        ) : (
                            <Link
                                className='category cat-inactive'
                                onClick={() => { setCurrentCategory(category.categoryName) }}
                                to={`/home/${category.categoryName}`}>{category.categoryName}</Link>
                        )
                        }
                    </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Categories;