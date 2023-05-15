import React, { useState } from "react";
import PostSettings from "./PostSettings/PostSettings";

import NormalHeart from '../Pictures/heart-shaped-instagram-transparent-image.png'
import HeartImageRed from '../Pictures/heart-logo-red-transparent.png';
import ShareImage from '../Pictures/messeges.png';
import InstaCommentImage from '../Pictures/insta-comment.png';
import SavedImg from '../Pictures/saved.png';
import SavedImageFull from '../Pictures/saved-full.png';

import './Post.css';


const timeStyle = {

    color: 'rgba(0, 0, 0, 0.4)'
};


function Post(props) {

    const [heartImage, setHeartImage] = useState(NormalHeart);
    const [savedImage, setSavedImage] = useState(SavedImg);
    const [number, setNumber] = useState(props.likes);


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

    const handleOnSavedChange = () => {

        if(savedImage === SavedImg) {

            setSavedImage(SavedImageFull);
        }

        if(savedImage === SavedImageFull) {

            setSavedImage(SavedImg);
        }
    };


    const widthHeartStyle = {
        width: heartImage === HeartImageRed? '25px' : '26px',
        marginBottom: heartImage === HeartImageRed? 5 : 3,
        marginTop: heartImage === HeartImageRed? 6 : 5,
        marginRight: heartImage === HeartImageRed? 3 : 5,
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
        fontSize: '14px',
        marginBottom: 10,
        marginTop: 8
    }


    return (
        <>
        <PostSettings update={props.update} />
        <div onClick={props.handleOnExit} id="post">
            <section id="first-bar">
                <div id="inner-bar">
                    <img id="small-image" src={props.profileImg} />
                    <p>{props.name}</p>
                    <p style={timeStyle}>{props.time}</p>
                </div>
                <button onClick={props.handleOnPress}>...</button>
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
                <img onClick={handleOnSavedChange} className="img-logo" style={{width: '18px', height: '23px', margin: '8px 5px'}} src={savedImage} />
            </section>

            <section>
                <p style={likesStyle}>Liked by {number}</p>
                <p style={commentsStyle}>View all comments</p>
                <p style={commentsStyle}>Add a comment...</p>
            </section>
        </div>
        </>
    )
};


export default Post;