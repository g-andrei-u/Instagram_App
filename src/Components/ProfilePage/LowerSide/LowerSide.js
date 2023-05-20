import React, { useState } from "react";

import TomPost from '../../Pictures/Tom-and-Jerry.jpg';
import Heart from '../../Pictures/full-heart-shaped-white-transparent.png';
import Comment from '../../Pictures/full-white-comment.png';
import Saved from '../../Pictures/saved.png';
import Raven from '../../Pictures/Raven.png';
import Grid from '../../Pictures/grid-post.png';

import './LowerSide.css';


function LowerSide() {

    const [onHover, setOnHover] = useState(false);
    const [isActive, setIsActive] = useState(false);


    const handleOnMouseEnter = () => {setOnHover(true)};
    const handleOnMouseLeave = () => {setOnHover(false)};

    const handleOnClickSaved = () => {setIsActive(true)};
    const handleOnClickPosts = () => {setIsActive(false)};


    const hoverStyle = {
        display: onHover === true ? 'flex' : 'none'
    };

    const navStyle = {
        borderTop: isActive ? '' : '1px solid black',
    };

    const heartStyle = {
        width: '20px', 
        marginRight: '-4px'
    };


    return(
        <div className="lower-side">
            <nav>
                <a onClick={handleOnClickPosts} style={navStyle} ><img src={Grid} style={{width: 13, height: 13, marginRight: 5}} /><p>POSTS</p></a>
                <a onClick={handleOnClickSaved} style={{borderTop: isActive ? '1px solid black' : ''}} ><img src={Saved} style={{width: 12, height: 14, marginRight: 5}} /><p>SAVED</p></a>
            </nav>

            <div style={{display: isActive ? 'grid' : ''}} id="saved">
                <div className="post">
                    <img onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="post-image" src={Raven} />
                </div>
                <div style={hoverStyle} className="on-hover">
                    <img style={heartStyle} src={Heart} />
                    <p>1289</p>
                    <img style={{width: '20px', marginRight: '-4px', marginLeft: '15px'}} src={Comment} />
                    <p>200</p>
                </div>
            </div>

            <div style={{display: isActive ? 'none' : ''}} id="posts">
                <div className="post">
                    <img onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="post-image" src={TomPost} />
                </div>
                <div style={hoverStyle} className="on-hover">
                    <img style={heartStyle} src={Heart} />
                    <p>298</p>
                    <img style={{width: '20px', marginRight: '-4px', marginLeft: '15px'}} src={Comment} />
                    <p>10</p>
                </div>
            </div>
        </div>
    )
};


export default LowerSide;