import React from 'react';
import { Divider } from 'antd';

const AboutMe = () => {
  return (
    <div className='about-me'>
      <Divider orientation="left"><h1 className='about-me__title'>About Me</h1></Divider>
      <div className='about-me__description'>
        <p>Hi, I'm Eric, a <span className='front-end-text'>front-end</span> developer.
          I enjoy working on complex projects and learning from them, whether it's with a team or on my own.
        </p>
        <p>I love JavaScript and its frameworks and I have <span className='front-end-text'>5 years</span> experience on it.
          The domains that I've worked in are <span className='text--italic'>Automotive</span>,
          <span className='text--italic'> Wholesale</span>,
          <span className='text--italic'> Insurance</span> and
          <span className='text--italic'> Education</span>.
        </p>
        <p>At the moment, I'm studying Master of Information and Communications Technology at Western Sydney University.
        </p>
        <p>I'm always interested in a challenge, so be sure to reach out to me if you have one.</p>
      </div>
    </div>
  )
};

export default AboutMe;
