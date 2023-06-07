import React, { useState } from "react";
import './MessagesPage.css';
import Jerry from '../Pictures/jerry.png';
import Arrow from '../Pictures/up-arrow.png';


export default function MessagesPage(props) {

    const [value, setValue] = useState('');
    const [newMessage, setNewMessage] = useState([]) ;

    const onChange = (e) => {

        setValue(e.target.value)
    };

    const addMessage = () => {

        if (value.length > 0){
            setNewMessage((prev) => [...prev, {text: value}])
        }
        setValue('')
    };


    return (props.messagesPage) ? (
        <div className="Page">
            <div className="inner-page">

                <div className="people">
                    <div className="my-user">
                        <h3>Tom_from_Tom.and.Jerry</h3>
                    </div>

                    <div className="accounts">
                        <div className="account-messages">
                            <img className="profile-pic-messages" src={Jerry} alt="jerry" />
                            <div className="inner-profile">
                                <h5>Jerry_mr.I.like.Cheese</h5>
                                <p>Active 3h ago</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="messages">
                    <div className="account-messages">
                        <img className="profile-pic-messages" src={Jerry} alt="jerry" />
                        <div className="inner-profile">
                            <h4>Jerry_mr.I.like.Cheese</h4>
                            <p>Active 3h ago</p>
                        </div>
                    </div>

                    <div className="messages-chat">
                        <div className="messages-show">
                            <div className="message you">
                                <p>I sware that I didn't see the milk</p>
                            </div>
                            <div className="message you">
                                <p>I don't even like milk!!!!</p>
                            </div>
                            <div className="message me">
                                <p>Shut up I know evrything!</p>
                            </div>
                            <div className="message you">
                                <p>Ok, maybe just a litlle</p>
                            </div>
                            {newMessage.map((message) => {
                                return (
                                    <div className="message me">
                                    <p>{message.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="messages-input">
                            <input type="text" placeholder="Message..." value={value} onChange={onChange} />
                            <button onClick={addMessage}>
                                <img src={Arrow} alt="arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : ''
}