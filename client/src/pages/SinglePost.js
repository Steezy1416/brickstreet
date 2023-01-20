import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


const SinglePost = props => {
    return (
        <div>
            THIS IS A SINGLE POST
            <div>
                POST TITLE
            </div>
            <div>USERNAME</div>
        </div>
    )
}