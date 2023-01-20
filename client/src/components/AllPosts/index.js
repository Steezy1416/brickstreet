import React from "react";
import {Link} from 'react-router-dom';

const AllPosts = ({posts}) => {
    return (
        <div>
          <p>THESE ARE ALL THE POSTS</p>  
          <p>PENDING POST SEED DATA</p>
            
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