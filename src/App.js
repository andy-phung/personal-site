import React from 'react';
import { ReactDOM, createRoot } from "react-dom/client";
import './index.css';

import { 
  Routes, 
  Route, 
  Outlet, 
  Link, 
  BrowserRouter
  } from "react-router-dom";

import { Home } from "./home"
import { About } from "./about"
import { Projects } from "./projects"
import { NavBar, NotFound, ExternalLink, Footer } from "./util"

  
export default class App extends React.Component { 
  constructor(props) {
    super(props);
    this.app = React.createRef();

  }

  render() {
    return (
      <div ref={this.app} className="App">
          <Routes>
            <Route path="/" element={ <NavBar/> }>
              <Route index element={ <Home/> } />
              <Route path="about" element={ <About/> } />
              <Route path="projects" element={<Projects/>} />
              <Route path="*" element={<NotFound/>} />
            </Route>
          </Routes>   
      </div>
    );
  }
}
  
  
  // https://stackoverflow.com/questions/42914666/react-router-external-link for resume link