import React from 'react'
import {Link} from "react-router-dom";
import '../../main.css';

const GetStartedButton = () => {
    return(

        <Link className='link' to="/apply">
            <a className="cta-button" href="#">
                Get Started
            </a>
        </Link>

    )
}
export default GetStartedButton;