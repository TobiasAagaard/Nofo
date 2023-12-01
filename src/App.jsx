import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Nav/Navbar'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Fonde } from './components/Fonde'
import { Partnere } from './components/Partnere'
import { Bestyrelsen } from './components/Bestyrelsen'

function App() {  

  return (
    <>
  <Navbar />
  <Header />
  <About />
  <Partnere />
  <Bestyrelsen />
  <Fonde />
    </>
  )
} 

export default App
