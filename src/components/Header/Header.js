import Nav from './Nav';
const Header = () => {
  return (
    <header className="header container">
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
