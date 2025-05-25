// import React, { useState, useEffect } from 'react';
// import {
//   ContactsOutlined,
//   HomeOutlined,
//   PieChartOutlined,
// } from '@ant-design/icons';
// import { Menu } from 'antd';

// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items = [
//   getItem('Home', 'home', <HomeOutlined />),
//   getItem('My Expertise', 'exp', <PieChartOutlined />),
//   getItem('Contact Me', 'contact', <ContactsOutlined />),
// ];
// const NavigationPanel = () => {
//   const [openKeys, setOpenKeys] = useState('1');
//   const [selectedKeys, setSelectedKeys] = useState('1');
//   const [scrollTop, setScrollTop] = useState(0);

//   useEffect(() => {
//     const handleScroll = (event) => {
//       setScrollTop(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (scrollTop < 600) {
//       setSelectedKeys(['home']);
//     } else {
//       setSelectedKeys(['exp']);
//     }
//   }, [scrollTop]);

//   const onSelect = (e) => {
//     const { key } = e;
//     switch (key) {
//       case 'home':
//         window.scrollTo({
//           top: 0,
//           behavior: 'smooth'
//         });
//         break;
//       case 'exp':
//         window.scrollTo({
//           top: window.innerHeight,
//           behavior: 'smooth'
//         });
//         break;
//       case 'contact':
//         window.scrollTo({
//           top: 0,
//           behavior: 'smooth'
//         });
//         break;
//       default:
//         break;
//     }
//   }

//   return (
//     <div className='navigation-panel'>
//       <Menu
//         openKeys={openKeys}
//         onSelect={onSelect}
//         defaultSelectedKeys={['home']}
//         mode="inline"
//         theme="dark"
//         inlineCollapsed
//         items={items}
//         selectedKeys={selectedKeys}
//       />
//     </div>
//   );
// };
// export default NavigationPanel;
import './styles.css';
import React, { useState, useEffect } from 'react';

const NavigationPanel = () => {
  const [isAtTop, setIsAtTop] = useState(true);

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
  

  const menuClasses = isAtTop ? 'menu fixed top-0 flex flex-row justify-between bg-gray-800 w-full h-16 z-10 bg-transparent' : 'menu fixed top-0 flex flex-row justify-between bg-gray-800 w-full h-16 z-10';

  return (
    <nav className={menuClasses}>
      <span className='content-center pl-20 md:pl-32'>
        <div className='menu__dev-name'>
        <span className='menu__bracket--blue'>{'{'}</span>
        <span className='text-white font-mono'>dev-ericnguyen</span>
        <span className='menu__bracket--blue'>{`}`}</span>
      </div>
      </span>
      <p className='items-center justify-center content-center pr-20 md:pr-32 h-full text-white'>
        <ul className='flex flex-row h-full items-center text-lg font-mono tracking-wide'>
          <li>HOME</li>
          <li><a href="">ABOUT ME</a></li>
          <li>MINI APPS</li>
          <li>CONTACT</li>
        </ul>
      </p>
    </nav>
  )
}

export default NavigationPanel;