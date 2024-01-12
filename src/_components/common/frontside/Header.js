import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../_assets/images/white-logo.png';


const Header = () => {

  const [login, setLogin] = React.useState(false);

  const handleLogin = (val) => setLogin(val);

  return (
    <header className="header">
      <div className="container-xl">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} className="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarheader">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarheader">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/collections">collections</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Practice
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><Link class="dropdown-item" to="/practice">Simple state change</Link></li>
                    <li><Link class="dropdown-item" to="/practice/acoount-balance">Account balance</Link></li>
                    <li><Link class="dropdown-item" to="/practice/incr-dec-clock">Increase/Decrease Clock</Link></li>
                    <li><Link class="dropdown-item" to="/skypey">Skypey</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <div className="d-flex gap-3 ms-3">
                    <a class="btn btn-primary no-animate" data-bs-toggle="modal" href="#loginmodal">Login / Register</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;