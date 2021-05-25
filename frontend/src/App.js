import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import PhotoList from "./components/PhotoList/PhotoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/photos")
      .then(response => {
        this.setState({
          photos: response.data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { photos } = this.state;
    return (
      <div className="App">
        <Navbar />
        <PhotoList photos={photos} />
      </div>
    );
  }
}

export default App;
