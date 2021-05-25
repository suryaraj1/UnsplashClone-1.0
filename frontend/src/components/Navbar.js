import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-search-wrapper">
          <input
            className="navbar-search"
            type="input"
            placeholder="Saerch by name"
          />
        </div>
        <div className="navbar-btn-wrapper">
          <button className="navbar-btn">Add a Photo</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
