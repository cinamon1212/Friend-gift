import React, { useCallback, useMemo, useRef, useState } from 'react';
import Snowfall from 'react-snowfall';

import './App.css';
import { Text } from './Text';

const LETTER_STYLES = {
  opacity: 0,
  transform: 'scale(0)'
};

const App = React.memo(() => {
  const isEnvOpen = useRef(false);
  const [state, setState] = useState({
    letterStyles: LETTER_STYLES,
    topOpacity: 1,
    topOpenOpacity: 0
  });

  const handleEnvClick = useCallback(() => {
    if (isEnvOpen.current) {
      isEnvOpen.current = false;
      setState((prev) => ({ ...prev, letterStyles: LETTER_STYLES }));
      setTimeout(() => {
        setState((prev) => ({ ...prev, topOpacity: 1, topOpenOpacity: 0 }));
      }, 600);
    } else {
      isEnvOpen.current = true;
      setState((prev) => ({ ...prev, topOpacity: 0, topOpenOpacity: 1 }));
      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          letterStyles: { opacity: 1, transform: 'scale(1)' }
        }));
      }, 1000);
    }
  }, []);

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
          letterStyles={state.letterStyles}
          handleEnvClick={handleEnvClick}
        />
      </main>
    </>
  );
});

export default App;
