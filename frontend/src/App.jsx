import { useState } from 'react'
import './App.css'
import NavHeader from './componenets/NavHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavHeader/>
      <main>
        <h2>Main Content</h2>
      </main>
      <footer>
        <h3>Footer content</h3>
      </footer>
    </>
  )
}

export default App
