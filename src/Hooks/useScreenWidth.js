import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const windowSize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', windowSize);
    return () => window.removeEventListener('resize', windowSize);
  }, []);
  return { width };
};

export default useScreenWidth;
