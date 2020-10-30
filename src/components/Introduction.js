import React, { useState } from 'react'
import "../styles/Introduction.css"
import {ghLogo, lin} from '../images'
import VisibilitySensor from "react-visibility-sensor";

const Introduction = () => {
    const [animateLeft, setAnimateLeft] = useState('')
    const [animateRight, setAnimateRight] = useState('')

    const animateLogos = (isVisible) => {
        if(isVisible){
            setAnimateLeft('animatedLeft')
            setAnimateRight('animatedRight')
        }
    }

    return (
        <div className="introduction__container" id="introduction">
                <div className="introduction__letter">
                    <h1>Hello, I am a software developer with computer engineering background.<br />
                    Looking for a <span>Frontend Developer</span> role.</h1>
                </div>
                <VisibilitySensor onChange={animateLogos}>
                <div className="logo-section">
                    <a href="https://github.com/furkimon" rel="noopener noreferrer" target="_blank">
                        <img className={"ghLogo logo " + animateLeft } src={ghLogo} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/furkantonyali/" rel="noopener noreferrer" target="_blank">
                        <img className={"linLogo logo " + animateRight } src={lin} alt="" />
                    </a>
                </div>
                </VisibilitySensor>
            </div>
    )
}

export default Introduction

