import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListInlineItem } from 'reactstrap'

import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';



const Categories = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.getCategories || [];
    return (
        <div>
            <h4>Categories</h4>
            <List type="inline">
                <ListInlineItem>
                    <Link to={`/home/all`}>All</Link>
                </ListInlineItem>
                {categories.map(category => (
                    <ListInlineItem key={category.id}>
                        <Link onClick={() => { console.log(category.categoryName) }} to={`/home/${category.categoryName}`}>{category.categoryName}</Link>
                    </ListInlineItem>
                ))}
            </List>



        </div>
    )
}

export default Categories;