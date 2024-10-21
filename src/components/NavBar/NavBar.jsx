import Cart from '../Cart/Cart'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          TIENDA EJEMPLO
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
          <ul className="navbar-nav ms-auto p-2 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" href="#">
                Productos
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
