import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { Link } from 'react-router-dom';


const Categories = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.getCategories || [];
    return (
        <div>
            <h4>Categories</h4>
            <Link to={`/home/all`}>All</Link>

            {categories.map(category => (
                <div key={category.id}>
                    <Link onClick={() => {console.log(category.categoryName)}} to={`/home/${category.categoryName}`}>{category.categoryName}</Link>
                </div>
            ))}
        </div>
    )
}

export default Categories;