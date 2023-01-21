import { gql } from "@apollo/client"

export const GetUserChats = gql`
    query Query($getUserId: ID!) {
    getUser(id: $getUserId) {
        id
        name
        chats {
            id
            chatName
        }
    }
}
`

export const GetChatMessages = gql`
    query Query($getChatId: ID!) {
    getChat(id: $getChatId) {
        chatName
        messages {
            id
            textMessage
        }
    }
}
`