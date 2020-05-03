import React, { useEffect , useState} from 'react'
import Link from 'next/link';

/**
 * Component for the navbar.
 * @component
 * @prop {string} text Heading text to show in the navbar.
 * @prop {boolean} line Line (hr) to display in the page
 */
export default function Navbar(props) {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.getElementsByTagName("body")[0].classList.add("dark");
    }, []);

    const menuClick = () => {
        console.log("Clicked!")
        setOpen(!open)
    }

    const renderLinks = () => {
        const linkList = ['Main','Portfolio','Contact','Blog'];
        const routesList = ['/','/portfolio', '/contact', '/blog'];
        return linkList.map((item, index) => {
            if(props.currentPage === item.toLowerCase()) {
                return(<Link href={routesList[index]}>
                    <a className="current-page">{item}</a>
                </Link>)
            } else {
                return(<Link href={routesList[index]}>
                    <a>{item}</a>
                </Link>)
            }
        });
    }

    return (
        <>
        <div className={open ? "menu opened" : "menu"}>
            <div className="menu-list">
                {renderLinks()}
            </div>
        </div>
        <div className="navbar">
        <div className={open ? "menu-ham opened" : "menu-ham"} onClick={() => menuClick()}>
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
