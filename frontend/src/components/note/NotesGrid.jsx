import NoteCard from './NoteCard.jsx';
import './NotesGrid.css';

export default function NotesGrid({ notes }) {
  return (
    <div className="bf-notesgrid">
      {notes.map(note => <NoteCard key={note.id} note={note} />)}
    </div>
  );
}
