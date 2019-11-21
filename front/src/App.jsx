import React from "react";
import { hot } from "react-hot-loader";
import NavBar from "./components/NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="jumbotron">
          
        </div>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
