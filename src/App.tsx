import React, { useCallback, useRef, useState } from 'react';
import Snowfall from 'react-snowfall';

import './App.css';
import { Text } from './Text';
import { useTextStyles } from './useTextStyles';



const App = React.memo(() => {
  const isEnvOpen = useRef(false);
  const [state, setState] = useState({
    topOpacity: 1,
    topOpenOpacity: 0
  });

  const handleEnvClick = useCallback(() => {
    if (isEnvOpen.current) {
      isEnvOpen.current = false;
      setTimeout(() => {
        setState({ topOpacity: 1, topOpenOpacity: 0 });
      }, 600);
    } else {
      isEnvOpen.current = true;
      setState({ topOpacity: 0, topOpenOpacity: 1 });
    }
  }, []);

  const textStyles = useTextStyles(1000, 0, isEnvOpen.current)

  return (
    <>
      <main className="main">
        <img src="ne_background.jpg" alt="bg" className="background" />
        <Snowfall />
        <div
          className={`envelope ${isEnvOpen.current ? 'open' : 'close'}`}
          onClick={handleEnvClick}
        >
          <div className="letter">
            <div className="words line1"></div>
            <div className="words line2"></div>
            <div className="words line3"></div>
            <div className="words line4"></div>
          </div>
          <img
            src="top.svg"
            alt=""
            className={'env-top'}
            style={{
              opacity: state.topOpacity
            }}
          />
          <img
            src="top-open.svg"
            alt=""
            className={'env-top_open'}
            style={{
              opacity: state.topOpenOpacity
            }}
          />
          <img
            src="left.svg"
            alt=""
            width={'120px'}
            style={{ borderRadius: '6px' }}
          />
          <img
            src="right.svg"
            alt=""
            width={'120px'}
            style={{ position: 'absolute', right: 0, borderRadius: '6px' }}
          />
          <img src="down.svg" alt="" className="env-down" />
        </div>
          <Text
            textStyles={textStyles}
            handleEnvClick={handleEnvClick}
          />
      </main>
    </>
  );
});

export default App;
