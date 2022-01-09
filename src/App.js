import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = "jhon"
  render() {
    return (
      <div>
        <h2>
          Hello my first class based Component {this.c}
        </h2>
      </div>
    )
  }
}
