import React from 'react'
import { CTA, Navbar, Houses } from './components'
import { Header, WhatSpice, Features, Possibility, Footer, Blog } from './containers'

import './App.css'
import './index.css'

const App = () => {
  return (
    <main className="App">
      <header className="gradient__bg">
        <Navbar />
        <Header />
      </header> 
      <Houses />
      <WhatSpice />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </main>
  )
}

export default App