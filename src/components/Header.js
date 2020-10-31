import React, { Component } from 'react'
import '../styles/Header.css'
import { Link } from 'react-scroll'

class Header extends Component {
    render() {
        const handleSetActive = to => {};
        return (
            <div className="header__container">
                    <Link
                        to="salutation"
                        className="menu-item"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={600}
                        onSetActive={to => handleSetActive(to)}
                    ><div>salutation</div>
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
                        <div>introduction</div>
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
                        <div>expertise</div>
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
                        <div>touch</div>
                    </Link>
            </div>
        )
    }
}

export default Header
