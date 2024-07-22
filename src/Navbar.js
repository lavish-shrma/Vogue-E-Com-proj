import React from "react";
import './index.css';
import { NavLink } from "react-router-dom";


const Navbar=()=>{
return (
    <> 

<center><img src="https://assets.website-files.com/5ee732bebd9839b494ff27cd/5eef395df2eb3d80f08d8030_VOGUE_LOGO.svg" height="250px" width="1000px"/></center>


    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
      VOUGE
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/AboutUs">
          AboutUs
        </NavLink>
        <NavLink className="nav-link" to="/Fashion">
          Fashion
        </NavLink>
        <NavLink className="nav-link" to="/Runway">
          Runway
        </NavLink>
        <NavLink className="nav-link" to="/Beauty">
          Beauty
        </NavLink>
        <NavLink className="nav-link" to="/Podcast">
          Podcast
        </NavLink>
      </div>
    </div>
  </div>
  
  
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand"></a>
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Subscribe
      </button>
    </form>
  </div>
</nav>

</nav>

    
    
    
    
    
    
    </>
)

}
export default Navbar;