import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Componets
import { NavBar } from './components/NavBar.js'
import { Banner } from './components/Banner.js'
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App