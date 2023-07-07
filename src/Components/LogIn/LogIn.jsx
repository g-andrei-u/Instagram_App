import React from 'react';
import logo from '../Pictures/Instagram_logo.svg.png';
import './LogIn.css';


function LogIn(props) {
    const { onChangeUsername, onChangePassword, onClickLogIn } = props;

    return props.logIn ? (
        <div className='log-in-page'>
            <div className='log-in'>
                <div style={{display: 'flex'}}>
                <img src={logo} />
                <p style={{display: "inline", fontSize: '10px', fontWeight: '700', marginTop: 40, marginLeft: -2, color: 'purple'}}>for cartoons</p>
                </div>
                <input type='text' placeholder='username' onChange={onChangeUsername} value={props.username}/>
                <input type='password' placeholder='password' onChange={onChangePassword} value={props.password} />
                <button onClick={onClickLogIn}>Log in</button>
                <div style={{textAlign: 'center'}}>
                    <p style={{margin: '7px 0'}}>copy and paste:</p>
                    <h5 style={{margin: 5}}>Tom_from_Tom.and.Jerry</h5>
                    <h5 style={{margin: 0}}>1234</h5>
                </div>
            </div>
        </div>
    ) : ''
};


export default LogIn;