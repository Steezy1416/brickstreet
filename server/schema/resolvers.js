const { User, Post, Chat, Message } = require("../models")

module.exports = resolvers = {
    Query: {
        getUser: async (_, args) => {
            return await User.findById(args.id)
        },
        getUsers: async (_, args) => {
            return await User.find({})
        },
        getPost: async (_, args) => {
            return await Post.findById(args.id)
        },
        getPosts: async () => {
            return await Post.find({})
        },
        getChat: async (_, args) => {
            return await Chat.findById(args.id)
        },
        getChats: async () => {
            return await Chat.find({})
        },
        getMessage: async (_, args) => {
            return await Message.findById(args.id)
        },
        getMessages: async () => {
            return await Message.find({})
        },
    },
    User: {
        async posts(parent, args, context, info) {
            console.log(parent, args, context, info)
        },
        async chats(parent, args, context, info) {
            console.log(parent, args, context, info)
        }
    },
    Post: {
        async user(parent, args, context, info) {
            console.log(parent, args, context, info)
        },
    },
    Chat: {
        async users(parent, args, context, info) {
            console.log(parent, args, context, info)
        },
        async messages(parent, args, context, info) {
            console.log(parent, args, context, info)
        },
    },
    Message: {
        async user(parent, args, context, info) {
            console.log(parent, args, context, info)
        },
        async chat(parent, args, context, info) {
            console.log(parent, args, context, info)
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = User({
                name: args.name,
                password: args.password,
            })

            return await user.save()
        },
        createPost: async (parent, args) => {
            const post = new Post({
                userId: args.userId,
                postImage: args.postImage,
                title: args.title,
                description: args.description,
                bidPrice: args.bidPrice,
            })

            return await post.save()
        },
        createChat: async (parent, args) => {
            const chat = new Chat({
                userId: args.userId,
            })

            return await chat.save()
        },
        createMessage: async (parent, args) => {
            const message = new Message({
                userId: args.userId,
                chatId: args.chatId,
                textMessage: args.textMessage
            })

            return await message.save()
        },
    }
}