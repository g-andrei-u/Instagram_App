import React, { useState } from "react";

import './Post.css';

import NormalHeart from '../Pictures/heart-shaped-instagram-transparent-image.png'
import HeartImageRed from '../Pictures/heart-logo-red-transparent.png';
import ShareImage from '../Pictures/messeges.png';
import InstaCommentImage from '../Pictures/insta-comment.png';
import SavedImage from '../Pictures/saved.png';

const timeStyle = {

    color: 'rgba(0, 0, 0, 0.4)'
};


function Post(props) {

    const [heartImage, setHeartImage] = useState(NormalHeart);
    const [number, setNumber] = useState(100);


    const handleOnHeartChange = () => {

        if(heartImage === NormalHeart) {

            setHeartImage(HeartImageRed);
            setNumber(prev => prev + 1);
        }

        if(heartImage === HeartImageRed) {

            setHeartImage(NormalHeart);
            setNumber(prev => prev - 1);
        }
    };


    const widthHeartStyle = {
        width: heartImage === HeartImageRed? '22px' : '34px',
        marginBottom: heartImage === HeartImageRed? 5 : 0,
        margintop: heartImage === HeartImageRed? 5 : 2,
        marginRight: heartImage === HeartImageRed? 5 : 0,
        marginLeft: heartImage === HeartImageRed? 5 : 0,
        opacity: heartImage === HeartImageRed? 1 : '',
    };

    const likesStyle = {
        fontWeight: '700',
        fontSize: '14px'
    }

    const commentsStyle = {
        color: 'rgba(0, 0, 0, 0.6)',
        fontWeight: '400',
        fontSize: '14px'
    }


    return (
        <div id="post">
            <section id="first-bar">
                <div id="inner-bar">
                    <img id="small-image" src={props.smallImg} />
                    <p>UserName</p>
                    <p style={timeStyle}>5h</p>
                </div>
                <button>...</button>
            </section>

            <section style={{display: 'flex', justifyContent: 'center'}}>
                <img id="main-image" src={props.mainImg} />
            </section>

            <section id="last-bar">
                <div>
                    <img onClick={handleOnHeartChange} className="img-logo" style={widthHeartStyle} src={heartImage} />
                    <img className="img-logo" style={{width: '32px', marginBottom: 0}} src={InstaCommentImage} />
                    <img className="img-logo" style={{width: '23px'}} src={ShareImage}/>
                </div>
                <img className="img-logo" style={{width: '60px', margin: -10}} src={SavedImage} />
            </section>

            <section>
                <p style={likesStyle}>Liked by {number}</p>
                <p style={commentsStyle}>View all comments</p>
                <p style={commentsStyle}>Add a comment...</p>
            </section>
        </div>
    )
};


export default Post;