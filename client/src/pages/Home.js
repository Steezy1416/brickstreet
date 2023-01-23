import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from "../utils/queries";

import AllPosts from '../components/AllPosts';
import Categories from '../components/Categories';

import { Link, useParams } from 'react-router-dom';

const Home = () => {
    const { loading, error, data } = useQuery(QUERY_POSTS);
    const posts = data?.getPosts || [];

    let { categoryName } = useParams();

    const availablePosts = (posts) => {
        return posts.filter(post => post.availability === 'available')
    }
    const availPosts = availablePosts(posts);

    const filterPosts = (posts) => {
        if (categoryName === 'all' || !categoryName) {
            return posts;
        }

        const filteredPosts = []

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
    return (
        <main>
            <h1>Welcome!</h1>
            {!categoryName || categoryName === 'all' &&
                <h3>All Posts</h3>
            }
            {categoryName != '' && categoryName != 'all' &&
                <h3>All {categoryName} Posts</h3>
            }
            <div>
                <Categories />
            </div>
            <div>
                <AllPosts posts={filterPosts(availPosts)} />
            </div>

        </main >
    )
}

export default Home;