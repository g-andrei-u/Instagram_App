import React, { useState } from "react";

import TomPost from '../../Pictures/Tom-and-Jerry.jpg';
import Heart from '../../Pictures/full-heart-shaped-white-transparent.png';
import Comment from '../../Pictures/full-white-comment.png';

import './LowerSide.css';


function LowerSide() {

    const [onHover, setOnHover] = useState(false);

    const handleOnMouseEnter = () => {
        setOnHover(true)
    };
    const handleOnMouseLeave = () => {
        setOnHover(false)
    };

    const hoverStyle = {
        display: onHover === true ? 'flex' : 'none'
    };

    const navStyle = {
        borderTop: '1px solid black'
    }


    return(
        <div className="lower-side">
            <nav>
                <a style={navStyle}><img /><p>POSTS</p></a>
                <a><img /><p>SAVED</p></a>
            </nav>
            <div id="posts">
                <div className="post">
                    <img onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="post-image" src={TomPost} />
                </div>
                <div style={hoverStyle} className="on-hover">
                    <img style={{width: '20px', marginRight: '-4px'}} src={Heart} />
                    <p>298</p>
                    <img style={{width: '20px', marginRight: '-4px', marginLeft: '15px'}} src={Comment} />
                    <p>10</p>
                </div>
            </div>
        </div>
    )
};


export default LowerSide;