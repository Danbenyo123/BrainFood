import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { getNote, updateNote, deleteNote } from '../api/notes.js';
import { useToast } from '../context/ToastContext.jsx';
import AppLayout from '../components/layout/AppLayout.jsx';
import Breadcrumbs from '../components/nav/Breadcrumbs.jsx';
import CollapsiblePanel from '../components/note/CollapsiblePanel.jsx';
import Button from '../components/ui/Button.jsx';
import Modal from '../components/ui/Modal.jsx';
import { SaveIcon, DeleteIcon } from '../components/icons/Icons.jsx';
import './EditNote.css';

function relativeTime(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export default function EditNote() {
  const { id }                = useParams();
  const navigate              = useNavigate();
  const { addToast }          = useToast();
  const [note, setNote]       = useState(null);
  const [title, setTitle]     = useState('');
  const [content, setContent] = useState('');
  const [delModal, setDelModal] = useState(false);

  useEffect(() => {
    getNote(id)
      .then(n => { setNote(n); setTitle(n.title || ''); setContent(n.content || ''); })
      .catch(() => { addToast('Note not found', 'error'); navigate('/'); });
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const save = async () => {
    try {
      const updated = await updateNote(id, { title: title || 'Untitled', content });
      setNote(updated);
      addToast('Saved', 'saved');
    } catch (err) {
      addToast(err.message || 'Could not save', 'error');
    }
  };

  const confirmDelete = async () => {
    try {
      await deleteNote(id);
      addToast('Note deleted', 'info');
      navigate('/');
    } catch (err) {
      addToast(err.message || 'Could not delete', 'error');
    }
  };

  if (!note) return <AppLayout><div className="bf-editnote__loading">Loading…</div></AppLayout>;

  return (
    <AppLayout>
      <Breadcrumbs note={note} />
      <div className="bf-editnote__layout">
        <div className="bf-editnote__main">
          <div className="bf-editnote__content">
            <input
              className="bf-editnote__title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Untitled"
            />
            <div className="bf-editnote__meta">
              Saved · {relativeTime(note.created_at)}
            </div>
            <textarea
              className="bf-editnote__body"
              value={content}
              onChange={e => setContent(e.target.value)}
            />
          </div>

          <button className="bf-editnote__delete" onClick={() => setDelModal(true)}>
            <DeleteIcon size={13} color="currentColor" /> Delete
          </button>

          <div className="bf-editnote__save">
            <Button variant="secondary" onClick={save}>
              <SaveIcon /> Save
            </Button>
          </div>
        </div>

        <CollapsiblePanel />
      </div>

      <Modal
        open={delModal}
        title="Delete this note?"
        body="This can't be undone."
        onCancel={() => setDelModal(false)}
        onConfirm={confirmDelete}
        confirmLabel="Delete"
      />
    </AppLayout>
  );
}
