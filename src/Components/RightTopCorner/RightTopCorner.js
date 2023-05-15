import React, { useState } from "react";

import Image10 from '../Pictures/tom-face-sticker-india.png';
import Image11 from '../Pictures/jerry.png';
import Image12 from '../Pictures/Garfield-small.png';
import Image13 from '../Pictures/thomas_jefferson.png';
import Image14 from '../Pictures/dark-vader.png'

import "./RightTopCorner.css"

const styleForOverNames = {

    display: "flex",
    flexDirection: 'column'
}

const nameStyle = {

    color: 'rgba(0, 0, 0, 0.45)',
    fontWeight: '500',
    fontSize: 12
}

const mainNameStyle = {

    color: 'rgba(0, 0, 0, 0.45)',
    fontWeight: '500',
    fontSize: 13
}

const mainImageStyle = {

    display: 'inline',
    width: 60,
    marginRight: 10,
    border: '1px solid rgba(82, 82, 82, 0.5)'
};

const normalImageStyle = {

    display: 'inline',
    width: 30,
    height: 30,
    marginRight: 5,
    border: '1px solid rgba(82, 82, 82, 0.5)'
};

function RightTopCorner(props) {

    const [fallowButton1, setFallowButton1] = useState('Follow');
    const [fallowButton2, setFallowButton2] = useState('Follow');
    const [fallowButton3, setFallowButton3] = useState('Follow');
    const [fallowButton4, setFallowButton4] = useState('Follow');


    const handleOnClick1 = () => {

        fallowButton1 === 'Follow' ? setFallowButton1('Following') : setFallowButton1('Follow');
    }
    const handleOnClick2 = () => {

        fallowButton2 === 'Follow' ? setFallowButton2('Following') : setFallowButton2('Follow');
    }

    const handleOnClick3 = () => {

        fallowButton3 === 'Follow' ? setFallowButton3('Following') : setFallowButton3('Follow');
    }
    const handleOnClick4 = () => {

        fallowButton4 === 'Follow' ? setFallowButton4('Following') : setFallowButton4('Follow');
    };


    return(
    <div onClick={props.handleOnExit} id='right-top'>
        <section id='first-section'>
            <div className="account"> 
                <div className="inner-account">
                    <img style={mainImageStyle} src={Image10} />
                    <div style={styleForOverNames}>
                       <p>Tom_from_Tom.and.Jerry</p>
                       <p style={mainNameStyle}>Tom</p>
                    </div>
                </div>
                <p className='fallowStyle'>Switch</p>
            </div>
        </section>

        
        <section id='mid-section'>
            <h2>Suggested for you</h2>
            <div className="account">
                <div className="inner-account">
                    <img style={normalImageStyle} src={Image11} />
                    <div style={styleForOverNames}>
                        <p>Jerry_mr.I.like.Cheese</p>
                        <p style={nameStyle}>Jerry</p>
                    </div>
                </div>
                <p onClick={handleOnClick1} className={fallowButton1 === 'Follow'? 'fallowStyle' : ''}>{fallowButton1}</p>
            </div>

            <div className="account">
                <div className="inner-account">
                    <img style={normalImageStyle} src={Image12} />
                    <div style={styleForOverNames}>
                        <p>Garfild_the_fat_cat</p>
                        <p style={nameStyle}>Garfild</p>
                    </div>
                </div>
                <p onClick={handleOnClick2} className={fallowButton2 === 'Follow'? 'fallowStyle' : ''}>{fallowButton2}</p>
            </div>

            <div className="account">
                <div className="inner-account">
                    <img style={normalImageStyle} src={Image13} />
                    <div style={styleForOverNames}>
                        <p>Tomas_Jefferson</p>
                        <p style={nameStyle}>Jef</p>
                    </div>
                </div>
                <p onClick={handleOnClick3} className={fallowButton3 === 'Follow'? 'fallowStyle' : ''}>{fallowButton3}</p>
            </div>

            <div className="account">
                <div className="inner-account">
                    <img style={normalImageStyle} src={Image14} />
                    <div style={styleForOverNames}>
                        <p>Dark.Vader</p>
                        <p style={nameStyle}>Mr.Vader</p>
                    </div>
                </div>
                <p onClick={handleOnClick4} className={fallowButton4 === 'Follow'? 'fallowStyle' : ''}>{fallowButton4}</p>
            </div>
        </section>


        <section id="last-section">
            <p>About Help Press API Jobs Privacy Terms Locations Language Meta Verified</p>
            <br />
            <p>© 2023 INSTAGRAM FROM META</p>
        </section>
    </div>)
};

export default RightTopCorner;