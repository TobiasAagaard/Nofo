

import './App.css'
import { Navbar } from './components/Nav/Navbar'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Frivillige } from './components/Frivillige/Frivillige'
import { Partnere } from './components/Partnere/Partnere'
import { Bestyrelsen } from './components/Bestyrelsen/Bestyrelsen'
import { Fonde } from './components/Fonde/Fonde'
import { Footer } from './components/Footer/Footer'
import { Medlem } from './components/Medlem/Medlem'
import { Kontakt } from './components/Kontakt/kontakt'
import { Tal } from './components/Tal/Tal'
import { Uddeling } from './components/Uddeling/Uddeling'


function App() {  

  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Frivillige />
      <Uddeling />
      <Tal  />
      <Medlem />
      <Partnere />
      <Bestyrelsen />
      <Fonde />
      <Kontakt />
      <Footer />
      
    </div>
  )
} 

export default App
