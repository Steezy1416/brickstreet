module.exports = typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        password: String!
        posts: [Post]
        chats: [Chat]
        messages: [Message]
        profilePicture: String
    }

    type Post {
        id: ID!
        user: User!
        bidders: [User]
        postImage: String!
        title: String!
        description: String!
        bidPrice: String!
        createdAt: String!
    }

    type PostInput {
        userId: String
        postImage: String
        title: String
        description: String
        bidPrice: String
    }

    type Chat {
        id: ID!
        chatName: String!
        users: [User]
        messages: [Message]
    }

    type Message {
        id: ID!
        user: User!
        chat: Chat!
        textMessage: String!
        createdAT: String!
    }

    type Query: {
        getUser(id: ID!): User
        getUsers: [User]
        getPost(postId: ID!, userId: ID!): Post
        getsPosts: [Post]
        getChat(id: ID): Chat 
        getChats: [Chat]
        getMessage(chatId: ID!, userId: ID!)
        getMessages: [Message]
    }

    type Mutation: {
        createUser(name: String!, password: String!): User
        createPost(post: PostInput!): Post
        createChat(userId: String!): Chat
        createMessage(userId: String!, chatId: String!, textMessage: String!): Message
    }
`