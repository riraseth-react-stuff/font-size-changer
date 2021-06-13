const Nav = () => {
  return (
    <nav className="nav">
      <label className="nav__hamburger" for="menu-toggle">
        MENU
      </label>
      <input type="checkbox" id="menu-toggle" className="nav__checkbox" />
      <div className="nav__container">
        <a href="https://www.google.com/" className="nav__link">
          Item 1
        </a>
        <a href="https://www.google.com/" className="nav__link">
          Item 2
        </a>
        <a href="https://www.google.com/" className="nav__link">
          Item 3
        </a>
      </div>
    </nav>
  );
};

export default Nav;
