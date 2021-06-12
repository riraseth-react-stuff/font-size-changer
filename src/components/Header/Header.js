import Nav from './Nav';
const Header = () => {
  return (
    <header className="header container">
      <img
        src="https://source.unsplash.com/random/150x120"
        alt=""
        className="header__logo"
      />
      <Nav></Nav>
    </header>
  );
};

export default Header;
