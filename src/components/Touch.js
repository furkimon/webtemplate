import React, { useState } from 'react'
import '../styles/Touch.css'


const Touch = () => {
    const [mailStyle, setMailStyle] = useState({})

    const toggleHidden = () => {
        if (mailStyle) {
            setMailStyle({})
        } else {
            setMailStyle({
                position: "absolute",
                borderRadius: "0",
                width: "100vw",
                height: "100vh",
                padding: "0",
                overflow: "hidden"
            })
        }

    }

    return (
        <div className="touch__container" id="touch">
            <div className="touch__inner">
                <div className="farewell">
                    <h1>Stay in <span>touch</span>.</h1>
                    <h3>I would like to hear from you.</h3>
                </div>
                <div className="mail" onClick={toggleHidden} style={mailStyle}>
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                </div>
            </div>
        </div>
    )
}

export default Touch