import React from "react";
import { Col, Divider, Row } from 'antd';
import './styles.css';
import WordsGlobe from "./WordsGlobe";
import AboutMe from "./AboutMe";


const Expertise = () => (
  <div className="expertise-page">
    <Divider className='expertise__divider' orientation="left">Horizontal</Divider>
    <Row>
      <Col className="gutter-row" span={12}>
        <AboutMe />
      </Col>
      <Col className="gutter-row" span={12}>
        <WordsGlobe />
      </Col>
    </Row>
  </div>
);
export default Expertise;
