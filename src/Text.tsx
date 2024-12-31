import React from 'react';

interface Props {
  letterStyles: {
    opacity: number;
    transform: string;
  };
  handleEnvClick: () => void;
}

export const Text = React.memo(({ letterStyles, handleEnvClick }: Props) => {
  console.log('render');
  return (
    <div className="text" style={letterStyles} onClick={handleEnvClick}>
      <div
        style={{
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          height: '100px'
        }}
      >
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
  );
});
