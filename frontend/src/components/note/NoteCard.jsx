import { useNavigate } from 'react-router';
import { SparkIcon, ClusterIcon } from '../icons/Icons.jsx';
import './NoteCard.css';

export default function NoteCard({ note }) {
  const navigate = useNavigate();
  const isCluster = note.type === 'cluster';

  return (
    <div className="bf-notecard" onClick={() => navigate(`/notes/${note.id}`)}>
      {isCluster ? <ClusterIcon size={24} /> : <SparkIcon size={22} />}
      <div className="bf-notecard__title">{note.title || 'Untitled'}</div>
      {note.content && <div className="bf-notecard__preview">{note.content}</div>}
    </div>
  );
}
