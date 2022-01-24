import Nav from "../Nav";

function Header(props) {
  return (
    <header>
      <div className="header">
        <h1>
          <a href="https://vsmith.herokuapp.com/">
            Victor Smith
          </a>
        </h1>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
