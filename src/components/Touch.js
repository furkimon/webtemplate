import React, { Component } from 'react'
import '../styles/Touch.css'

export class Touch extends Component {
    render() {
        return (
            <div className="touch__container" id="touch">
                <div className="farewell">
                    <h1>Stay in <span>touch</span>.</h1>
                    <h3>I would like to hear from you.</h3>
                </div>
                <div className="mail">
                </div>
            </div>
        )
    }
}

export default Touch
