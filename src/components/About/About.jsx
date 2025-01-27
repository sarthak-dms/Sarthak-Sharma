import React from 'react'

import './about.css'
import ME from '../../assests/me.png';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='about__me-image'></img>
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <br></br>
              <small>B.Tech</small>
              <h5>Netaji Subhas University of Technology (IT)</h5>
              <small>2020-2024</small><br></br>
              <small>CGPA - 8.0</small>
            </article>
            
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <br></br>
              <h5>SDE</h5> @QuantX Technology
              <br></br>
              <small>Aug 2024 - Present</small>
              <br></br>
              <br></br>
              <h5>SDE Intern</h5> @OYO Rooms
              <br></br>
              <small>Jan 2024 - Aug 2024</small>
              <br></br>
              <br></br>
              <h5>SDE Intern</h5> @miniOrange
              <br></br>
              <small>May 2023 - July 2023</small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <br></br>
              <br></br>
              <div><b>B.Tech</b> - <small>8.23 CGPA</small></div>
              <div><b>12th</b> - <small>76%</small></div>
              <div><b>10th</b> - <small>10CGPA</small></div>
            </article>
          </div>
          
          <p>
            Currently pursuing B.Tech in Information Technology from NSUT(Delhi). SWD Intern at MiniOrange. I love solving problems and have a keen interst in Competitive Programming.
          </p>
          
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About