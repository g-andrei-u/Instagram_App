import React from "react";
import Post from "../Post/Post";

import './Content.css';

import Image20 from '../Pictures/lola__selfie_by_super_cartoonist.png';
import Image21 from '../Pictures/lola-bunny.png'


function Content(props) {
    return (
        <div id="content">
            <Post 
            update={props.update}
            handleOnExit={props.handleOnExit} 
            handleOnPress={props.handleOnPress} 
            mainImg={Image20} 
            smallImg={Image21} 
            />
        </div>
    )
};


export default Content;