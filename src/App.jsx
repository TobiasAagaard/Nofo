

import './App.css'
import { Navbar } from './components/Nav/Navbar'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Fonde } from './components/Fonde'
import { Partnere } from './components/Partnere'
import { Bestyrelsen } from './components/Bestyrelsen'
import { Footer } from './components/Footer/Footer'

import { BrowserRouter } from 'react-router-dom'

function App() {  

  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Partnere />
      <Bestyrelsen />
      <Fonde />
      <Footer />
    </div>
  </BrowserRouter>
  )
} 

export default App
