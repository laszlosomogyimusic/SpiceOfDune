import React from 'react'
import { Navbar, Houses } from './components'
import { Header } from './containers'

import './App.css'
import './index.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div> 
      <Houses />
    </div>
  )
}

export default App