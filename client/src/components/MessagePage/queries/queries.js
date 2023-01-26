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
                user {
                  id
                }
            }
        }
    }
}
`

export const CreateMessage = gql`
    mutation Mutation($userId: ID!, $chatId: ID!, $textMessage: String!) {
  createMessage(userId: $userId, chatId: $chatId, textMessage: $textMessage) {
    id
    textMessage
    user {
      id
      name
    }
  }
}
`

export const DeleteMessage = gql`
  mutation Mutation($messageId: ID!) {
  deleteMessage(messageId: $messageId) {
    id
    textMessage
  }
}
`