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
        async posts(parent) {
            return await Post.find({ userId: parent.id })
        },
        async chats(parent) {
            return await Chat.find({ creatorId: parent.id })
        },
        async messages(parent) {
            return await Message.find({ userId: parent.id })
        }
    },
    Post: {
        async user(parent) {
            return await User.findById(parent.userId)
        },
    },
    Chat: {
        async users(parent) {
            console.log(parent)
        },
        async creator(parent) {
            return await User.findById(parent.creatorId)
        },
        async messages(parent) {
            return await Message.find({ chatId: parent.id })
        },
    },
    Message: {
        async user(parent) {
            return await User.findById(parent.userId)
        },
        async chat(parent) {
            return await Chat.findById(parent.chatId)
        },
    },
    Mutation: {
        createUser: async (_, args) => {
            const user = User({
                name: args.name,
                password: args.password,
            })

            return await user.save()
        },
        createPost: async (_, args) => {
            const post = new Post({
                userId: args.userId,
                postImage: args.postImage,
                title: args.title,
                description: args.description,
                bidPrice: args.bidPrice,
            })

            return await post.save()
        },
        createChat: async (_, args) => {
            const chat = new Chat({
                creatorId: args.creatorId,
                userIds: args.userId,
                chatName: args.chatName
            })

            return await chat.save()
        },
        createMessage: async (_, args) => {
            const message = new Message({
                userId: args.userId,
                chatId: args.chatId,
                textMessage: args.textMessage
            })

            return await message.save()
        },
    }
}