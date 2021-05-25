import React from "react";
import "./PhotoCard.css";

class PhotoCard extends React.Component {
  render() {
    const { label, url } = this.props;
    return (
      <div className="photo-card-wrapper">
        <img src={url} className="photo-card-img animation" />
        <div className="photo-card-overlay animation">
          <div className="photo-card-overlay-btn-wrapper">
            <button className="photo-card-overlay-btn">delete</button>
          </div>
          <p className="photo-card-overlay-text">{label}</p>
        </div>
      </div>
    );
  }
}

export default PhotoCard;
