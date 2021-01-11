import '../../Bootstrap/css/bootstrap.css';

function NavBar() {
    return (
      <div >
          <nav className="navbar navbar-expand bg-success navbar-dark flex-row-reverse" >
                <div className="collaspe navbar-collaspe">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><span>Home</span> </a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><span>Menu</span> </a>
                            </li>
                        <li className="nav-item">
                                <a className="nav-link" href="#"><span>Locations</span> </a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><span>About Us</span> </a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><span>Contact</span> </a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><span>Order Online</span> </a>
                            </li>
                    </ul>

                </div>
            </nav>

      </div>
    );
  }

  export default NavBar;

  