import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Ecomer
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current="page" to="#">
              Carrito
            </Link>
            <Link className="nav-link" to="#">
              login
            </Link>
            <Link className="nav-link" to="#">
              Reguistrate
            </Link>
            <Link className="nav-link" to="/product/new">
              Nuevo producto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
