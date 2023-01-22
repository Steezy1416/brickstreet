import React from "react";
import { Link } from 'react-router-dom';
import { CardGroup, Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg, CardLink, Badge } from 'reactstrap'

import { useParams } from "react-router-dom";

const AllPosts = ({ posts }) => {

    return (
        <div>
            <CardGroup className='m-3'>
                {posts && posts.map(post => (
                    
                    <div key={post.id}>
                        <Card style={{ width: '15rem' }} className='m-2'>
                            <CardBody>
                                <CardTitle tag='h6'>{post.title}</CardTitle>
                                <CardText>
                                    Bid: {post.bidPrice}
                                    {' '}
                                    <Badge color={post.availability === 'available' ? "success":"secondary"} style={{ "opacity": "0.9" }} pill className="available-post">{post.availability.charAt(0).toUpperCase() + post.availability.substr(1).toLowerCase()}</Badge>
                                </CardText>
                            </CardBody>
                            <CardImg src={`${post.postImage}`} alt={`${post.title}`} />
                            <CardBody>
                                <CardText>Sold by
                                    {' '}
                                    <CardLink href={`/profile/${post.user.id}`}>{post.user.name}</CardLink>
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