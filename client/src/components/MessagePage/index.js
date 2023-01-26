import React, { useState } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { useQuery, useMutation } from "@apollo/client"
import { GetUserChats, CreateMessage, DeleteMessage } from "./queries/queries"

const { io } = require("socket.io-client")
const socket = io("http://localhost:3000")


function MessagePage() {

    const [chatState, setChatState] = useState({
        currentChatId: "",
        messages: []
    })


    const { loading, error, data, refetch } = useQuery(GetUserChats, {
        variables: {
            getUserId: "63d1ea50e98261f2bf754fed"
        }
    })

    socket.on("displayMessage", (data) => {
        if (data.currentChatId === chatState.currentChatId) {
            setChatState({
                currentChatId: chatState.currentChatId,
                messages: [...chatState.messages, {
                    __typename: data.__typename,
                    textMessage: data.textMessage,
                    id: data.id,
                    user: {
                        id: "63d1ea50e98261f2bf754fed",
                        textMessage: data.textMessage
                    }
                }]
            })
        }
        refetch()
    })

    socket.on("displayMessageAfterDelete", (data) => {
        if (data.currentChatId === chatState.currentChatId) {
            setChatState({
                currentChatId: chatState.currentChatId,
                messages: data.messages
            })
        }
        refetch()
    })

    const [createMessage, info] = useMutation(CreateMessage, {
        onCompleted: (messageData) => {
            console.log(messageData.createMessage)
            setChatState({
                currentChatId: chatState.currentChatId,
                messages: [...chatState.messages, {
                    __typename: messageData.createMessage.__typename,
                    id: messageData.createMessage.id,
                    textMessage: messageData.createMessage.textMessage,
                    user: {
                        id: "63d1ea50e98261f2bf754fed",
                        textMessage: messageData.createMessage.textMessage
                    }
                }]
            })
            refetch()
            socket.emit("sendMessage", {
                currentChatId: chatState.currentChatId,
                __typename: messageData.createMessage.__typename,
                id: messageData.createMessage.id,
                textMessage: messageData.createMessage.textMessage,
                user: {
                    id: "63d1ea50e98261f2bf754fed",
                    textMessage: messageData.createMessage.textMessage
                }
            })
        }
    })

    const [deleteMessage, messageInfo] = useMutation(DeleteMessage, {
        onCompleted: (messageData) => {
            const updatedMessages = chatState.messages.filter(message => message.id !== messageData.deleteMessage.id)

            setChatState({
                currentChatId: chatState.currentChatId,
                messages: updatedMessages
            })
            refetch()
            socket.emit("deleteMessage", {
                currentChatId: chatState.currentChatId,
                messages: updatedMessages
            })
        }
    })

    if (loading) return <p>Loading</p>
    if (error) return <p>{error.message}</p>



    const handleChatClick = e => {
        const div = document.querySelector(".messaging")
        div.classList.remove("hide")
        const chatId = e.target.closest("ul").getAttribute("id")
        const currentChat = data.getUser.chats.filter(chat => chat.id === chatId)
        setChatState({
            currentChatId: chatId,
            messages: currentChat[0].messages
        })
    }

    const sendMessage = e => {
        e.preventDefault()
        const input = document.querySelector(".form-control")
        const inputText = input.value
        createMessage({
            variables:
            {
                userId: "63d1ea50e98261f2bf754fed",
                chatId: chatState.currentChatId,
                textMessage: inputText
            }
        })
        input.value = ""

    }

    const handleMessageDelete = e => {
        const messageId = e.target.closest("div").getAttribute("id")
        deleteMessage({
            variables: {
                messageId
            }
        })
    }

    return (
        <section className="py-4 py-xl-5">
            <div>
                <div className="container mb-5">


                    <div className="row">
                        <h2 className='col msg-pg-title'>Messages:</h2>
                    </div>
                </div>
                <div class="container">
                    <div class="row msgs-div">
                        <div class="col-md-4 all-msgs-div">
                            {data.getUser.chats.map(chat => {
                                return (
                                    <ListGroup id={chat.id} key={chat.id}
                                        onClick={e => handleChatClick(e)}>
                                        <ListGroupItem active>
                                            <ListGroupItemHeading>
                                                {chat.chatName}
                                            </ListGroupItemHeading>
                                        </ListGroupItem>
                                    </ListGroup>
                                )
                            })}
                        </div>
                        <div class="messaging col-md-8 hide">
                            <ListGroup>
                                <ListGroupItem>

                                    <div className='messageListContainer'>
                                        {
                                            chatState.messages.map(message => {
                                                if ("63d1ea50e98261f2bf754fed" === message.user.id) {
                                                    return (
                                                        <div className='msg-body messageBubbleContainer mine' id={message.id} key={message.id}>
                                                            {/* TODO: add margin right to p tag or margin left to button */}
                                                            <p className='wrapTheMsg'>{message.textMessage}</p>
                                                            {/* TODO: add style to button, maybe black button */}
                                                            <button className='btn ms-1 me-1 py-2 px-4 btn-moving-gradient btn-moving-gradient--black new-msg-btn col-3 h2 delete-msg-btn' onClick={handleMessageDelete}>Delete</button>
                                                        </div>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <div className='msg-body messageBubbleContainer theirs' id={message.id} key={message.id}>
                                                            <p className='wrapTheMsg'>{message.textMessage}</p>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                    
                                        <form className='writeMessage' onSubmit={sendMessage}>
                                            <input className="form-control me-auto" type="text" placeholder="Send a message..." aria-label="Add your item here..."></input><button type='submit' className="btn ms-2 py-2 px-4 btn-moving-gradient btn-moving-gradient--orange new-msg-btn col-3">
                                                Send
                                            </button>
                                        </form>
                                    
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MessagePage;