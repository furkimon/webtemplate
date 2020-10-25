import React, { useState } from 'react'
import '../styles/Home.css'
import { Introduction, Skills, Touch, Footer } from '../components'

const Home = () => {
    const [toggleAnimation, setToggleAnimation]= useState(true)
    const [animationButton, setAnimationButton]= useState('')
    const [glitchAnimation, setGlitchAnimation]= useState({})

    const toggleGlitch = () => {
        if(toggleAnimation){
            setAnimationButton('animatedButton')
            setGlitchAnimation({animation : "none"})
        }else{
            setAnimationButton('')
            setGlitchAnimation({})

        }
        setToggleAnimation(!toggleAnimation)
    }

    return (
        <div className="home__container">
            <div className="entry" id="salutation">
                <div className="dear">
                    <h1 className="glitch" style={glitchAnimation}>
                        <span aria-hidden="true" style={glitchAnimation}>DEAR</span>
                                DEAR
                            <span aria-hidden="true" style={glitchAnimation}>DEAR</span>
                    </h1>
                    <div className="offButton " onClick={toggleGlitch}>
                        <div className={"on " + animationButton}></div>
                    </div>
                </div>
                <div className="people">
                    <h1>WIDE SPECTRUM <br /> OF ALL <span>PEOPLE</span>,<br /><p>I salute you.</p></h1>
                </div>
            </div>
            <svg
                id="svg1"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="100%"
                height="100"
                viewBox="0 0 100 102"
                preserveAspectRatio="none"
            >
                <path d="M0 0 L50 100 L100 0 Z" />
            </svg>
            <div className="introduction">
                <Introduction />
            </div>
            <svg
                id="svg2"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="100%"
                height="100"
                viewBox="0 0 100 102"
                preserveAspectRatio="none"
            >
                <path d="M0 0 L50 100 L100 0 Z" />
            </svg>
            <div className="skills">
                <Skills />
            </div>
            <svg
                id="svg3"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="100%"
                height="100"
                viewBox="0 0 100 102"
                preserveAspectRatio="none"
            >
                <path d="M0 0 L50 100 L100 0 Z" />
            </svg>
            <Touch />
            <svg
                id="svg4"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="100%"
                height="100"
                viewBox="0 0 100 102"
                preserveAspectRatio="none"
            >
                <path d="M0 0 L50 100 L100 0 Z" />
            </svg>
            <div className="footer">
                <Footer />
            </div>
        </div>

    )
}

export default Home


