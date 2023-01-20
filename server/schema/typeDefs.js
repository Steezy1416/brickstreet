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
        topBidder: User
        postImage: String
        title: String!
        description: String!
        bidPrice: Int!
        categories: [Category]
        availability: PostAvailable
        createdAt: String!
    }

    enum PostAvailable {
        available
        unavailable
    }

    type Category {
        id: ID!
        categoryName: String!
    }

    type Chat {
        id: ID!
        seller: User
        chatName: String!
        buyer: User
        messages: [Message]
        users: [User]
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
        getPostByAvailability(availability: PostAvailable): Post
        getPosts: [Post]
        getCategory(categoryId: ID!): Category
        getCategories: [Category]
        getChat(id: ID!): Chat 
        getChats: [Chat]
        getMessage(chatId: ID!, userId: ID!): Message
        getMessages: [Message]
    }

    type Mutation {
        ## User Mutations
        createUser(name: String!, password: String!): User
        updateProfilePicture(userId: ID!, profilePicture: String!): User

        ## Post Mutations
        createPost(userId: ID!, postImage: String!, title: String!, description: String!, bidPrice: Int!, categoryIds: [ID], availability: PostAvailable!): Post
        deletePost(postId: ID!): Post
        updatePost(postId: ID!, title: String, description: String, availability: PostAvailable): Post
        updateBidPrice(postId: ID!, bidPrice: Int!, topBidderId: ID): Post

        ## Category Mutations
        createCategory(categoryName: String): Category
        deleteCategory(categoryId: ID): Category

        ## Chat Mutations
        createChatWithUser(sellerId: ID!, buyerId: ID!, chatName: String! ): Chat
        leaveChat(chatId: String!, userId: ID!): Chat

        ## Message Mutations
        createMessage(userId: ID!, chatId: ID!, textMessage: String!): Message
        deleteMessage(messageId: ID!): Message

    }
`