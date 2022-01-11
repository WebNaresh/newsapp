import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App =()=> {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY

  const [Progress, setProgress] = useState(0)



    return (
      <div>
        <BrowserRouter>
          <Navbar></Navbar>
          <LoadingBar
            color='#f11946'
            progress={Progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key={"general"} category={"general"} />} />
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key={"business"} category={"business"} />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key={"entertainment"} category={"entertainment"} />} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key={"health"} category={"health"} />} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key={"science"} category={"science"} />} />
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key={"sports"} category={"sports"} />} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key={"technology"} category={"technology"} />} />
            <Route path="/*" element={<News setProgress={setProgress} apiKey={apiKey} notFound={'notFound'} key={"technology"} category={"this is not Sry ...."} />} />

          </Routes>
        </BrowserRouter>

      </div>
    )
}


export default App