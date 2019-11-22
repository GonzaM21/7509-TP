import React from "react";
import NavBar from "./components/NavBar";
import Buscador from "./components/Buscador";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <React.Fragment>
        <NavBar />
        <Buscador />
      </React.Fragment>
    );
  }
}

export default App;
