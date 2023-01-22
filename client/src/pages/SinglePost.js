import React from 'react';

import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';

const SinglePost = () => {
    const { id } = useParams();

    const { loading, data } = useQuery(QUERY_POST, {
        variables: { postId: id }
    })

    const post = data?.getPost || [];

    return (
        <div>

            {post.title}
            <div>

                POST TITLE
            </div>
            <div>USERNAME</div>


        </div>
    )
}
export default SinglePost;