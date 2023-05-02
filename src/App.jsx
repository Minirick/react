import { useState } from 'react'
import React from 'react'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Product from "./components/Product"
import Contact from "./components/Contact"



function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/product' compoent={Product} exact>
            <Product />
          </Route>
          <Route path='/contact' compoent={Contact} exact>
            <Contact />
          </Route>
          
        </Switch>
      </Router>


      


    </>
    

  
  )
}

export default App
