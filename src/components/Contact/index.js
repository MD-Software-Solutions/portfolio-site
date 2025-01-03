import './index.scss'
import * as Icons1 from '@fortawesome/free-solid-svg-icons'
import * as Icons2 from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Loader from 'react-loaders'

const Contact = () => {
    return (
        <>
        <div className='container-class-c'>
            <div className='about-box-c'>Contact me!</div>
            <div className='flex-row-c'>
                <div className='flex-col-c'>
                    <div className='card-element-c'>\
                        <div className='card-header-c'>
                        Send an email
                        </div>
                        <div className='card-icon-c'>
                            <FontAwesomeIcon icon={Icons1.faEnvelope} color="#4d4d4e"  className='icon-c'/>
                        </div>
                        <div className='card-text-c'>
                            <div className='hover-effect-zoom'>sohamdesai6508@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className='flex-col-c'>
                    <div className='card-element-c'>\
                        <div className='card-header-c pd35'>
                            LinkedIn
                        </div>
                        <div className='card-icon-c'>
                            <FontAwesomeIcon icon={Icons2.faLinkedin} color="#4d4d4e"  className='icon-c'/>
                        </div>
                        <div className='card-text-c'>
                            <div className='hover-effect-zoom'><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/soham-mutalik-desai-497416328">View Here</a></div>
                        </div>
                    </div>
                </div>
                <div className='flex-col-c'>
                    <div className='card-element-c'>\
                        <div className='card-header-c'>
                            <div className='pd45'>Github</div>
                        </div>
                        <div className='card-icon-c'>
                            <FontAwesomeIcon icon={Icons2.faGithub} color="#4d4d4e"  className='icon-c'/>
                        </div>
                        <div className='card-text-c'>
                            <div className='hover-effect-zoom'><a target="_blank" rel="noreferrer" href="https://github.com/MD-Software-Solutions">View Here</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact;