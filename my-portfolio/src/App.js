import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Componets
import { NavBar } from './components/NavBar.js'
import { Banner } from './components/Banner.js'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
    </div>
  )
}

export default App