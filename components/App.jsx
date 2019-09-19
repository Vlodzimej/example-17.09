import React, { Component } from "react";
import axios from "axios";
import List from "./List.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };

    console.log("constructor");
  }

  componentDidMount() {
    console.log("/list/count=3");
    axios
      .get("/list", { params: { count: 3 } })
      .then(res => this.setState({ list: res.data }));
  }

  render() {
    console.log("state", this.state);

    const { list } = this.state;

    return (
      <div>
        <List list={list} />
      </div>
    );
  }
}

export default App;
