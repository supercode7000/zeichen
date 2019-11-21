import React, { Component } from 'react';
import './App.css';
import Input from './Components/Input';
import Radio from './Components/Radio';
import Output from './Components/Output';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      position: '',
      isDavor: true,
      vorderer: '',
      hinterer: ''
    }
  }

  handleInput = (event) => {
    this.setState({ value: event.target.value })
  }
  handlePosition = (event) => {
    this.setState({ position: event.target.value })
  }
  handleRadio = () => {
    this.setState({ isDavor: !this.state.isDavor })
  }
  trennen = (event) => {
    event.preventDefault();
    console.log("submitted")
    if (this.state.isDavor) {
      let pos = this.state.value.search(this.state.position);
      let first = this.state.value.slice(0, pos);
      let second = this.state.value.slice(pos);
      this.setState({ vorderer: first })
      this.setState({ hinterer: second })
    }
    else {
      let pos = this.state.value.search(this.state.position);
      let difLength = this.state.position.length;
      let first = this.state.value.slice(0, pos + difLength);
      let second = this.state.value.slice(pos + difLength);
      this.setState({ vorderer: first })
      this.setState({ hinterer: second })
    }
  }
  render() {
    return (
      <main className="App">
        <Input
          handleInput={this.handleInput}
          handlePosition={this.handlePosition}
        />
        <Radio
          isDavor={this.state.isDavor}
          handleRadio={this.handleRadio}
          trennen={this.trennen}
        />
        <Output
          vorderer={this.state.vorderer}
          hinterer={this.state.hinterer}
        />
      </main>
    );
  }
}

export default App;


