import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

const particleOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 700,
      },
    },
  },
};
const initialState = {
  input: "",
  imgUrl: "",
  boxes: [],
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};
class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }
  loadUser = ({ id, name, email, entries, joined }) => {
    this.setState({
      user: {
        id: id,
        name: name,
        email: email,
        entries: entries,
        joined: joined,
      },
    });
  };
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  calculateFaceLocations = (data) => {
    return data.outputs[0].data.regions.map((face) => {
      const clarifiFace = face.region_info.bounding_box;
      const image = document.getElementById("inputImage");
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftCol: clarifiFace.left_col * width,
        topRow: clarifiFace.top_row * height,
        rightCol: width - clarifiFace.right_col * width,
        bottomRow: height - clarifiFace.bottom_row * height,
      };
    });
  };
  displayFaceBoxes = (boxes) => {
    this.setState({ boxes: boxes });
  };
  onImageSubmit = () => {
    const img = this.state.input;
    if (img !== "") {
      this.setState({ imgUrl: img });
      // fetch("https://tranquil-temple-80934.herokuapp.com/imageUrl", {
      fetch("http://localhost:3000/imageurl", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: img,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            // fetch("https://tranquil-temple-80934.herokuapp.com/image", {
            fetch("http://localhost:3000/image", {
              method: "put",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                id: this.state.user.id,
              }),
            })
              .then((response) => response.json())
              .then((count) => {
                this.setState(
                  Object.assign(this.state.user, { entries: count })
                );
              })
              .catch((err) => alert(err));
          }
          this.displayFaceBoxes(this.calculateFaceLocations(response));
        })
        .catch((err) => alert(err));
    }
  };
  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };
  render() {
    const { isSignedIn, imgUrl, route, boxes } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        ></Navigation>

        {route === "home" ? (
          <div>
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onImageSubmit={this.onImageSubmit}
            ></ImageLinkForm>

            <FaceRecognition imageUrl={imgUrl} boxes={boxes}></FaceRecognition>
          </div>
        ) : route === "signin" ? (
          <SignIn
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          ></SignIn>
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          ></Register>
        )}
      </div>
    );
  }
}

export default App;
