

import './App.css'
import { Navbar } from './components/Nav/Navbar'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Frivillige } from './components/Frivillige/Frivillige'
import { Partnere } from './components/Partnere/Partnere'
import { Bestyrelsen } from './components/Bestyrelsen/Bestyrelsen'
import { Fonde } from './components/Fonde/Fonde'

import { Footer } from './components/Footer/Footer'

import { BrowserRouter } from 'react-router-dom'

function App() {  

  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Frivillige />
      <Partnere />
      <Bestyrelsen />
      <Fonde />
      <Footer />
    </div>
  </BrowserRouter>
  )
} 

export default App
