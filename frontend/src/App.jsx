import { useState } from 'react';

import NavHeader from './components/NavHeader';
import ActionsHeader from './components/ActionsHeader';
import NotesGrid from './components/NotesGrid';
import Footer from './components/Footer';

function App() {
  const [notes,setNotes] = useState([]);


  return (
    <>
      <NavHeader/>
      <main>
        <h1>Main Content</h1>
        <ActionsHeader setNotes={setNotes}/>
        <NotesGrid notes={notes} setNotes = {setNotes}/>
      </main>
      <Footer/>
    </>
  )
}

export default App
