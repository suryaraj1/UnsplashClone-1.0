import React from "react";
import axios from "axios";
import ReactModal from "react-modal";
import "./PhotoDeleteForm.css";

class PhotoDeleteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
    };
  }

  onInputHandler = event => {
    this.setState({
      password: event.target.value,
    });
  };

  onDeleteHandler = event => {
    event.preventDefault();
    const { password } = this.state;
    const label = password;
    axios
      .delete(`/api/photos/${label}`)
      .then(() => (window.location = "/"))
      .catch(err => console.log(err));
  };

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
                onChange={this.onInputHandler}
                placeholder="*******************"
                className="photo-delete-input"
              />
            </div>
            <div className="photo-delete-btn-wrapper">
              <button type="submit" className="photo-delete-btn cancel">
                Cancel
              </button>
              <button
                onClick={this.onDeleteHandler}
                type="submit"
                className="photo-delete-btn submit"
              >
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
