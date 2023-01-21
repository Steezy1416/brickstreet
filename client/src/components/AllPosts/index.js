import React from "react";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";

const AllPosts = () => {

    const { loading, error, data } = useQuery(QUERY_POSTS);

    const posts = data?.getPosts || [];

    if (loading) {
        return (
            <p>LOADING</p>
        )
    }

    if (error) {

        return (
            <p>{error.message}</p>
        )
    }

    return (
        <div>
            
            {posts && posts.map(post => (
                <div className="card" key={post.id}>
                    <img height={150} width={150} src={`${post.postImage}`} alt={`${post.title}`}/>
                    <p>{post.title}</p>
                    <p>Bid: {post.bidPrice}</p>
                    <p>{post.user.name}</p>
                </div>
            ))}
        </div>
    )
}

export default AllPosts;