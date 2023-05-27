import React, { useState } from "react";
import './CreatePopUp.css';


export default function CreatePopUp(props) {

    const [createPopUp, setCreatePopUp] = [props.createPopUp, props.setCreatePopUp];
    const [image, setImage] = [props.image, props.setImage];

    const handleButton = () => {

        const hiddenInput = document.querySelector('.file-upload__input');
        hiddenInput.click()
    };

    const handleChange = (event) => {

        const hiddenInput = document.querySelector('.file-upload__input');
        const span = document.querySelectorAll('.file-upload__label')[1];
        span.innerHTML = 'Check Your Profile'
        if(hiddenInput.files && hiddenInput.files[0]) {

            setImage(URL.createObjectURL(hiddenInput.files[0]));
        }
    };


    return (createPopUp) ? (
    <>
        <div className="popup">
            <div className="inner-popup">
                <div className="text">
                    <p>Create New Post</p>
                </div>
                <div className="action">
                    <h3>Drag photos and videos here</h3>
                    <div>
                        <input onChange={() => handleChange()} className="file-upload__input" type="file" name="newPost" id="newPost" />
                        <button onClick={() => handleButton()} className="file-upload__button" type="button">Select from computer</button>
                        <span className="file-upload__label" style={{color: 'black'}} >Only Pictures Please</span>
                        <span className="file-upload__label" ></span>
                    </div>
                </div>
            </div>
            <div className="button">
                <button onClick={() => setCreatePopUp(false)}>X</button>
            </div>
        </div>
    </>
    ) : ''
};