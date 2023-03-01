import React, { useState, useEffect } from 'react';
import {
  ContactsOutlined,
  HomeOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import './styles.css';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Home', 'home', <HomeOutlined />),
  getItem('My Expertise', 'exp', <PieChartOutlined />),
  getItem('Contact Me', 'contact', <ContactsOutlined />),
];
const NavigationPanel = () => {
  const [openKeys, setOpenKeys] = useState('1');
  const [selectedKeys, setSelectedKeys] = useState('1');
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollTop < 600) {
      setSelectedKeys(['home']);
    } else {
      setSelectedKeys(['exp']);
    }
  }, [scrollTop]);

  const onSelect = (e) => {
    const { key } = e;
    switch (key) {
      case 'home':
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        break;
      case 'exp':
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
        break;
      case 'contact':
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        break;
      default:
        break;
    }
  }

  return (
    <div className='navigation-panel'>
      <Menu
        openKeys={openKeys}
        onSelect={onSelect}
        defaultSelectedKeys={['home']}
        mode="inline"
        theme="dark"
        inlineCollapsed
        items={items}
        selectedKeys={selectedKeys}
      />
    </div>
  );
};
export default NavigationPanel;
