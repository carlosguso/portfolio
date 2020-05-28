import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faFileAlt} from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link';

/**
 * Component for the socialbar.
 * @component
 * @prop {boolean} home Adds email button if we are in the homepage. 
 */
export default function Socialbar() {
    return (
       <div className="socialbar">
          <a href="" className="fa-github">
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a href="" className="fa-twitter">
            <FontAwesomeIcon icon={faTwitter}/>
          </a>
          <a href="" className="fa-instagram">
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
          <Link href="/resume.pdf">
            <a className="fa-resume">
              <FontAwesomeIcon icon={faFileAlt}/>
            </a>
          </Link>
        </div>
    )
}
