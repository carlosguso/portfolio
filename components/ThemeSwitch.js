import React , {useState,useEffect} from 'react';

const ThemeSwitch = () => {
    const [dark, setDark] = useState("false");

    //componentDidMount()
    useEffect(() => {
        console.log("componentDidMount()")
        setDark(fetchStorage());
        console.log("State did mount: " + dark);
        //updateStorage();
    }, []);

    //componentDidUpdate
    useEffect(() => {
        console.log("componentDidUpdate()")
        updateStorage();
    });

    const updateStorage = () => {
        const body = document.getElementsByTagName('body')[0];
        console.log("Current dark state: " + dark);
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
            <h6>Dark mode:</h6>
            <div className="switch" onClick={() => setDark(!dark)}>
                <div className="slider"></div>
            </div>
        </div>
    )
}

export default ThemeSwitch;
