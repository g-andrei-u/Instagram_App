import React from "react";
import './MessagesPage.css';
import Jerry from '../Pictures/jerry.png';

export default function MessagesPage(props) {
    return (props.messagesPage) ? (
        <div className="Page">
            <div className="inner-page">
                <div className="people">
                    <div className="my-user">
                        <h3>Tom_from_Tom.and.Jerry</h3>
                    </div>
                    <div className="accounts">
                        <div className="account-messages">
                            <img className="profile-pic-messages" src={Jerry} />
                            <div className="inner-profile">
                                <h5>Jerry_mr.I.like.Cheese</h5>
                                <p>Active 3h ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="messages">
                </div>
            </div>
        </div>
    ) : ''
}