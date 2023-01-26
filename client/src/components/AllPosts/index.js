import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, CardImg, CardLink, Badge } from 'reactstrap'

const AllPosts = ({ posts }) => {

    return (
        <div>
            <div className='container'>
                <div className="row">
                    {posts && posts.map(post => (
                        <div key={post.id} className='col-xs-8 col-sm-6 col-md-4 col-lg-3'>
                            <Card className='mb-4'>
                                <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                    <CardBody>
                                        <CardTitle tag='h6'>{post.title}</CardTitle>
                                        <CardText>
                                            Bid: ${post.bidPrice}
                                            {' '}
                                            <Badge color={post.availability === 'available' ? "success" : "secondary"} style={{ "opacity": "0.9" }} pill className="available-post">{post.availability.charAt(0).toUpperCase() + post.availability.substr(1).toLowerCase()}</Badge>
                                        </CardText>
                                    </CardBody>
                                    <CardImg src={`${post.postImage}`} alt={`${post.title}`} />
                                </Link>
                                <CardBody>
                                    <CardText>Sold by
                                        {' '}
                                        <CardLink href={`/profile/${post.user.id}`}>{post.user.name}</CardLink>
                                    </CardText>
                                </CardBody>

                            </Card>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default AllPosts;