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
        postImage: String
        title: String!
        description: String!
        bidPrice: String!
        createdAt: String!
    }

    type Chat {
        id: ID!
        seller: User!
        chatName: String!
        buyer: User!
        messages: [Message]
    }

    type Message {
        id: ID!
        user: User!
        chat: Chat!
        textMessage: String!
        createdAt: String!
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
        getPost(postId: ID!, userId: ID!): Post
        getPosts: [Post]
        getChat(id: ID!): Chat 
        getChats: [Chat]
        getMessage(chatId: ID!, userId: ID!): Message
        getMessages: [Message]
    }

    type Mutation {
        createUser(name: String!, password: String!): User
        createPost(userId: String!, postImage: String!, title: String!, description: String!, bidPrice: String!): Post
        createChatWithUser(sellerId: String!, buyerId: String!, chatName: String! ): Chat
        createMessage(userId: String!, chatId: String!, textMessage: String!): Message

    }
`
        //delete post
        //delete message
        //--------------
        //update user
        //update post
        //update chat
    