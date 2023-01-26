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
        <div className='single-post container'>
            <Badge color={post.availability === 'available' ? "success" : "secondary"} style={{ "opacity": "0.9" }} pill className="available-post">
                {post.availability.charAt(0).toUpperCase() + post.availability.substr(1).toLowerCase()}
            </Badge>
            <div className='row mt-2'>
                <div className='col'>
                    <img src={`${post.postImage}`} alt={`${post.title}`} className='single-post-img' />
                </div>
                <div className='col single-post-text'>
                    <h2>{post.title}</h2>
                    <div className='single-post-seller'>
                        <span>
                            Sold by{' '}
                        </span>
                        <Link to={`/profile/${post.user.id}`}>{post.user.name}</Link>
                    </div>
                    <p>
                        <span className='single-post-bold'>
                            Bid:{' '}
                        </span>
                        ${post.bidPrice}
                    </p>
                    <div className='single-post-desc'>
                        <div className='single-post-bold'>Description:{' '}</div>
                        <div>{post.description}</div>
                    </div>
                    <List type="inline">
                        <ListInlineItem className='single-post-bold'>Categories:{' '}</ListInlineItem>
                        {post.categories.map(category => (
                            <ListInlineItem key={category.id}>
                                {category.categoryName}
                            </ListInlineItem>))}
                    </List>
                    <Link to={'#'}>Message Seller</Link>
                </div>
            </div>


        </div>
    )
}
export default SinglePost;