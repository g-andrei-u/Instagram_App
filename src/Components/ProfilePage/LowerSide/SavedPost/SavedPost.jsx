import React, { useState } from "react";
import '../LowerSide.css'
import Heart from '../../../Pictures/full-heart-shaped-white-transparent.png';
import Comment from '../../../Pictures/full-white-comment.png';


export default function SavedPost(props) {

    const [onHover, setOnHover] = useState(false);

    const handleOnMouseEnter = () => {setOnHover(true)};
    const handleOnMouseLeave = () => {setOnHover(false)};


    const hoverStyle = {
        display: onHover === true ? 'flex' : 'none',
    };

    const heartStyle = {
        width: '20px', 
        marginRight: '-4px'
    };


    return (props.show === true) ? (
    <>
        <div className={props.position}>
            <img onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="post-image" src={props.img} />
        </div>
        <div style={hoverStyle} className={`on-hover ${props.position}`}>
            <img style={heartStyle} src={Heart} />
            <p>{props.likes}</p>
            <img style={{width: '20px', marginRight: '-4px', marginLeft: '15px'}} src={Comment} />
            <p>{props.comments}</p>
        </div>
    </>) : ''
};