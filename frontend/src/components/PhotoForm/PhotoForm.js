import React from "react";
import "./PhotoForm.css";
import axios from "axios";
import ReactModal from "react-modal";

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      label: "",
    };
  }

  onUrlChange = event => {
    this.setState({
      url: event.target.value,
    });
  };

  onLabelChange = event => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmithandler = event => {
    event.preventDefault();
    const { url, label } = this.state;
    axios
      .post("/api/photos", {
        label,
        url,
      })
      .then(response => {
        window.location = "/";
      })
      .catch(err => console.log(err));
  };

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
                spellCheck={false}
                onChange={this.onLabelChange}
                className="photo-submit-input"
                placeholder="Suspendisse elit massa"
              />
            </div>

            <div className="photo-submit-input-wrapper">
              <p className="photo-submit-input-label">Photo URL</p>
              <input
                spellCheck={false}
                onChange={this.onUrlChange}
                className="photo-submit-input"
                placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
              />
            </div>

            <div className="photo-submit-btn-wrapper">
              <button className="photo-submit-btn cancel">Cancel</button>
              <button
                onClick={this.onSubmithandler}
                className="photo-submit-btn submit"
                type="submit"
              >
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
