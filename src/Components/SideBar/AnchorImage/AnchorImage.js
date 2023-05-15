import React, { useState } from "react";


function AnchorImage(props) {

    const [onHover, setOnHover] = useState(false);
    const [onClick, setOnClick] = useState(false);

    const handleMouseEnter = () => {

        setOnHover(true)
    };
    const handleMouseLeave = () => {

        setOnHover(false)
    };

    const imagesStyle = {
        display: 'inline',
        width: onHover? 28 : 25,
        marginRight: onHover? 7 : 10,
        borderRadius: props.stylePic? '50%' : ''
    };

    const anchorStyle = {
        width: '90%',
        display: 'flex', 
        margin: '6px 0', 
        alignItems: 'center',
        cursor: onHover?  'pointer' : '',
        backgroundColor: onHover?  'rgba(213, 213, 213, 0.8)' : 'white',
        padding: 10,
        borderRadius: '12px'
    };


    return (
    <>
    <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={anchorStyle} onClick={props.onClick}>
    <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={props.img} style={imagesStyle}/>
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{props.children}</div>
    </a>
    </>)

};

export default AnchorImage;