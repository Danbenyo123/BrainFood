import Note from "./Note";
import { useEffect } from "react";

const NotesGrid = ({notes,setNotes}) => {
  useEffect(() => {
    const fetchNotes = async () => {
    try {
        const res = await fetch('/api/v1/notes');
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const json = await res.json();
        const notesArray = json.data;
        setNotes(notesArray);
        
  } catch (err) {
    console.error(err.message);
  }
    };
  fetchNotes();
  },[])

    return ( 
       <div className="grid grid-cols-3 gap-4 m-5">
        {notes.map((note) => (
          <Note notes={notes} setNotes={setNotes} key={note.id} note={note}/>
        ))}
       </div>
     );
};
 
export default NotesGrid;