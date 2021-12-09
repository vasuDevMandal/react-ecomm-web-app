import React, { Component, createRef } from "react";

export default class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.inputRef = createRef();
  }

  onButtonClick = () => {
    console.log(this.inputRef.current.value);
  };

  componentDidMount() {
    console.log("component did mount executed");
  }

  componentWillUnmount() {}

  componentDidUpdate() {
    console.log("component did update executed");
    alert("updarte");
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.onButtonClick}>click me!!</button>
      </div>
    );
  }
}
