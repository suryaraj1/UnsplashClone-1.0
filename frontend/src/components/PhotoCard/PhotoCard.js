import React from "react";
import "./PhotoCard.css";
import PhotoDeleteForm from "../PhotoDeleteForm/PhotoDeleteForm";

class PhotoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  onClickHandler = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const { showModal } = this.state;
    const { label, url } = this.props;
    return (
      <div className="photo-card-wrapper">
        <img src={url} className="photo-card-img animation" />
        <div className="photo-card-overlay animation">
          <div className="photo-card-overlay-btn-wrapper">
            <button
              onClick={this.onClickHandler}
              className="photo-card-overlay-btn"
            >
              delete
            </button>
          </div>
          <p className="photo-card-overlay-text">{label}</p>
        </div>
        <PhotoDeleteForm showModal={showModal} />
      </div>
    );
  }
}

export default PhotoCard;
