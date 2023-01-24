import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListInlineItem } from 'reactstrap'

import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';



const Categories = (currentCategory) => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.getCategories || [];

    const [currentCategory, setCurrentCategory] = useState('All');

    // const selectCategory = () => {
    //     console.log()
    // }

    if (loading) {
        return (
            <div>Loading ...</div>
        )
    }

    return (
        <div>
            <h4>Categories</h4>
            <List type="inline">
                <ListInlineItem>
                    <Link to={`/home/All`}>All</Link>
                </ListInlineItem>
                {categories.map(category => (
                    <ListInlineItem key={category.id}>
                        <Link
                            to={`/home/${category.categoryName}`}>
                            {category.categoryName}
                        </Link>
                    </ListInlineItem>
                ))}
            </List>
        </div>
    )
}

export default Categories;
{/* <Link
                            to={`/home/${category.categoryName}`} onClick={selectCategory()}                            >
                            {category.categoryName}
                        </Link> */}
// className={category.categoryName === paramCatName ?
//     'cat-active' : 'cat-inactive'}