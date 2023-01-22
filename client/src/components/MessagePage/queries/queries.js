import { gql } from "@apollo/client"

export const GetUserChats = gql`
    query Query($getUserId: ID!) {
    getUser(id: $getUserId) {
        id
        name
        chats {
            id
            chatName
            messages {
                id
                textMessage
            }
        }
    }
}
`