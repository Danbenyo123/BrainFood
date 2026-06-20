import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { getNotes } from '../api/notes.js';
import { useToast } from '../context/ToastContext.jsx';
import AppLayout from '../components/layout/AppLayout.jsx';
import NotesGrid from '../components/note/NotesGrid.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';
import './SearchResults.css';

export default function SearchResults() {
  const [searchParams]      = useSearchParams();
  const q                   = searchParams.get('q') || '';
  const [all, setAll]       = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToast }        = useToast();

  useEffect(() => {
    getNotes()
      .then(setAll)
      .catch(() => addToast('Could not load notes', 'error'))
      .finally(() => setLoading(false));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const results = q
    ? all.filter(n => (n.title + ' ' + n.content).toLowerCase().includes(q.toLowerCase()))
    : all;

  return (
    <AppLayout>
      <div className="bf-search__heading">
        <div className="bf-search__count">{results.length} results</div>
        <div className="bf-search__query">"{q}"</div>
      </div>
      {!loading && results.length === 0
        ? <EmptyState variant="search" query={q} />
        : <NotesGrid notes={results} />
      }
    </AppLayout>
  );
}
