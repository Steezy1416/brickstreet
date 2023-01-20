import React from "react";
import {Link} from 'react-router-dom';

const AllPosts = ({posts}) => {
    return (
        <div>
            THESE ARE ALL THE POSTS
            {posts && posts.map(post => (
                <div key={post._id}>
                    <div>POST TITLE</div>
                </div>
            ))}
        </div>
    )
}

export default AllPosts;