import './styles.css';
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

const NavigationPanel = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(isAtTop);

  const onSelect = (selectedItem) => {
    var ele;
    var topPos;
    setSelectedItem(selectedItem);
    switch (selectedItem) {
      case 'HOME':
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        break;
      case 'ABOUT':
        ele = document.getElementById('expertise');
        topPos = ele.offsetTop;
        window.scrollTo({
          top: topPos,
          behavior: 'smooth'
        });
        break;
      case 'APPS':
        ele = document.getElementById('projects');
        topPos = ele.offsetTop;
        window.scrollTo({
          top: topPos,
          behavior: 'smooth'
        });
        break;
      case 'CONTACT':
        ele = document.getElementById('enquiry');
        topPos = ele.offsetTop;
        window.scrollTo({
          top: topPos,
          behavior: 'smooth'
        });
        break;
      default:
        break;
    }
  }
  

  const menuClasses = isAtTop ? 
    'menu fixed top-0 flex flex-row justify-between bg-gray-800 w-full h-16 z-10 transition-all duration-1000 bg-transparent' : 
    'menu fixed top-0 flex flex-row justify-between w-full h-20 z-10 bg-opacity-80 transition-all duration-1000 bg-gray-800';

  return useIsMobile() ? (<nav>
    <span className='content-center pl-2 md:pl-32 bg-transparent menu fixed'>
        <div className='menu__dev-name'>
        <span className='menu__bracket--blue text-sm md:text-xl'>{'{'}</span>
        <span className='text-white font-mono text-sm md:text-xl'>dev-ericnguyen</span>
        <span className='menu__bracket--blue text-sm md:text-xl'>{`}`}</span>
      </div>
      </span>
  </nav>) : (
    <nav className={menuClasses}>
      <span className='content-center pl-2 md:pl-32'>
        <div className='menu__dev-name'>
        <span className='menu__bracket--blue text-sm md:text-xl'>{'{'}</span>
        <span className='text-white font-mono text-sm md:text-xl'>dev-ericnguyen</span>
        <span className='menu__bracket--blue text-sm md:text-xl'>{`}`}</span>
      </div>
      </span>
      <p className='items-center justify-center content-center text-sm md:text-xl pr-20 md:pr-32 h-full text-white'>
        <ul className='flex flex-row h-full items-center font-mono tracking-wide'>
          <li className='menu__hover-underline-animation left'><button onClick={() => onSelect('HOME')}>HOME</button></li>
          <li className='menu__hover-underline-animation left'><button onClick={() => onSelect('ABOUT')}>ABOUT ME</button></li>
          <li className='menu__hover-underline-animation left'><button onClick={() => onSelect('APPS')}>MINI APPS</button></li>
          <li className='menu__hover-underline-animation left'><button onClick={() => onSelect('CONTACT')}>CONTACT</button></li>
        </ul>
      </p>
    </nav>
  )
}

export default NavigationPanel;