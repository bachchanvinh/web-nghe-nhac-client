import React from 'react'
import {useNavigate} from "react-router-dom"
import './style.css'

const NotFound = () => {
    let navigate = useNavigate()

    const navigateToHome = () => {
        navigate('home');
    }

    return (
        <div className="not-found-khoa">
            <div className="not-found-overlay">404</div>
            <div className="not-found-text">
                <p className="not-found-heading">We are sorry, page not found!</p>
                <p className="not-found-desc" >The page you are looking for might have been removed
                    had its name changed or is temporarily unavailable
                </p>
                <button onClick={navigateToHome} className="not-found-btn">Back to homepage</button>
            </div>
        </div>
    )
}

export default NotFound
