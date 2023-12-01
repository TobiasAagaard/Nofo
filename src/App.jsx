import { useState } from 'react'

import './App.css'

import { Fonde } from './components/Fonde'
import { Partnere } from './components/Partnere'
import { Bestyrelsen } from './components/Bestyrelsen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Partnere></Partnere>
      <Bestyrelsen></Bestyrelsen>
      <Fonde></Fonde>
      
    </>
  )
}

export default App
