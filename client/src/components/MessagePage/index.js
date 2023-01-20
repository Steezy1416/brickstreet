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
                        {/* TODO: uncomment if we want a 'search messages' feature */}
                        {/* <div className='col-6'><input className="form-control me-auto" type="text" placeholder="Search" aria-label="Add your item here..."></input></div><button type="button" className="btn btn-secondary col-2">Submit</button> */}
                        <button className="btn me-2 py-2 px-4 btn-moving-gradient btn-moving-gradient--orange new-msg-btn col-3 h2">
                            New Message
                        </button>
                    </div>
                </div>
                <div class="container">
                    <div class="row msgs-div">
                        <div class="col-md-4 all-msgs-div">
                            <ListGroup>
                                <ListGroupItem active>
                                    <ListGroupItemHeading>
                                        Alecia Maragh
                                    </ListGroupItemHeading>
                                    <ListGroupItemText>
                                        Hi! I'm interested in purchasing the Star...
                                    </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <ListGroupItemHeading>
                                        Alexander Fortin
                                    </ListGroupItemHeading>
                                    <ListGroupItemText>
                                        Hey, I have a question about the set...
                                    </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <ListGroupItemHeading>
                                        Pablo Ramirez
                                    </ListGroupItemHeading>
                                    <ListGroupItemText>
                                        Is this set missing any pieces? Can you...
                                    </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <ListGroupItemHeading>
                                        Josh Thomas
                                    </ListGroupItemHeading>
                                    <ListGroupItemText>
                                        Does your Black Panther Lego set have...
                                    </ListGroupItemText>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                        <div class="col-md-8">
                            <ListGroup>
                                <ListGroupItem>
                                    <div className='containerForTitle'>
                                        <h3>
                                            Star Wars Star Destroyer
                                        </h3>
                                    </div>
                                    <div className='messageListContainer'>
                                        <div className='timestamp'>Wednesday, January 18, 2023 11:11 AM</div>
                                        <div className='messageBubbleContainer mine'>
                                            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                        </div>
                                        <div className='messageBubbleContainer theirs'>
                                            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                        </div>
                                        <div className='messageBubbleContainer theirs'>
                                            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                        </div>
                                        <div className='messageBubbleContainer mine'>
                                            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem lorem ipsum lorem ipsum lorem ipsum ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                        </div>
                                        <div className='timestamp'>Thursday, January 19, 2023 11:44 AM</div>
                                        <div className='messageBubbleContainer mine'>
                                            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                        </div>
                                        <div className='messageBubbleContainer theirs'>
                                            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                                        </div>
                                        <div className='messageBubbleContainer theirs'>
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