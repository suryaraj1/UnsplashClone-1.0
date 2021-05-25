import React from "react";
import "./PhotoList.css";
import PhotoCard from "../PhotoCard/PhotoCard";

class PhotoList extends React.Component {
  render() {
    const { photos } = this.props;
    return (
      <div className="photo-list-wrapper">
        <div className="photo-list-grid">
          {photos.map(photo => {
            const { photoUrl, photoLabel } = photo;
            return <PhotoCard url={photoUrl} label={photoLabel} />;
          })}
        </div>
      </div>
    );
  }
}

export default PhotoList;
