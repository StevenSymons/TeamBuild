import React from 'react';
import '../../main.css';
import Logo from '../Logo/Logo';


const Background = () => {

    return(
        <div>

            <Logo />

            <div>
                <div className="rectangle rectangle-1" />
                <div className="rectangle rectangle-2" />
                <div className="rectangle-small" />
                <div className="rectangle rectangle-3" />
                <div className="rectangle rectangle-4" />
            </div>

        </div>

    )
}



export default Background;