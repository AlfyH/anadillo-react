//this will contain the React router
import React from 'react'
import Home from './Home'
import { BrowserRouter, Router, Route, Link, Redirect } from "react-router-dom";
import Header from './Header'
import About from './About'

import Search from './search/Search'
import Timer from './counter/Timer'

import Projects from './Projects'
import Music from './Music'
import LogoDesign from './LogoDesign'


const AppRouter = () => (
  <BrowserRouter>
    <div className="router">
      <Header />
      <Route exact path="/" component={Home}/>
      <Route exact path ="/about" render = { () => <About title = 'About me'/> }/>
      <Route exact path = "/image-search" component ={Search}/>
      <Route path = "/game-timer" component = {Timer}/>
      <Route path = "/music" component = {Music}/>
      <Route path='/other' component={() => { window.location = 'https://www.alfyhushairi.com'; return null;} }/>
    </div>
  </BrowserRouter>
);

export default AppRouter;
