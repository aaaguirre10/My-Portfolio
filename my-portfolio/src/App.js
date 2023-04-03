import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Componets
import { NavBar } from './components/NavBar.js'
import { Banner } from './components/Banner.js'
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App