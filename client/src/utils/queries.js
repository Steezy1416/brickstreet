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