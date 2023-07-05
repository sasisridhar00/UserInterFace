import { Outlet, Link } from "react-router-dom";
const Navbar =() =>{
  return(
  <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Postagram</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-Link active" to="/About" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link active" to="/login" href="#">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/register" href="#">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/profile" href="#">Profile</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-Link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                more
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="#">Likes</Link></li>
                <li><Link className="dropdown-item" href="#">Followers</Link></li>
                <li><Link className="dropdown-item" href="#">Following</Link></li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>
    <Outlet />
  </div>

)
  };
export default Navbar;