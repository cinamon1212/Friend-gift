import { useEffect, useState } from 'react';

const TEXT_STYLES = {
  opacity: 0,
  transform: 'scale(0)'
};

export const useTextStyles = (
  openDelay: number,
  closeDelay: number,
  isOpen: boolean
) => {
  const [textStyles, setTextStyles] = useState(TEXT_STYLES);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setTextStyles(TEXT_STYLES);
      }, closeDelay);
    } else
      setTimeout(() => {
        setTextStyles({ opacity: 1, transform: 'scale(1)' });
      }, openDelay);
  }, [closeDelay, isOpen, openDelay]);

  return textStyles;
};
