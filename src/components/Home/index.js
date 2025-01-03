import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import myPhoto from '../../assets/images/IMG_20240815_080103655_MP (1).jpg'
import Loader from 'react-loaders';
import React, { useState, useEffect } from 'react';
import Typewriter from '../Typewriter';
import myLogo from '../../assets/images/ingle lett - inverted.svg'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['o','h','a','m'];
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        // Return a cleanup function that clears the timeout
        return () => clearTimeout(timer);
    }, []);    
    return (
        <>
        {/* <Logo /> */}
          <div className="container home-page">
            <div className="text-zone">
              <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img className='my-logo'
                  src={myLogo}
                  alt="JavaScript Developer Name, Web Developer Name"
                />
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                />
                <br />
              </h1>
              <Typewriter />  

              <div className="flex-row">
                <div className='flex-column'>
                  <Link to="/contact" className="flat-button">
                    CONTACT ME
                  </Link>
                </div>

                <div className='flex-column pd-inline-15'>
                  <Link to="/portfolio" className="flat-button">
                    VIEW MY PROJECTS ➜
                  </Link>
                </div>
              </div>

            </div>
            <div>
                <img src={myPhoto} className='my-photo' />
            </div>
          </div>
          
        
        <Loader type='pacman' />
        </>
    )
}

export default Home;