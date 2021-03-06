//this will contain the React router
import React from 'react'
import Home from './Home'
import { BrowserRouter, Router, Route, Link, Redirect } from "react-router-dom";
import Header from './Header'
import About from './About'

import Search from './search/Search'
import Timer from './counter/Timer'
import Quote from './quote/Quote'



const AppRouter = () => (
  <BrowserRouter>
    <div className="router">
      <Header />
      <Route exact path="/"  component={Home}/>
      <Route exact path ="/about" render = { () => <About title = 'About me'/> }/>
      <Route exact path = "/image-search" component ={Search}/>
      <Route path = "/game-counter" component = {Timer}/>
      <Route path = "/quote" component = {Quote}/>
      <Route path='/other' component={() => { window.location = 'https://www.alfyhushairi.com'; return null;} }/>
    </div>
  </BrowserRouter>
);

export default AppRouter;
