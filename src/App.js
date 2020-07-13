import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Globalstyle } from "./style/reset";
import Header from "./components/header";
import store from "./store";
import Home from "./views/home";
import Detail from "./views/detail";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Globalstyle />
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/detail" component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
