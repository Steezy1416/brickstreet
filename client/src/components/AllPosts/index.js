import React from "react";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";

import { useParams } from "react-router-dom";

const AllPosts = ({ posts }) => {

    return (
        <div>
            {posts && posts.map(post => (
                <div className="card" key={post.id}>
                    <div className="card-body">
                        <img height={150} width={150} src={`${post.postImage}`} alt={`${post.title}`} />
                        <p>{post.title}</p>
                        <p>Bid: {post.bidPrice}</p>
                        <p>Seller:
                            {' '}
                            <Link to={`/profile/${post.user.name}`}>{post.user.name}</Link>
                        </p>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default AllPosts;