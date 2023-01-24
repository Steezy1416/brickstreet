import React from 'react';

import { Link } from 'react-router-dom';
import { List, ListInlineItem } from 'reactstrap'

import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';

const Categories = (currentCategory, handleSelectCategory) => {
    const { loading, error, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.getCategories || [];
    console.log('hello');
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

    console.log(currentCategory.currentCategory);

    return (
        <div>
            <h4>Categories</h4>
            <List type="inline">
                <ListInlineItem>
                    <Link to={`/home/All`}>All</Link>
                </ListInlineItem>
                {categories.map(category => (
                    <div key={category.id}>
                        {/* <ListInlineItem key={category.id}>
                            <Link
                                to={`/home/${category.categoryName}`}>
                                {category.categoryName}
                            </Link>
                        </ListInlineItem> */}
                        {currentCategory.currentCategory === category.categoryName ? (
                            <ListInlineItem>
                                <Link
                                    style={{ background: 'black', color: 'white' }}
                                    to={`/home/${category.categoryName}`}>{category.categoryName}</Link>
                            </ListInlineItem>
                        ) : (
                            <ListInlineItem>
                                <Link
                                    style={{ color: 'green' }}
                                    onClick={() => handleSelectCategory(category.categoryName)}
                                    to={`/home/${category.categoryName}`}>{category.categoryName}</Link>
                            </ListInlineItem>)}
                    </div>
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

// <ListInlineItem key={category.id}>
// <Link
//     to={`/home/${category.categoryName}`}>
//     {category.categoryName}
// </Link>
// </ListInlineItem>