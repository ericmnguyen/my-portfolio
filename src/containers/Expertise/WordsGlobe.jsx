import React from 'react';
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import {isMobile} from 'react-device-detect';

const WordsGlobe = () => (
  <TagCloud
    onClick={(tag, ev) => console.log(tag)}
    onClickOptions={{ passive: true }}
    options={{
      maxSpeed: 'normal',
      radius: isMobile ? '150' : '250'
    }}
  >
    {[
      "Git",
      "Javascript",
      "React",
      "NodeJS",
      "GraphQL",
      "Jest",
      "Nextjs",
      "ESLint",
      'AWS',
      'react-testing-library',
      'Redux',
      'Redux toolkit',
      'Redux saga',
      'Microservices',
      'CSS',
      'SASS',
      'HTML',
      'React hooks form',
      'React hooks',
      'Terragrunt'
    ]}
  </TagCloud>
)

export default WordsGlobe;
