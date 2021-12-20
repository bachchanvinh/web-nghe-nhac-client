import React from 'react'
import {useNavigate } from 'react-router-dom'
import './style.css'

const Welcome = () => {
    let navigate = useNavigate()

    const navigateToHome = () => {
        navigate('home');
    }

    return (
        <div className="welcome-khoa container-fluid">
            <div className="welcome-row row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 welcome-row-item welcome-row-img">
                    <img src="/assets/headphone.png" className="head-phone-img" alt="img-headphone"/>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 welcome-row-item welcome-row-text">
                    <h1>Music for everyone</h1>
                    <p>Without music, life would be a mistake</p>
                    <button onClick={navigateToHome} className="btn">Start Listening</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome
