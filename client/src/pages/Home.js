import React from 'react';
import { useQuery } from '@apollo/client';
import AllPosts from '../components/AllPosts';
import { QUERY_CATEGORIES } from '../utils/queries';
import { Link } from 'react-router-dom';

const Home = () => {

    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.getCategories || [];

    return (
        <main>
            <h1>Welcome!</h1>
            <h3>On this page, you can find all available sets</h3>
            <div>
                <h4>Categories</h4>
                <Link to={`/home`}>All</Link>

                {categories.map(category => (
                    <div key={category.id}>
                        <Link to={`/home/${category.categoryName}`}>{category.categoryName}</Link>
                    </div>
                ))}
            </div>
            <div>
                <AllPosts />
            </div>

        </main >
    )
}

export default Home;