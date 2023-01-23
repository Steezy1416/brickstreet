import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { List, ListInlineItem, Badge } from 'reactstrap';

import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';

const SinglePost = () => {
    const { id } = useParams();

    const { loading, data } = useQuery(QUERY_POST, {
        variables: { postId: id }
    })

    const post = data?.getPost || [];

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className='container'>
            <h2>{post.title}</h2>
            <Badge color={post.availability === 'available' ? "success" : "secondary"} style={{ "opacity": "0.9" }} pill className="available-post">{post.availability.charAt(0).toUpperCase() + post.availability.substr(1).toLowerCase()}</Badge>

            <div>

                <Link to={`/profile/${post.user.id}`}>{post.user.name}</Link>
            </div>
            <img src={`${post.postImage}`} alt={`${post.title}`} />
            <p>Bid:
                {' '}
                {post.bidPrice}
            </p>
            <div>
                <p>Description:{' '}</p>
                <p>{post.description}</p>
            </div>
            <List type="inline">
                <ListInlineItem>Categories:{' '}</ListInlineItem>
                {post.categories.map(category => (
                    <ListInlineItem key={category.id}>
                        {category.categoryName}
                    </ListInlineItem>))}
            </List>
        </div>
    )
}
export default SinglePost;