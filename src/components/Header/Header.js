import { useState, useEffect } from 'react';
import Nav from './Nav';
const Header = () => {
  const [positionY, setPositionY] = useState(0);

  const scroll = () => {
    setPositionY(window.pageYOffset);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', scroll);
    };
    watchScroll();
    return () => window.removeEventListener('scroll', scroll);
  }, []);
  console.log(positionY);
  return (
    <header
      className={`header container ${positionY > 40 ? 'header--scrolled' : ''}`}
    >
      <a href="https://www.google.com/" className="header__link">
        <img
          src="https://source.unsplash.com/6-C0VRsagUw/300x120"
          alt=""
          className="header__logo"
        />
      </a>
      <Nav></Nav>
    </header>
  );
};

export default Header;
