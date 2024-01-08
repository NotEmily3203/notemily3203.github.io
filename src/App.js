import React from 'react';

import { Footer, Blog, Possibility, Feature, WhatGPT3, Header} from './containers';
import { CTA, Brand, Navbar} from './components'

import './App.css';
const App = () => {
  return (
    <div className='App'>
      <div>
        <Navbar />
        <Header />
      </div>
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
    
  )
}

export default App
