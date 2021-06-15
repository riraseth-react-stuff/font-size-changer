import { createContext, useState, useEffect } from 'react';

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(() => {
    const value = localStorage.getItem('fontSize');
    return value !== null ? JSON.parse(value) : 100;
  });
  const [showModal, setShowModal] = useState(false);
  const [clickedLimit, setClickedLimit] = useState(false);
  const [showComponent, setShowComponent] = useState(true);

  const handleChange = (action) => {
    if (fontSize < 125 && action === 'increment') {
      setFontSize((prev) => prev + 5);
      setShowModal(false);
    } else if (fontSize > 75 && action === 'decrement') {
      setFontSize((prev) => prev - 5);
      setShowModal(false);
    } else if (fontSize === 75 && action === 'decrement') {
      setShowModal(true);
      setClickedLimit(!clickedLimit);
    } else if (fontSize === 125 && action === 'increment') {
      setShowModal(true);
      setClickedLimit(!clickedLimit);
    }
  };

  const handleClick = () => {
    setShowComponent(false);
  };

  useEffect(() => {
    const asyncLocalStorage = (key, value) => {
      return Promise.resolve().then(function () {
        localStorage.setItem(key, value);
      });
    };
    asyncLocalStorage('fontSize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [clickedLimit]);

  return (
    <FontContext.Provider
      value={{ fontSize, handleChange, showModal, handleClick, showComponent }}
    >
      {children}
    </FontContext.Provider>
  );
};
