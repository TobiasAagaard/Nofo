import { BrowserRouter } from 'react-router-dom'
import './App.css'

import { Navbar } from './components/Nav/Navbar'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'

function App() {  

  return (
    <>
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Header />
        <About />
      </div>
      </BrowserRouter>
    </>
  )
} 

export default App
