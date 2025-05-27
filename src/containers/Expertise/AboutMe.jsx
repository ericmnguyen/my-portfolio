import React from 'react';
import { Divider } from 'antd';

const AboutMe = () => {
  return (
    <div className='about-me'>
      <Divider orientation="left"><h1 className='about-me__title text-white font-mono italic text-3xl'>About Me</h1></Divider>
      <div className='about-me__description'>
        <p>Hi, I'm Eric, a <span className='front-end-text'>senior front-end</span> developer
        with over <span className='front-end-text'>five years</span> of hands-on experience architecting and delivering complex, high impact web applications.
        </p>
        <p>My expertise spans the full JavaScript ecosystem - React, Redux, NodeJS, and modern build tools - across diverse industries including 
          <span className='text--italic'> Automotive</span>,
          <span className='text--italic'> Wholesale</span>,
          <span className='text--italic'> Insurance</span> and
          <span className='text--italic'> Education</span>.
        </p>
        <p>I recently graduated with a Master of Information and Communications Technology and am now contributing my skills at Magill College Sydney.
        </p>
        <p>Whether collaborating with cross-functional teams or driving solo initiatives, I thrive on tackling challenging problems and translating them into elegant, scalable user experiences.</p>
        <p>I'm always eager to take on new opportunities - please don't hesitate to reach out if you have an exciting project in mind.</p>
      </div>
    </div>
  )
};

export default AboutMe;
