import React, { Component } from "react";
import { Provider } from "react-redux";
import { Globalstyle } from "./style/reset";
import Header from "./components/header";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Globalstyle />
        <Header />
      </Provider>
    );
  }
}

export default App;
