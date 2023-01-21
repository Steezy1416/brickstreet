import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
    query Query {
        getPosts {
        availability
        id
        title
        bidPrice
        categories {
            categoryName
            id
        }
        user {
            id
            name
        }
        postImage
    }
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
query GetUser($getUserId: ID!) {
    getUser(id: $getUserId) {
      id
      name
      posts {
        id
        postImage
        title
        bidPrice
        availability
        description
        createdAt
        user {
          id
          name
        }
      }
      profilePicture
    }
  }
`

export const QUERY_CATEGORIES = gql`
    query GetCategories {
        getCategories {
            categoryName
            id
        }
    }
`