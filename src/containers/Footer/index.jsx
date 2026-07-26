import React from 'react';
import { GithubOutlined, LinkedinFilled } from '@ant-design/icons';

const Footer = () => {

  return (
    <footer className="bg-black text-white p-2 py-24 font-mono">
      <div className="container mx-auto text-center text-lg">
      Eric Nguyen | Full Stack Developer | React, NodeJS | Sydney, Australia
      
      </div>
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/ericmng/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <LinkedinFilled />
          </a>
          <a href="https://github.com/ericmnguyen" target="_blank" rel="noopener noreferrer" className="text-white hover:text-violet-500">
            <GithubOutlined />
          </a>
        </div>
      </div>
      <div className="container mx-auto my-12 text-center border-white-500 border-t pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Eric Nguyen. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;