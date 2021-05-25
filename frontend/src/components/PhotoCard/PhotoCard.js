import React from "react";
import "./PhotoCard.css";

class PhotoCard extends React.Component {
  render() {
    const { label, url } = this.props;
    return (
      <div className="photo-card-wrapper">
        <img src={url} className="photo-card-img" />
      </div>
    );
  }
}

export default PhotoCard;
