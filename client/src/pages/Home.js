import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from "../utils/queries";

import AllPosts from '../components/AllPosts';
import Categories from '../components/Categories';

import { Link, useParams } from 'react-router-dom';

const Home = () => {
    const [currentCategory, setCurrentCategory] = useState('All');


    const { loading, error, data } = useQuery(QUERY_POSTS);
    const posts = data?.getPosts || [];

    let { categoryName } = useParams();

    // filter all posts to only show available posts on home page
    const availablePosts = (posts) => {
        return posts.filter(post => post.availability === 'available')
    }
    const availPosts = availablePosts(posts);

    // further filter available posts by category
    const filterPosts = (posts) => {
        const filteredPosts = [];

        if (categoryName === 'All' || !categoryName) {
            return posts;
        }

        posts.forEach(post => post.categories.filter(category => {
            if (category.categoryName === categoryName) {
                filteredPosts.push(post)
            };
        }));

        return filteredPosts;
    }

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

    const handleSelectCategory = (category) => setCurrentCategory(category);

    return (
        <main>
            <div className='container'>
                <h1>Welcome!</h1>
                {!categoryName || categoryName === 'All' &&
                    <h3>All Posts</h3>
                }
                {categoryName != '' && categoryName != 'All' &&
                    <h3>All {categoryName} Posts</h3>
                }
                <div>
                    <Categories currentCategory={categoryName} handleSelectCategory={handleSelectCategory} />

                    {/* <Categories currentCategory={currentCategory} handleSelectCategory={handleSelectCategory} /> */}
                </div>

                <div>
                    <AllPosts posts={filterPosts(availPosts)} />
                </div>
            </div>


        </main >
    )
}

export default Home;