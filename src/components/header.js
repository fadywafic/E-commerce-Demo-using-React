import { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./login";



class Header extends Component{

  
  // login =()=>{
  //   console.log("logout")
  //   this.props.logout()
  // }
  render(){
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Welcome</a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/products"}>
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/add"}>
                    Add products
                  </Link>
                </li>
              </ul>
                <Link className="btn btn-outline-success" to={'/'} onClick={()=>this.props.logoutRef()}>
                  Log Out
                </Link>
            </div>
          </div>
        </nav>
        <h1 className="text-center">HELLO</h1>
      </>
    );
  }
}

export default Header;