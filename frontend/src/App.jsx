import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <ul className='menu'>
            <li>Home</li>
            <li>About</li>
            <li>My Notes</li>
            <li>Settings</li>
          </ul>
        </nav>
      </header>
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
