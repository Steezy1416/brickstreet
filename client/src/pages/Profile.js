import React from 'react';
import { useParams } from 'react-router-dom';

import AllPosts from '../components/AllPosts';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Profile = () => {
    const { id: userId } = useParams();

    const { loading, data } = useQuery(QUERY_USER, {
        variables: { getUserId: userId }
    });

    const user = data?.getUser || {};

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h3>Viewing {user.name}'s posts</h3>
            <img src={`${user.profilePicture}`} alt='profilephoto'/>
            <div>
                <AllPosts posts={user.posts}/>
            </div>
        </div>
    )
}

export default Profile;