import React , {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSun, faMoon} from '@fortawesome/free-regular-svg-icons'

const ThemeSwitch = () => {
    const [dark, setDark] = useState("false");

    //componentDidMount()
    useEffect(() => {
        //console.log("componentDidMount()")
        setDark(fetchStorage());
        //console.log("State did mount: " + dark);
        //updateStorage();
    }, []);

    //componentDidUpdate
    useEffect(() => {
        //console.log("componentDidUpdate()")
        updateStorage();
    });

    const updateStorage = () => {
        const body = document.getElementsByTagName('body')[0];
        //console.log("Current dark state: " + dark);
        if(!dark) {
            body.classList.remove('dark');
            localStorage.setItem('dark', JSON.stringify(false));
        } else {
            body.classList.add('dark');
            localStorage.setItem('dark', JSON.stringify(true));
        }
    }

    const fetchStorage = () => {
        const themeData = localStorage.getItem('dark');
        if(themeData ===  null) {
            return false;
        } else {
            return JSON.parse(themeData);
        }
    }

    return (
        <div className="theme-switch">
            <div className="switch" onClick={() => setDark(!dark)}>
                <FontAwesomeIcon icon={dark ? faMoon : faSun}/>
            </div>
        </div>
    )
}

export default ThemeSwitch;
