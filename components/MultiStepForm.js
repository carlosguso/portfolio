import React, {useEffect,useState} from 'react'


export default function MultiStepForm() {
    //State 0: Enter subject.
    //State 1: Enter email.
    //State 2: enter name.
    //State 3: Enter message.
    //State 4: Completed. 
    const [progress, setprogress] = useState(0);
    const [form, setform] = useState({
        subject: "",
        email: "",
        name: "",
        message: ""
    });

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

    useEffect(() => {
        console.log(form);
    }, [form])

    const handleStep = (e,step) => {
        e.preventDefault();
        if(step > 0 ) {
            setprogress(progress < 4 ? progress+1 : 4);
        } else {
            setprogress(progress > 0 ? progress-1 : 0);
        }
        handleFormData();
    }

    const handleFormData = () => {
        //console.log("formadata progress: " +  progress);
        switch(progress) {
            case 0:
                const val = document.getElementsByTagName("input")[0].value;
                setform({...form,subject: val});
                break;

            default:
                break;
        }
    } 

    return (
        <form className="form">
            <div className="progress-bar">
               {drawBar()}
            </div>
            {progress == 0 &&
                <div className="form-input">
                    <span>Subject:</span>
                    <input type="text" placeholder="Subject of the matter"></input>
                </div>
            }
            {progress == 1 &&
                <div className="form-input">
                    <span>Email:</span>
                    <input type="text" placeholder="john@example.com"></input>
                </div>
            }
            {progress == 2 &&
                <div className="form-input">
                    <span>Name:</span>
                    <input type="text" placeholder="John doe"></input>
                </div>
            }
            {progress == 3 &&
                <div className="form-input">
                    <span>Message:</span>
                    <br/>
                    <textarea placeholder=" Message..."></textarea>
                </div>
            }
            <div className="form-button-wrapper">
                <button className={progress == 0 ? "disabled": ""} onClick={e => {handleStep(e,-1)}}>Back</button>
                <button onClick={e => {handleStep(e,1)}}>{progress == 3 ? "Finish" : "Next"}</button>
            </div>
            
        </form>
    )
}
/*
Missing:
· Form validation on each input
· Error messages (with progress bar circle turning red on error)
Note: Modify to first update the value once it's been validated and then update the state.
*/