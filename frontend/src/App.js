import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import PhotoList from "./components/PhotoList/PhotoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      filterPhotos: [],
    };
  }

  updatePhotos = filteredPhotos => {
    this.setState({
      filterPhotos: filteredPhotos,
    });
  };

  componentDidMount() {
    axios
      .get("/api/photos")
      .then(response => {
        this.setState({
          photos: response.data,
          filterPhotos: response.data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { photos, filterPhotos } = this.state;
    return (
      <div className="App">
        <Navbar photos={photos} updatePhotos={this.updatePhotos} />
        <PhotoList photos={filterPhotos} />
      </div>
    );
  }
}

export default App;
