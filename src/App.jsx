import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Home } from './components/Home'
import { Planner } from './components/planner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
      <Planner/>
    </div>
  )
}

export default App
