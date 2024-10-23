import Cart from '../CartWidget/Cart'
import '../NavBar/NavBar.css'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white">
      <div className="container-fluid">
        <a className="d-flex navbar-brand text-white fw-bold align-items-center" href="#">
          <img className="w-5 me-2" src="../../../public/page-icon.svg" alt="Logo" />
          <p className="fs-4 m-0">FITNESS - SHOP</p>
        </a>
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
              <a className="nav-link active text-white fs-5" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white fs-5" href="#">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white fs-5" href="#">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white fs-5" href="#">
                Contacto
              </a>
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
