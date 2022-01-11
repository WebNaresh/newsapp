import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  constructor() {
    super();
    this.state = {
      category: "science",
      apiKey: "d206678b7a79411ea72f7dde5f5714d9"
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar></Navbar>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key={"general"} category={"general"} />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key={"business"} category={"business"} />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key={"entertainment"} category={"entertainment"} />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key={"health"} category={"health"} />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key={"science"} category={"science"} />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key={"sports"} category={"sports"} />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key={"technology"} category={"technology"} />} />
            <Route path="/*" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} notFound={'notFound'} key={"technology"} category={"this is not Sry ...."} />} />

          </Routes>
        </BrowserRouter>

      </div>
    )
  }
}
// urlGiven={this.state.urlGiven}