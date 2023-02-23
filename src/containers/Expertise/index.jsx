import React from "react";
import { Col, Row } from 'antd';
import './styles.css';
import WordsGlobe from "./WordsGlobe";
import AboutMe from "./AboutMe";


const Expertise = () => (
  <div className="expertise-page">
    <Row className="expertise-page__about-me">
      <Col className="gutter-row" xs={24} md={12}>
        <AboutMe />
      </Col>
      <Col className="gutter-row" xs={24} md={12}>
        <WordsGlobe />
      </Col>
    </Row>
  </div>
);
export default Expertise;
