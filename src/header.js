import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom"

const Header = props => {
    return (
        <Router>
            <div className="Container">
            <Link to='/Homepage'>
            <h2> Home </h2>
            </Link>
            <Link to='Aboutpage'>
            <h2> About Us </h2>
            </Link>
            <Link to="ContactPage">
            <h2> Contact Us </h2>
            </Link>
            <Link to='Settings'>
            <h2> Setting </h2>
            </Link>
            </div>
        </Router>
    )
}

export default Header;