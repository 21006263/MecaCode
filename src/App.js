import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css"
import Header from './components/LayaoutContainer/Home/Header/Header';
import Footer from './components/LayaoutContainer/Home/Footer/Footer';
import Home from './Home'

function App() {
  return (
    <Router>
    
    <div className="App">
      <Header/>
     <div className="">
      <Route path= "/" component={Home} exact />
      </div>
      <Footer/>
    </div>
    </Router>
  )
}

export default App