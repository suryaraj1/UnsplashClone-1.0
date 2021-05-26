import React from "react";
import "./Navbar.css";
import PhotoForm from "../PhotoForm/PhotoForm";
import UnsplashLogo from "../../static/my_unsplash_logo.svg";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      search: "",
    };
  }

  clickHandler = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  updateSearch = event => {
    this.setState({
      search: event.target.value,
    });
  };

  render() {
    const { showModal, search } = this.state;
    return (
      <div className="navbar-wrapper">
        <div className="navbar-logo-search-wrapper">
          <img className="navbar-img" src={UnsplashLogo} />
          <div className="navbar-search-wrapper">
            <svg
              className="navbar-search-icon"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="navbar-search"
              type="input"
              value={search}
              onChange={this.updateSearch}
              placeholder="Search by name"
            />
          </div>
        </div>
        <div className="navbar-btn-wrapper">
          <button className="navbar-btn" onClick={this.clickHandler}>
            Add a Photo
          </button>
          <PhotoForm showModal={showModal} />
        </div>
      </div>
    );
  }
}

export default Navbar;
