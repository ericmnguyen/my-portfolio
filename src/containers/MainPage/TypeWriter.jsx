import React, { useState, useEffect } from 'react';

const TypeWriter = () => {
  const [intro, setIntro] = useState(
    <div id="intro" className='type-writer border-r-8 whitespace-nowrap overflow-hidden border-blue-600'>
              I'm a full stack web developer.
            </div>
  );

  useEffect(() => {
    let counter = 0;

    
    const intervalId = setInterval(() => {
      var ele = document.getElementById("intro");
      ele?.classList.remove("type-writer");
      void ele.offsetWidth; // without this, the animation will not work
      ele?.classList.add("type-writer");
      switch (counter) {
        case 0:
          setIntro(
            <div id="intro" className='type-writer border-r-8 whitespace-nowrap overflow-hidden border-blue-600'>
              I'm a full stack web developer.
            </div>);
            break;
        case 1:
          setIntro(
            <div id="intro" className='type-writer border-r-8 whitespace-nowrap overflow-hidden border-blue-600'>
              I build modern web solutions.
            </div>
          );
          break;
        case 2:
          setIntro(
            <div id="intro" className='type-writer border-r-8 whitespace-nowrap overflow-hidden border-blue-600'>
              I love to learn and grow.
            </div>
          );
          break;
        default:
            break;
      }
      counter = counter === 2 ? 0 : counter += 1;
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className='greetings__line3'>
      {intro}
    </span>
  )
};

export default TypeWriter;
