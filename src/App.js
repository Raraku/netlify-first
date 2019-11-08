import React from "react";
import { Component } from "react";
import "./App.css";
import "logo.svg";
import Layout from "./containers/layout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleOpen = () => {
    this.setState({ show: true });
  };
  render() {
    return <Layout />;
  }
}

export default App;
