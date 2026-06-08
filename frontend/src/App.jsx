import { useState } from 'react';
import './App.css';
import NavHeader from './componenets/NavHeader';
import NotesGrid from './componenets/NotesGrid';

function App() {
  const [notes,setNotes] = useState([]);
  return (
    <>
      <NavHeader/>
      <main>
        <h2>Main Content</h2>
        <NotesGrid notes={notes} setNotes = {setNotes}/>
      </main>
      <footer>
        <h3>Footer content</h3>
      </footer>
    </>
  )
}

export default App
