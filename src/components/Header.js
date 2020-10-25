import React, { Component } from 'react'
import '../styles/Header.css'
import { Link } from 'react-scroll'

class Header extends Component {
    render() {
        const handleSetActive = to => {};
        return (
            <div className="header__container">
                <ul className="header__menu">
                    <Link
                        to="salutation"
                        className="menu-item"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={600}
                        onSetActive={to => handleSetActive(to)}
                    ><li>salutation</li>
                    </Link>
                    <Link
                        to="introduction"
                        className="menu-item"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={600}
                        onSetActive={to => handleSetActive(to)}
                    >
                        <li>introduction</li>
                    </Link>
                    <Link
                        to="expertise"
                        className="menu-item"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={600}
                        onSetActive={to => handleSetActive(to)}
                    >
                        <li>expertise</li>
                    </Link>

                    <Link
                        to="touch"
                        className="menu-item"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={600}
                        onSetActive={to => handleSetActive(to)}
                    >
                        <li>touch</li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Header
