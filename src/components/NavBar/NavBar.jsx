import Cart from '../CartWidget/Cart'
import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white">
      <div className="container-fluid">
        <Link className="d-flex navbar-brand text-white fw-bold align-items-center" to="#">
          <img className="w-5 me-2" src="../../../public/page-icon.svg" alt="Logo" />
          <p className="fs-4 m-0">FITNESS - SHOP</p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white fs-5" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white fs-5" to="/products">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white fs-5" to="/aboutUs">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white fs-5" to="/contact">
                Contacto
              </Link>
            </li>
          </ul>
          <form className="d-flex p-2">
            <Cart/>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
