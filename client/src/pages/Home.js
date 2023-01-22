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

    const filterPosts = (posts) => {
        if (categoryName === 'all' || !categoryName) {
            return posts;
        }

        const res = []

        posts.forEach(post => post.categories.filter(cat => {
            if (cat.categoryName === categoryName) {
                res.push(post)
            };
        }));

        return res;
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
            <h3>On this page, you can find all available sets</h3>
            <div>
                <Categories />
            </div>
            <div>
                <AllPosts posts={filterPosts(posts)} />
            </div>

        </main >
    )
}

export default Home;