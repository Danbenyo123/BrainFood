import { useEffect, useState } from 'react';
import { getNotes } from '../api/notes.js';
import { useToast } from '../context/ToastContext.jsx';
import AppLayout from '../components/layout/AppLayout.jsx';
import NotesGrid from '../components/note/NotesGrid.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';
import './Home.css';

export default function Home() {
  const [notes, setNotes]   = useState([]);;
  const [loading, setLoading] = useState(true);
  const { addToast }        = useToast();

  useEffect(() => {
    getNotes()
      .then(setNotes)
      .catch(() => addToast('Could not load notes', 'error'))
      .finally(() => setLoading(false));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AppLayout>
      <div className="bf-home__heading">Home</div>
      {!loading && notes.length === 0
        ? <EmptyState variant="home" />
        : <NotesGrid notes={notes} />
      }
    </AppLayout>
  );
}
