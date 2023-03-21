import { useState } from 'react'
import User from './components/Home'
import Navbar from './components/Navbar'
import Home from './containers/HomeContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Navbar />
      <Home />
    </>
  )
}

export default App
