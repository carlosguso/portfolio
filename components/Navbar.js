import React, { useEffect } from 'react'

/**
 * Component for the navbar.
 * @component
 * @prop {string} text Heading text to show in the navbar.
 * @prop {boolean} line Line (hr) to display in the page
 */
export default function Navbar(props) {

    useEffect(() => {
        document.getElementsByTagName("body")[0].classList.add("dark");
    }, []);
    
    return (
        <>
        
        <div className="navbar">
            <div className="menu-ham">
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>
            {props.text && 
            <h1 className="navbar-text">{props.text}</h1>
            }
            
        </div>
        {props.line === true &&
            <div className="navbar-line"></div>
            }

        </>
    )
}
