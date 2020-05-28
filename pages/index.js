import React, { PureComponent } from 'react'
import Navbar from './../components/Navbar'
import Socialbar from './../components/Socialbar'


class Index extends PureComponent {
  constructor() {
    super();
    
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    const navbarProps = {
      text: "Portfolio",
      line: true
    };
    return (
      <>
        <Navbar currentPage="main"/>
        <div className= "index-wrapper wrapper">
          <div className="wrapper">
            <h2>Carlos Gutiérrez.</h2>
            <span className="desc">Web developer/designer</span>
          </div>
          <div className="wrapper">
            <p>
              I am an experienced web developer focus in creating
              beautiful, responsive web applications that not only look
              nice but work like a charm. 
            </p>
          </div>
          <div className="wrapper">
            <p><span>Location: </span>Guadalajara, México.</p>
            <p><span>Email: </span>me@carlosguso.xyz</p>
          </div>
          <div className="wrapper">
            <button className="highlight">CONTACT ME</button>
          </div>
        </div>
        <Socialbar/>
      </>
    )
  }
}


export default Index;
