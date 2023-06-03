import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5> What Skills Do I have</h5>
      <h2> My Experience</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Programming Languages and Frameworks</h3>
          <div className="experience__content">
            <article className='experience__detail'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>C/C++</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React Js</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Node Js</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Express Js</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
          <h3>Online Judges</h3>
          <div className="experience__content">
              <article className='experience__detail'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>LeetCode</h4>
                  <small className='text-light'><b>Knight</b> on Leetcode, with more than 700 problems solved</small>
                </div>
              </article>
              <article className='experience__detail'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Codeforces</h4>
                  <small className='text-light'>Specialist on Codeforces</small>
                </div>
              </article>
              <article className='experience__detail'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Codechef</h4>
                  <small className='text-light'>4* on codechef</small>
                </div>
              </article>
              <article className='experience__detail'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Google Kickstart</h4>
                  <small className='text-light'>Best rank 1200</small>
                </div>
              </article>
            </div>
        </div>
      </div>
      
    </section>
  )
}

export default Experience