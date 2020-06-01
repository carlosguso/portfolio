import React, {useEffect,useState} from 'react'


export default function MultiStepForm() {
    //State 0: Enter subject.
    //State 1: Enter email.
    //State 2: enter name.
    //State 3: Enter message.
    //State 4: Completed. 
    const [progress, setprogress] = useState(0);

    const drawBar = () => {
        let bar = [];
        for(let i = 0; i < 4; i++) {
            //Render progress dot
            if(i <= progress) {
                bar.push(<li key={i} className="active"></li>);
            } else {
                bar.push(<li key={i}></li>);
            }
            //Render progress line
            if(i<progress) {
                bar.push(<span key={i+4} className="active"></span>);
            } else {
                bar.push(<span key={i+4}></span>);
            }
        }
        return bar;
    }

    useEffect(() => {
        console.log(progress);
    }, [progress])

    const handleStep = (e) => {
        e.preventDefault();
        setprogress(progress < 4 ? progress+1 : 4);
    }

    return (
        <form className="form">
            <div className="progress-bar">
               {drawBar()}
            </div>
            {progress == 0 &&
                <div className="form-input">
                    <span>Subject</span>
                    <input type="text" placeholder="Subject of the matter"></input>
                </div>
            }
            <button onClick={handleStep}></button>
            
        </form>
    )
}
