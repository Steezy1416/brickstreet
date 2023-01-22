import React from "react";
import { Link } from 'react-router-dom';
import { CardGroup, Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap'
import { useQuery } from "@apollo/client";

import { useParams } from "react-router-dom";

const AllPosts = ({ posts }) => {

    return (
        <div>
            <CardGroup className='m-5'>
                {posts && posts.map(post => (
                    <div key={post.id}>
                        <Card style={{ width: '15rem' }} className='m-2'>
                            <CardBody>
                                <CardTitle tag='h6'>{post.title}</CardTitle>
                                <CardText>Bid: {post.bidPrice}</CardText>
                            </CardBody>
                            <CardImg src={`${post.postImage}`} alt={`${post.title}`} />
                            <CardBody>
                                <CardText>Sold by
                                    {' '}
                                    <Link to={`/profile/${post.user.id}`}>{post.user.name}</Link>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </CardGroup>
        </div>
    )
}

export default AllPosts;