import { useState } from 'react';
import Snowfall from 'react-snowfall';

import './App.css';

const LETTER_STYLES = {
  opacity: 0,
  transform: 'scale(0)'
};

function App() {
  const isEnvOpen = useRef(false);
  const [letterStyles, setLetterStyles] = useState(LETTER_STYLES);
  const [topOpacity, setTopOpacity] = useState(1);
  const [topOpenOpacity, setTopOpenOpacity] = useState(0);

  const handleEnvClick = () => {
    if (isEnvOpen.current) {
      isEnvOpen.current = false;
      setLetterStyles(LETTER_STYLES);
      setTimeout(() => {
        setTopOpacity(1);
        setTopOpenOpacity(0);
      }, 600);
    } else {
      isEnvOpen.current = true;
      setTopOpacity(0);
      setTopOpenOpacity(1);
      setTimeout(() => {
        setLetterStyles({ opacity: 1, transform: 'scale(1)' });
      }, 1000);
    }
  };

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
              opacity: topOpacity
            }}
          />
          <img
            src="top-open.svg"
            alt=""
            className={'env-top_open'}
            style={{
              opacity: topOpenOpacity
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
        <div className="text" style={letterStyles} onClick={handleEnvClick}>
          <div style={{ overflow: 'hidden', position:'relative', width:'100%', height:'100px' }}>
            <img
              src="items.svg"
              alt=""
              style={{
                width: '200%',
                height: '100%',
                zIndex: 10000,
                position: 'absolute',
                borderRadius: '10%'
              }}
            />
          </div>
          <img
            src="gift.svg"
            alt=""
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              borderRadius: '10%'
            }}
          />
        </div>
      </main>
    </>
  );
}

export default App;
