import React, { Component } from "react";
import { Globalstyle } from "./style/reset";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div>
        <Globalstyle />
        <Header />
      </div>
    );
  }
}

export default App;
