import { useState } from 'react';
import { useNavigate } from 'react-router';
import { createNote } from '../api/notes.js';
import { useToast } from '../context/ToastContext.jsx';
import AppLayout from '../components/layout/AppLayout.jsx';
import Button from '../components/ui/Button.jsx';
import { SaveIcon } from '../components/icons/Icons.jsx';
import './NewNote.css';

export default function NewNote() {
  const [title, setTitle]     = useState('');
  const [content, setContent] = useState('');
  const { addToast }          = useToast();
  const navigate              = useNavigate();

  const save = async () => {
    if (!title && !content) return;
    try {
      const note = await createNote({ title: title || 'Untitled', content });
      addToast('Saved', 'saved');
      navigate(`/notes/${note.id}`);
    } catch (err) {
      addToast(err.message || 'Could not save', 'error');
    }
  };

  return (
    <AppLayout>
      <div className="bf-newnote">
        <div className="bf-newnote__date">
          {new Date().toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}
        </div>
        <div className="bf-newnote__canvas">
          <input
            className="bf-newnote__title"
            placeholder="Title (optional)"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <div className="bf-newnote__body-wrap">
            <textarea
              className="bf-newnote__body"
              placeholder="What do you want to think about?"
              value={content}
              onChange={e => setContent(e.target.value)}
            />
            {!content && <span className="bf-cursor bf-newnote__cursor" />}
          </div>
        </div>
        <div className="bf-newnote__save">
          <Button variant="secondary" onClick={save}>
            <SaveIcon /> Save
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}
