import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      category: "science",
      apiKey: "5b6c0846c1d2425a909b8d6fdfbefbb4"
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<News apiKey={this.state.apiKey} key={"general"} category={"general"}  />} />
            <Route  path="/business" element={<News apiKey={this.state.apiKey} key={"business"} category={"business"}  />} />
            <Route  path="/entertainment" element={<News apiKey={this.state.apiKey} key={"entertainment"} category={"entertainment"}  />} />
            <Route  path="/health" element={<News apiKey={this.state.apiKey} key={"health"} category={"health"}  />} />
            <Route  path="/science" element={<News apiKey={this.state.apiKey} key={"science"} category={"science"}  />} />
            <Route  path="/sports" element={<News apiKey={this.state.apiKey} key={"sports"} category={"sports"}  />} />
            <Route  path="/technology" element={<News apiKey={this.state.apiKey} key={"technology"} category={"technology"}  />} />
            <Route  path="/*" element={<News apiKey={this.state.apiKey} notFound={'notFound'} key={"technology"} category={"this is not Sry ...."}  />} />
            
          </Routes>
        </BrowserRouter>

      </div>
    )
  }
}
// urlGiven={this.state.urlGiven}