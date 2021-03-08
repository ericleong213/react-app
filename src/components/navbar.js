import React, { Component } from "react";

//stateless functional Component, when the component has no state or handleEvent, we could use this component instead of class component;

// Destructuring argument, prevsiouly, we have to place prop in () and props.totalCounters inside the render.
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
