import React from "react";
import "./PhotoForm.css";
import ReactModal from "react-modal";

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      label: "",
    };
  }
  render() {
    const { showModal } = this.props;
    return (
      <div className="photo-form-wrapper">
        <ReactModal isOpen={showModal} className="photo-submit-modal">
          <form className="photo-submit-wrapper" type="submit">
            <div className="photo-submit-header-wrapper">
              <p className="photo-submit-header">Add a new photo</p>
            </div>

            <div className="photo-submit-input-wrapper">
              <p className="photo-submit-input-label">Label</p>
              <input
                type="input"
                className="photo-submit-input"
                placeholder="Suspendisse elit massa"
              />
            </div>

            <div className="photo-submit-input-wrapper">
              <p className="photo-submit-input-label">Photo URL</p>
              <input
                type="input"
                className="photo-submit-input"
                placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
              />
            </div>

            <div className="photo-submit-btn-wrapper">
              <button className="photo-submit-btn cancel">Cancel</button>
              <button className="photo-submit-btn submit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </ReactModal>
      </div>
    );
  }
}

export default PhotoForm;
