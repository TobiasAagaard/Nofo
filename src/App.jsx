import { BrowserRouter } from 'react-router-dom'
import './App.css'

import { Navbar } from './components/Nav/Navbar'
import { Header } from './components/Header/Header'

function App() {  

  return (
    <>
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Header />
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
