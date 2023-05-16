import React from "react";
import Post from "../Post/Post";

import Image20 from '../Pictures/lola__selfie_by_super_cartoonist.png';
import Image21 from '../Pictures/lola-bunny.png';
import Image22 from '../Pictures/StoriesPictures/Profile-Gaston.png';
import Image23 from '../Pictures/Gaston.png';
import Image24 from '../Pictures/sam.jpeg';
import Image25 from '../Pictures/StoriesPictures/yosemite-sam.jpeg';
import Image26 from '../Pictures/StoriesPictures/shrek.jpg';
import Image27 from '../Pictures/Shrek.jpg';

import './Content.css';


const posts = {

    Sam: {
        name: 'YSM._.Sam',
        time: '1h',
        likes: 19,
        description: 'new guns🤠',
        profileImage: Image25,
        mainImage: Image24
    },

    Gaston: {
        name: 'Gaston',
        time: '3h',
        likes: 89,
        description: 'push-ups after hunting are always the best😎💪',
        profileImage: Image22,
        mainImage: Image23
    },

    Shrek: {
        name: 'Shrek',
        time: '5h',
        likes: 1999,
        description: 'new camera🤳',
        profileImage: Image26,
        mainImage: Image27
    },

    Lola: {
        name: 'Lola',
        time: '7h',
        likes: 299,
        description: '🧠 < ❤️',
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
            name={posts.Sam.name}
            time={posts.Sam.time}
            likes={posts.Sam.likes}
            description={posts.Sam.description}
            mainImg={posts.Sam.mainImage} 
            profileImg={posts.Sam.profileImage} 
            />

            <Post 
            update={props.update}
            handleOnExit={props.handleOnExit} 
            handleOnPress={props.handleOnPress} 
            name={posts.Gaston.name}
            time={posts.Gaston.time}
            likes={posts.Gaston.likes}
            description={posts.Gaston.description}
            mainImg={posts.Gaston.mainImage} 
            profileImg={posts.Gaston.profileImage} 
            />

            <Post 
            update={props.update}
            handleOnExit={props.handleOnExit} 
            handleOnPress={props.handleOnPress} 
            name={posts.Shrek.name}
            time={posts.Shrek.time}
            likes={posts.Shrek.likes}
            description={posts.Shrek.description}
            mainImg={posts.Shrek.mainImage} 
            profileImg={posts.Shrek.profileImage} 
            />

            <Post 
            update={props.update}
            handleOnExit={props.handleOnExit} 
            handleOnPress={props.handleOnPress} 
            name={posts.Lola.name}
            time={posts.Lola.time}
            likes={posts.Lola.likes}
            description={posts.Lola.description}
            mainImg={posts.Lola.mainImage} 
            profileImg={posts.Lola.profileImage} 
            />
        </div>
    )
};


export default Content;