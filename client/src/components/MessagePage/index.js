import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
// TODO: 

function MessagePage() {
    return (
        <section className="py-4 py-xl-5">
            <div>
                <div className="container mb-5">


                    <div className="row">
                        <h2 className='col msg-pg-title'>Messages:</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row msgs-div">
                        <div className="col-md-4 all-msgs-div">
                            <ListGroup>
                                <ListGroupItem active>
                                    <ListGroupItemHeading>
                                        Alecia Maragh
                                    </ListGroupItemHeading>
                                    <ListGroupItemText className='msg-body'>
                                        Hi! I'm interested in purchasing the Star...
                                    </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <ListGroupItemHeading>
                                        Alexander Fortin
                                    </ListGroupItemHeading>
                                    <ListGroupItemText className='msg-body'>
                                        Hey, I have a question about the set...
                                    </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <ListGroupItemHeading>
                                        Pablo Ramirez
                                    </ListGroupItemHeading>
                                    <ListGroupItemText className='msg-body'>
                                        Is this set missing any pieces? Can you...
                                    </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <ListGroupItemHeading>
                                        Josh Thomas
                                    </ListGroupItemHeading>
                                    <ListGroupItemText className='msg-body'>
                                        Does your Black Panther Lego set have...
                                    </ListGroupItemText>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                        <div className="col-md-8">
                            <ListGroup>
                                <ListGroupItem>
                                    <div className='containerForTitle'>
                                        <h3>
                                            Star Wars Star Destroyer
                                        </h3>
                                    </div>
                                    <div className='messageListContainer'>
                                        <div className='timestamp'>Wednesday, January 18, 2023 11:11 AM</div>
                                        <div className='msg-body messageBubbleContainer mine'>
                                            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                        </div>
                                        <div className='msg-body messageBubbleContainer theirs'>
                                            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                        </div>
                                        <div className='msg-body messageBubbleContainer theirs'>
                                            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                        </div>
                                        <div className='msg-body messageBubbleContainer mine'>
                                            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem lorem ipsum lorem ipsum lorem ipsum ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                        </div>
                                        <div className='timestamp'>Thursday, January 19, 2023 11:44 AM</div>
                                        <div className='msg-body messageBubbleContainer mine'>
                                            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                        </div>
                                        <div className='msg-body messageBubbleContainer theirs'>
                                            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                        </div>
                                        <div className='msg-body messageBubbleContainer theirs'>
                                            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                        </div>
                                    </div>
                                    <div className='writeMessage'>
                                        {/* <input type="text" placeholder="Send a message"/> */}
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