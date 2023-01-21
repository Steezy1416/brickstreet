const { User, Post, Category, Chat, Message } = require("../models")
const { findByIdAndDelete } = require("../models/Chat")
const { format_date } = require("../utils/formater")

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
        getPostByAvailability: async (_, args) => {
            const posts = await Post.find(args)
            for (let i = 0; i < posts.length; i++) {
                return posts[i]
            }
        },
        getPosts: async () => {
            return await Post.find({})
        },
        getCategory: async (_, args) => {
            return await Category.findById(args.id)
        },
        getCategories: async () => {
            return await Category.find({})
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
            console.log(parent)
            return await Chat.find({ userIds: {$all: [parent.id]} })
        },
        async messages(parent) {
            return await Message.find({ userId: parent.id })
        }
    },
    Post: {
        async user(parent) {
            return await User.findById(parent.userId)
        },
        async categories({ categoryIds }) {
            const categories = []
            for (let i = 0; i < categoryIds.length; i++) {
                const category = await Category.findById(categoryIds[i])
                categories.push(category)
            }
            return categories
        },
        async topBidder(parent) {
            return await User.findById(parent.topBidderId)
        }
    },
    Chat: {
        async seller(parent) {
            return await User.findById(parent.sellerId)
        },
        async buyer(parent) {
            return await User.findById(parent.buyerId)
        },
        async messages(parent) {
            return await Message.find({ chatId: parent.id })
        },
        async users({ userIds }) {
            const users = []
            for (let i = 0; i < userIds.length; i++) {
                const user = await User.findById(userIds[i])
                users.push(user)
            }
            return users
        }
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
        updateProfilePicture: async (_, args) => {
            return await User.findByIdAndUpdate(
                args.userId,
                { profilePicture: args.profilePicture },
                { new: true }
            )

        },


        createPost: async (_, args) => {
            const date = new Date()

            const createdAt = format_date(date)

            console.log(args)

            const post = new Post({
                userId: args.userId,
                postImage: args.postImage,
                title: args.title,
                description: args.description,
                bidPrice: args.bidPrice,
                categoryIds: args.categoryIds,
                availability: args.availability,
                createdAt: createdAt
            })

            return await post.save()
        },
        deletePost: async (_, args) => {
            return await Post.findByIdAndDelete(
                args.postId,
                { new: true }
            )
        },
        updatePost: async (_, args) => {
            return await Post.findByIdAndUpdate(
                args.postId,
                {
                    title: args.title,
                    description: args.description,
                    availability: args.availability
                },
                { new: true }
            )
        },
        updateBidPrice: async (_, args) => {
            return await Post.findByIdAndUpdate(
                args.postId,
                {
                    bidPrice: args.bidPrice,
                    topBidderId: args.topBidderId
                },
                { new: true }
            )
        },


        createCategory: async (_, args) => {
            const category = new Category({
                categoryName: args.categoryName
            })

            return await category.save()
        },
        deleteCategory: async (_, args) => {
            const posts = await Post.find({ categoryIds: { $all: [args.categoryId] } })
            for (let i = 0; i < posts.length; i++) {
                return await Post.findByIdAndUpdate(
                    posts[i].id,
                    { $pull: { categoryIds: { $all: [args.categoryId] } } },
                    { new: true }
                )
                    .catch(err => console.log(err))
            }
            return category = await Category.findByIdAndDelete(
                args.categoryId,
                { new: true }
            )
        },


        createChatWithUser: async (_, args) => {
            const chat = new Chat({
                sellerId: args.sellerId,
                buyerId: args.buyerId,
                chatName: args.chatName,
                userIds: [args.sellerId, args.buyerId]
            })

            return await chat.save()
        },
        leaveChat: async (_, args) => {
            return await Chat.findByIdAndUpdate(
                args.chatId,
                { $pull: { userIds: { $all: [args.userId] } } },
                { new: true }
            )
        },


        createMessage: async (_, args) => {
            const date = new Date()

            const createdAt = format_date(date)
            console.log(createdAt)

            const message = new Message({
                userId: args.userId,
                chatId: args.chatId,
                textMessage: args.textMessage,
                createdAt: createdAt
            })

            return await message.save()
        },
        deleteMessage: async (_, args) => {
            return await Message.findByIdAndDelete(
                args.messageId,
                { new: true }
            )
        }

    }
}