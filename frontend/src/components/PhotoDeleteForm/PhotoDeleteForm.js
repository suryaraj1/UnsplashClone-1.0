import React from "react";
import ReactModal from "react-modal";
import "./PhotoDeleteForm.css";

class PhotoDeleteForm extends React.Component {
  render() {
    const { showModal } = this.props;
    return (
      <div className="photo-delete-form-wrapper">
        <ReactModal isOpen={showModal} className="photo-delete-form-modal">
          <form type="submit" className="photo-delete-wrapper">
            <div className="photo-delete-header-wrapper">
              <p className="photo-delete-header">Are you sure?</p>
            </div>
            <div className="photo-delete-input-wrapper">
              <p className="photo-delete-input-label">Password</p>
              <input
                placeholder="*******************"
                className="photo-delete-input"
              />
            </div>
            <div className="photo-delete-btn-wrapper">
              <button type="submit" className="photo-delete-btn cancel">
                Cancel
              </button>
              <button type="submit" className="photo-delete-btn submit">
                Delete
              </button>
            </div>
          </form>
        </ReactModal>
      </div>
    );
  }
}

export default PhotoDeleteForm;
