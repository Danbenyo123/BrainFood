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
    console.error(err);
  }
    };
  fetchNotes();
  },[])
    console.log(notes);
    return ( 
       <div className="notesGrid">
        {notes.map((note) => (
          <Note note={note}/>
        ))}
       </div>
     );
};
 
export default NotesGrid;