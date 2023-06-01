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
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__detail'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>first</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>second</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>third</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>forth</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
              <article className='experience__detail'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>first</h4>
                  <small className='text-light'>experienced</small>
                </div>
              </article>
              <article>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>second</h4>
                  <small className='text-light'>experienced</small>
                </div>
              </article>
              <article>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>third</h4>
                  <small className='text-light'>experienced</small>
                </div>
              </article>
              <article>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>forth</h4>
                  <small className='text-light'>experienced</small>
                </div>
              </article>
            </div>
        </div>
      </div>
      
    </section>
  )
}

export default Experience