import React, { useState } from 'react'
import '../styles/Touch.css'
import MailForm from './MailForm.js'


const Touch = () => {
    const [toggle, setToggle] = useState(false)
    const [mailStyle, setMailStyle] = useState({})
    const [lines, setLines] = useState({})
    const [line, setLine] = useState({})
    const [mailBox, setMailBox] = useState({})



    const toggleHidden = () => {
        if (toggle) {
            setMailStyle({})
            setLines({})
            setMailBox({})
            setLine({})
        } else {
            var mailAfter = document.getElementById("mail-after")
            mailAfter.scrollIntoView({
                behavior: "smooth",
                block: "center",
            })
            setMailStyle({
                zIndex: "3",
                width: "80vw",
                height: "80vh",
                borderRadius: "10px",
                backgroundColor : "var(--main-pri)",
                boxShadow: "0 0 1rem white",
                transitionProperty : "width, height"
            })
            setLines({ transform: "rotate(225deg)" })
            setLine({ backgroundColor: "red" })
            setMailBox({ display: "flex" })
        }
        setToggle(!toggle)
    }

    return (
        <div className="touch__container" id="touch">
            <div className="touch__inner"></div>
            <div className="farewell">
                <h1>Stay in <span>touch</span>.</h1>
                <h3>I would like to hear from you.</h3>
            </div>
            <div className="mail">
                <div className="mail-after" id="mail-after" style={mailStyle}>
                    <div className="lines" style={lines} onClick={toggleHidden}>
                        <span className="line line1" style={line}></span>
                        <span className="line line2" style={line}></span>
                    </div>
                    <div className="mail-form" style={mailBox}>
                        <MailForm  />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Touch