import React from "react";
import {Link} from "react-router-dom"


const Navigation: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <Link to="/" className="navbar-brand d-flex align-items-center ml-5" href="#">
        <i className="fa fa-globe" aria-hidden="true"></i>
          <p className="mb-0 ml-1">WorldNews</p>
        </Link>
      </nav>
    </>
  );
};

export default Navigation;
