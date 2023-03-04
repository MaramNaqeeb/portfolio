import React from 'react'
import Experties from './components/Experties/Experties'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import css from './styles/App.module.scss'
const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Experties/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default App