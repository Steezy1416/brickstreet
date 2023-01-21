import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import AllPosts from '../components/AllPosts';

const Home = () => {

    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.getPosts || [];
    // console.log(getPosts)

    return (
        <main>
            <h1>Welcome!</h1>
            <h3>On this page, you can find all available sets</h3>
            <h4>Categories</h4>
            <div>
                {loading ? (
                    <div>Loading ...</div>
                ) : (
                    posts.length === 0 ? (
                        <h4 style={{ color: 'red' }}>This is a conditional statement: No posts to display just yet</h4>
                    ) :
                        <AllPosts />
                )}
            </div>

        </main >
    )
}

export default Home;