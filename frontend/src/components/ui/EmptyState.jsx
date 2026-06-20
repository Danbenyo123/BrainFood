import { useNavigate } from 'react-router';
import { SparkIcon, SearchIcon } from '../icons/Icons.jsx';
import Button from './Button.jsx';
import './EmptyState.css';

export default function EmptyState({ variant = 'home', query }) {
  const navigate = useNavigate();

  if (variant === 'home') return (
    <div className="bf-empty">
      <SparkIcon size={44} color="#2b2b2b" />
      <div className="bf-empty__title">Nothing here yet</div>
      <div className="bf-empty__sub">Write your first spark.</div>
      <Button variant="primary" onClick={() => navigate('/new')}>
        <span style={{ fontSize: 16, fontWeight: 300 }}>+</span> New Spark
      </Button>
    </div>
  );

  if (variant === 'search') return (
    <div className="bf-empty">
      <SearchIcon size={40} color="#2b2b2b" />
      <div className="bf-empty__title">No results</div>
      <div className="bf-empty__sub">
        Nothing matches {query && <em>"{query}"</em>} — try fewer words.
      </div>
      <button className="bf-empty__clear" onClick={() => navigate('/')}>Clear search</button>
    </div>
  );

  return null;
}
