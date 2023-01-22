import React, { useState } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { useQuery, useMutation } from "@apollo/client"
import { GetUserChats } from "./queries/queries"

const { io } = require("socket.io-client")
const socket = io("http://localhost:3000")
socket.on("connect", () => {
    console.log(socket.id)
})

function MessagePage() {

    const [chatState, setChatState] = useState({
        currentChatId: "",
        messages: []
    })

    const { loading, error, data } = useQuery(GetUserChats, {
        variables: {
            getUserId: "63cb8380e8661ddfebf01133"
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
                                                console.log(message)
                                                return (
                                                    <div className='messageBubbleContainer' id={message.id} key={message.id}>
                                                        {message.textMessage}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='writeMessage'>
                                        <input className="form-control me-auto" type="text" placeholder="Send a message..." aria-label="Add your item here..."></input><button className="btn ms-2 py-2 px-4 btn-moving-gradient btn-moving-gradient--orange new-msg-btn col-3">
                                            Send
                                        </button>
                                    </div>
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