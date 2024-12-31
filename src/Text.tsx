import { Typewriter } from 'react-simple-typewriter';

import React, { useEffect, useRef, useState } from 'react';

interface Props {
  textStyles: {
    opacity: number;
    transform: string;
  };
  handleEnvClick: () => void;
}

const paragraphs = [
  'Санёк, с Новым Годом!',
  'Хотим пожелать тебе того, чего не хватает сейчас каждому: стабильности, крепких нервов, веры и любви. Также хотим пожелать море приятных воспоминаний, одно из них мы предлагаем тебе создать вместе.',
  'Приглашаем тебя на совместное посещение горнолыжного склона и обучение катанию на сноуборде. В программу входит:',
  '1. Трансфер до выбранного склона',
  '2. Оплата необходимого снаряжения и подъемника',
  '3. Обучение от инструктора в лице Андрея Кузьмина',
  '4. Классное время, проведенное вместе',
  'Дата катания зависит от погодных условий, поэтому удобный день для данного мероприятия выберем позднее. Приглашение является бессрочным.',
  'Надеемся, что тебе понравится наш подарок, мы подготовили его совместно. Всего наилучшего в 2025 году!',
  'Обнимаем, Соня и Андрей'
];

type Writer = Record<string, number | boolean>;

export const Text = React.memo(({ textStyles, handleEnvClick }: Props) => {
  const [typewriterDelays, setTypewriterDelays] = useState<Writer>({
    0: 2500,
    1: 5000,
    2: 18500,
    3: 26000,
    4: 29000,
    5: 32500,
    6: 36000,
    7: 39000,
    8: 49000,
    9: 56000
  });

  const count = useRef(0);

  useEffect(() => {
    if (!count.current) {
      count.current += 1;
      for (const indx in typewriterDelays) {
        setTimeout(() => {
          setTypewriterDelays((prev) => ({ ...prev, [indx]: true }));
        }, typewriterDelays[indx] as number);
      }
    }
  }, [typewriterDelays]);

  console.log('render');
  return (
    <div className="text" style={textStyles} onClick={handleEnvClick}>
      <img
        src="items.svg"
        alt=""
        style={{
          width: '100%',
          height: '150px',
          top: 0,
          left: 0,
          zIndex: 10000,
          position: 'absolute'
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          fontSize: '16px',
          paddingTop: '110px',
          paddingLeft: '10px',
          paddingRight: '10px',
          paddingBottom: '100px'
        }}
      >
        {paragraphs.map((paragraph, idx) => {
          if (typewriterDelays[idx] === true)
            return <Typewriter words={[paragraph]} typeSpeed={60} />;
          return null;
        })}
      </div>
      <img
        src="gift.svg"
        alt=""
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%'
        }}
      />
    </div>
  );
});
