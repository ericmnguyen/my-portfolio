import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined, GithubOutlined, LinkedinFilled, WhatsAppOutlined } from '@ant-design/icons';
import './styles.css';

const Greetings = () => {
  return (
    <div className='greetings'>
      <div className='greetings__line1'>Hello!</div>
      <div className='greetings__line2'>I'm Eric</div>
      <div className='greetings__line3'>front end developer</div>
      <div className='greetings__line4'>
        <Button ghost shape="round" icon={<DownloadOutlined />} style={{ marginRight: '12px' }} size={10}>
          Download CV
        </Button>
        <Button icon={<GithubOutlined />} ghost shape="circle" style={{ marginRight: '12px' }} />
        <Button icon={<WhatsAppOutlined />} ghost shape="circle" style={{ marginRight: '12px', color: 'green' }} />
        <Button icon={<LinkedinFilled />} ghost shape="circle" />
      </div>
    </div>
  )
};

export default Greetings;
