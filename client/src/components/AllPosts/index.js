import React from "react";
import {Link} from 'react-router-dom';

const AllPosts = ({posts}) => {
    return (
        <div>
            THESE ARE ALL THE POSTS
            {posts && posts.map(post => (
                <div key={post._id}>
                    <p>{post.image}</p>
                    <p>{post.title}</p>
                    <p>{post.user}</p>
                    <p>{post.bidPrice}</p>
                </div>
            ))}
        </div>
    )
}

export default AllPosts;