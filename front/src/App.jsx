import React from "react";
import { hot } from "react-hot-loader";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <title>
          PSA
        </title>
        <div className="Hello world">
          Hello world.
        </div>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
