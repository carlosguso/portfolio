import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/MultiStepForm';
import SocialBar from '../components/Socialbar';

export default function contact() {

    return (
        <div>
            <Navbar line text="Contact" currentPage="contact"/>
            <div className="contact wrapper">
                <div className="text">
                    <p>
                        If you want to get in touch to discuss any kind of project or you have an
                        inquiry please fill the form below or email me@carlosguso.xyz
                    </p>
                </div>
                <Form/>
                <SocialBar/>
            </div>
        </div>
    )
}
