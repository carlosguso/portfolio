import React, {useEffect,useState} from 'react'


export default function MultiStepForm() {
    //State 0: Enter subject.
    //State 1: Enter name.
    //State 2: Enter email.
    //State 3: Enter message.
    //State 4: Completed. 
    const [progress, setprogress] = useState(0);
    const [sent, setsent] = useState(false);
    const [form, setform] = useState({
        subject: "",
        name: "",
        email: "",
        message: ""
    });
    const [errors, seterrors] = useState([]);

    useEffect(() => {
        //console.log(progress);
        if(progress == 4) {  
            console.log("Axios...");
        } 
    }, [progress])

    useEffect(() => {
        console.log(form);
    }, [form])

    const drawBar = () => {
        let bar = [];
        for(let i = 0; i < 4; i++) {
            //Render progress dot
            if(i <= progress) {
                bar.push(<li key={i} className={errors.length != 0 && i == progress ? "error" : "active"}></li>);
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

    const handleStep = (e,step) => {
        e.preventDefault();
        const resErr = evalFormData()
        if(step > 0 ) {
            if(resErr === true) {
                setprogress(progress < 4 ? progress+1 : 4);
                seterrors([]);
            } else {
                seterrors(resErr);
            }
        } else {
            setprogress(progress > 0 ? progress-1 : 0);
            seterrors([]);
        }
        console.log(form);
    }

    const handleFormData = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        });
    } 

    const evalFormData = () => {
        let errors = [];
        switch(progress) {
            case 0:
                if(form.subject.length != 0){
                    return true;
                } else{
                    errors.push("Subject can´t be empty");
                }
                break;

            case 1: 
                if(form.name.length != 0){
                    return true;
                } else{
                    errors.push("Name can´t be empty");
                }
                break;

            case 2:
                if(form.email.length != 0) {
                    if(ValidateEmail(form.email)) {
                        return true;
                    } else {
                        errors.push("Incorrect format for email");
                    }
                } else {
                    errors.push("Email can´t be empty");
                }
                break;

            case 3:
                if(form.message.length != 0) {
                    return true;
                } else {
                    errors.push("Message can´t be empty");
                }
                break;

            case 4:
                break;

            default:
                break;
        }
        return errors;
    }

    const ValidateEmail = mail => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true;
        } else {
            return false;
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
                    <input value={form.subject} className={errors.length != 0 ? "error" : ""} type="text" onChange={handleFormData} placeholder="Subject of the matter" name="subject"></input>
                </div>
            }
            {progress == 1 &&
                <div className="form-input">
                    <span>Name:</span>
                    <input value={form.name} className={errors.length != 0 ? "error" : ""} type="text" onChange={handleFormData} placeholder="John doe" name="name"></input>
                </div>
            }
            {progress == 2 &&
                <div className="form-input">
                    <span>Email:</span>
                    <input value={form.email} className={errors.length != 0 ? "error" : ""} type="email" onChange={handleFormData} placeholder="john@example.com" name="email"></input>
                </div>
            }
            {progress == 3 &&
                <div className="form-input">
                    <span>Message:</span>
                    <br/>
                    <textarea value={form.message} className={errors.length != 0 ? "error" : ""} placeholder=" Message..." onChange={handleFormData} name="message"></textarea>
                </div>
            }
            {errors.length != 0 &&
                <ul className="form-errors">
                    {errors.map((error,i) => {
                        return <li key={"error"+i}>{error}</li>
                    })}
                </ul>
            }
            {progress != 4 &&
            <div className="form-button-wrapper">
                <button className={progress == 0 ? "disabled": ""} onClick={e => {handleStep(e,-1)}}>Back</button>
                <button onClick={e => {handleStep(e,1)}}>{progress == 3 ? "Finish" : "Next"}</button>
            </div>
            }
            
        </form>
    )
}
/*
Missing:
· Form validation on each input
· Error messages (with progress bar circle turning red on error)
Note: Modify to first update the value once it's been validated and then update the state.
*/