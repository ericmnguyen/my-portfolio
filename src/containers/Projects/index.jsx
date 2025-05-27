import React from 'react';
import './styles.css';
import Card from '../../components/Card';
import project1 from '../../utils/img/project-1.png';
import HealthClinic from '../../utils/img/health-clinic.png';
import ScrollDownIcon from "../../components/ScrollDownIcon";

const Projects = () => {
  return (
    <div id='apps' className="projects-page bg-black p-10 pb-16">
      <h2 className='projects-page__title text-white font-mono italic text-3xl pl-24'>List of my mini apps</h2>
      <div className="projects-page__app-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 justify-items-center">
        <Card image={project1} title="My Porfolio" tags={['react', 'redux', 'tailwind', 'html', 'css']} link='https://github.com/ericmnguyen/my-portfolio' />
        <Card image={HealthClinic} title="Mental Health Clinic" tags={['html', 'css', 'javascript', 'aws lambda', 'AI bot']} link='https://github.com/ericmnguyen/my-portfolio' />
        <Card image={project1} title="EP Charity" tags={['redux', 'react', 'bootstrap']} link='https://github.com/ericmnguyen/ep-charity' />
        <Card image={project1} title="Bookstore" tags={['redux', 'react', 'bootstrap']} link='https://github.com/ericmnguyen/bookstore' />
        <Card image={project1} title="Shopcat" tags={['react', 'typescript', 'bootstrap', 'redux']} link='https://github.com/ericmnguyen/shopcat' />
        <Card image={project1} title="Red Envelop" tags={['react native', 'bootstrap']} link='https://github.com/ericmnguyen/LixiApp' />
      </div>
      <ScrollDownIcon />
    </div>
  );
};

export default Projects;
