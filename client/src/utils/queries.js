import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
    query getPosts {
        id
        user
        topBidder
        postImage
        title
        description
        bidPrice
        categories
        availability
        createdAt
    }
`
export const QUERY_POST = gql`
    query getPost($id:ID!) {
        getPost(id:$id) {
            id
            user
            topBidder
            postImage
            title
            description
            bidPrice
            categories
            availability
            createdAt
        }
    }
`;

export const QUERY_USER = gql`
    query getUser($id:ID!) {
        getUser(id:$id){
            id
            name
            posts {
                id
                user
                topBidder
                postImage
                title
                description
                bidPrice
                categories
                availability
                createdAt
            }
            profilePicture
        }
    }
`