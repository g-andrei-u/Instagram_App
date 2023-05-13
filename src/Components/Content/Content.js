import React from "react";
import Post from "../Post/Post";

import Image20 from '../Pictures/lola__selfie_by_super_cartoonist.png';
import Image21 from '../Pictures/lola-bunny.png';
import Image22 from '../Pictures/StoriesPictures/Profile-Gaston.png';
import Image23 from '../Pictures/Gaston.png';

import './Content.css';


const posts = {

    Gaston: {
        name: 'Gaston',
        time: '3h',
        likes: 89,
        profileImage: Image22,
        mainImage: Image23
    },

    Lola: {
        name: 'Lola',
        time: '5h',
        likes: 299,
        profileImage: Image21,
        mainImage: Image20
    }
}


function Content(props) {
    return (
        <div id="content">
            <Post 
            update={props.update}
            handleOnExit={props.handleOnExit} 
            handleOnPress={props.handleOnPress} 
            name={posts.Gaston.name}
            time={posts.Gaston.time}
            likes={posts.Gaston.likes}
            mainImg={posts.Gaston.mainImage} 
            profileImg={posts.Gaston.profileImage} 
            />

            <Post 
            update={props.update}
            handleOnExit={props.handleOnExit} 
            handleOnPress={props.handleOnPress} 
            name={posts.Lola.name}
            time={posts.Lola.time}
            likes={posts.Lola.likes}
            mainImg={posts.Lola.mainImage} 
            profileImg={posts.Lola.profileImage} 
            />
        </div>
    )
};


export default Content;