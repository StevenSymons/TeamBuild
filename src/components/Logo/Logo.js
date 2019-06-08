import React from 'react';
import '../Pages/Home/Jumbotron/Jumbotron.css'
import '../../main.css';
import '../Pages/Home/Navbar/Navbar.css';
import logo_text from '../../static/logo_text.png';
import {Link} from 'react-router-dom';

const Logo = () => {
    return(
        <div className="navbar">
            <div className="container">
                <div className="navbar__logo">
                    <Link to="/">
                    <img alt="TeamBuild logo" className="logo" src={logo_text} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Logo;