import React from "react";
import Post from "../Post/Post";

import './Content.css';

import Image20 from '../Pictures/lola__selfie_by_super_cartoonist.png';
import Image21 from '../Pictures/lola-bunny.png'


function Content() {
    return (
        <div id="content">
            <Post mainImg={Image20} smallImg={Image21} />
        </div>
    )
};


export default Content;