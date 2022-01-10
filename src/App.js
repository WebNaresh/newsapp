import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      category: "science"
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<News key={"general"} category={"general"}  />} />
            <Route  path="/business" element={<News key={"business"} category={"business"}  />} />
            <Route  path="/entertainment" element={<News key={"entertainment"} category={"entertainment"}  />} />
            <Route  path="/health" element={<News key={"health"} category={"health"}  />} />
            <Route  path="/science" element={<News key={"science"} category={"science"}  />} />
            <Route  path="/sports" element={<News key={"sports"} category={"sports"}  />} />
            <Route  path="/technology" element={<News key={"technology"} category={"technology"}  />} />
            
          </Routes>
        </BrowserRouter>

      </div>
    )
  }
}
// urlGiven={this.state.urlGiven}