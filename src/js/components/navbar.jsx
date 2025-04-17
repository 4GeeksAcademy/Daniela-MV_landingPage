import React from "react";

const Navbar = () => {
return(
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid bg-secondary">
    <a className="navbar-brand text-light fs-2" href="#">Start Bootstrap</a>
    
    <div className= "position-absolute top-0 end-0">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-light fs-4" aria-current="page" href="#">Home</a>
        <a className="nav-link text-light fs-4" href="#">About</a>
        <a className="nav-link text-light fs-4" href="#">Service</a>
        <a className="nav-link disabled text-light fs-4">Contact</a>
      </div>
    </div>
    </div>
  </div>
</nav>
)
}

export default Navbar;
