import React from "react";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";
import { useParams } from "react-router-dom";

const AllPosts = () => {

    const { loading, error, data } = useQuery(QUERY_POSTS);
    const posts = data?.getPosts || [];

    // const { category } = useParams();

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
        <div>
            {posts && posts.map(post => (
                <div className="card" key={post.id}>
                    <img height={150} width={150} src={`${post.postImage}`} alt={`${post.title}`} />
                    <p>{post.title}</p>
                    <p>Bid: {post.bidPrice}</p>
                    <p>Seller:
                        {' '}
                        <Link to={`/profile/${post.user.id}`}>{post.user.name}</Link>
                    </p>
                </div>
            ))}
        </div>
    )


}

export default AllPosts;