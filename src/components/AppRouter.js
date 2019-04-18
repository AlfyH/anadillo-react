//this will contain the React router
import React from 'react'
import Home from './Home'
import { BrowserRouter, Router, Route, Link, Redirect } from "react-router-dom";
import Header from './Header'
import About from './About'
import CV from './CV'
import Projects from './Projects'
import Music from './Music'
import LogoDesign from './LogoDesign'


const AppRouter = () => (
  <BrowserRouter>
    <div className="router">
      <Header />
      <Route exact path="/" component={Home}/>
      <Route exact path ="/about" render = { () => <About title = 'About me'/> }/>
      <Route exact path = "/cv" component ={CV}/>
      <Route path = "/projects" component = {Projects}/>
      <Route path = "/music" component = {Music}/>
      <Route path = "/logodesign" component = {LogoDesign}/>
    </div>
  </BrowserRouter>
);

export default AppRouter;
