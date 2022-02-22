
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {

  constructor(){
    super();
    this.state={mode:'light'}
  }
  toggleMode = ()=>{
    if(this.state.mode==='light'){
      
      this.setState({mode: 'dark'});
      document.body.style.backgroundColor='black';
    }
    else{
      this.setState({mode:'light'})
      document.body.style.backgroundColor='white';
    }
  }


  render() {
    return (
      <div>
        <Router>
        <Navbar mode={this.state.mode} togglemode={this.toggleMode}/>
        <Routes>
        
        <Route exact path="/" element={<News key="general" mode={this.state.mode} pagesize= {20} country='in' category='general'/>}/>
        
        <Route exact path="/science" element={<News key="science" mode={this.state.mode} pagesize= {20} country='in' category='science'/>}/>
        
        <Route exact path="/business" element={<News key="business" mode={this.state.mode} pagesize= {20} country='in' category='business'/>}/>
        
        <Route exact path="/entertainment" element={<News key="entertainment" mode={this.state.mode} pagesize= {20} country='in' category='entertainment'/>}/>
        
        <Route exact path="/sports" element={<News key="sports" mode={this.state.mode} pagesize= {20} country='in' category='sports'/>}/>
        
        <Route exact path="/technology" element={<News key="technology" mode={this.state.mode} pagesize= {20} country='in' category='technology'/>}/>
        
        <Route exact path="/health" element={<News key="health" mode={this.state.mode} pagesize= {20} country='in' category='health'/>}/>
        
        </Routes>
        </Router>
      </div>
    )
  }
}

