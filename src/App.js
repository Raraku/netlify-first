import React from "react";
import { Component } from "react";
import * as All from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Fa from "@fortawesome/free-solid-svg-icons";
import * as Af from "@fortawesome/fontawesome-svg-core";
import "./App.css";
import "logo.svg";
import { all } from "q";
import DropdownItem from "react-bootstrap/DropdownItem";
import { realpathSync } from "fs";
import Layout from "./containers/layout";
var t = [];
let p = 0;
for (let i = 1; i < 100; ++i) {
  t.push(i);
  ++p;
}

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
