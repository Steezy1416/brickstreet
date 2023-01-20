import React from 'react';
import { useQuery } from '@apollo/client';
import AllPosts from '../components/AllPosts';

const Home = () => {
    return (
        <main>
            <p>This is the HOME page</p>
            <div>
                <AllPosts/>
            </div>
        </main>
    )
}

export default Home;