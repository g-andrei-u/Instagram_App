import React, { useState } from "react";
import { posts } from "../../Content/Content";
import SavedPost from "./SavedPost/SavedPost";
import TomPost from '../../Pictures/Tom-and-Jerry.jpg';
import Saved from '../../Pictures/saved.png';
import Raven from '../../Pictures/Raven.png';
import Grid from '../../Pictures/grid-post.png';

import './LowerSide.css';


function LowerSide(props) {

    const [isActive, setIsActive] = useState(false);


    const handleOnClickSaved = () => {setIsActive(true)};
    const handleOnClickPosts = () => {setIsActive(false)};


    const navStyle = {
        borderTop: isActive ? '' : '1px solid black',
    };


    return(
        <div className="lower-side">
            <nav>
                <a onClick={handleOnClickPosts} style={navStyle} ><img src={Grid} style={{width: 13, height: 13, marginRight: 5}} /><p>POSTS</p></a>
                <a onClick={handleOnClickSaved} style={{borderTop: isActive ? '1px solid black' : ''}} ><img src={Saved} style={{width: 12, height: 14, marginRight: 5}} /><p>SAVED</p></a>
            </nav>

            <div style={{display: isActive ? 'grid' : ''}} id="saved">
                <SavedPost
                position='first-position'
                img={Raven} 
                likes={548} 
                comments={123}
                show={true} 
                />

                <SavedPost
                position='second-position'
                img={posts.Sam.mainImage}
                likes={posts.Sam.likes} 
                comments={posts.Sam.comments}
                show={props.saved1}
                />

                <SavedPost
                position='position-tree'
                img={posts.Gaston.mainImage}
                likes={posts.Gaston.likes} 
                comments={posts.Gaston.comments}
                show={props.saved2}
                />
                
                <SavedPost
                position='position-four'
                img={posts.Shrek.mainImage}
                likes={posts.Shrek.likes} 
                comments={posts.Shrek.comments}
                show={props.saved3}
                />

                <SavedPost
                position='position-five'
                img={posts.Lola.mainImage}
                likes={posts.Lola.likes} 
                comments={posts.Lola.comments}
                show={props.saved4}
                />
            </div>

            <div style={{display: isActive ? 'none' : ''}} id="posts">
            <SavedPost
                position='first-position'
                img={TomPost}
                likes={89} 
                comments={13}
                show={true}  
                />

            <SavedPost
                position='second-position'
                img={props.image}
                likes={0} 
                comments={0}
                show={props.image ? true : false}  
                />
            </div>
        </div>
    )
};


export default LowerSide;