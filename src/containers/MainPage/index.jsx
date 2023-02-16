import React from 'react';
import Greetings from './Greetings';
import portrait from '../../avatar.png';
import './styles.css';

const MainPage = () => {
  return (
    <div className='main-page'>
      <div className='main-page__dev-name'>
        <span className='main-page__bracket--blue'>{'{'}</span>
        <span className='main-page__dev-name--white'>dev-ericnguyen</span>
        <span className='main-page__bracket--blue'>{`}`}</span>
      </div>
      <div>
        <Greetings />
        <img className='portrait' src={portrait} alt='me' />
      </div>
      <span className='scroll'>
        <a class="scrollDown">
          <span></span>
        </a>
      </span>
      <span className='circle'></span>
    </div>
  )
}

export default MainPage;
