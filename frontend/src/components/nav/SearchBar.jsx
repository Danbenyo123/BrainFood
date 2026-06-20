import { useState } from 'react';
import { useNavigate } from 'react-router';
import { SearchIcon, CloseIcon } from '../icons/Icons.jsx';
import './SearchBar.css';

export default function SearchBar() {
  const [active, setActive] = useState(false);
  const [query, setQuery]   = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const clear = () => {
    setQuery('');
    setActive(false);
    navigate('/');
  };

  if (!active) return (
    <button className="bf-searchbar__icon" onClick={() => setActive(true)}>
      <SearchIcon size={19} />
    </button>
  );

  return (
    <div className="bf-searchbar__active">
      <SearchIcon size={14} color="#a8a39a" />
      <input
        autoFocus
        className="bf-searchbar__input"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={submit}
        placeholder="Search…"
      />
      <button className="bf-searchbar__clear" onClick={clear}>
        <CloseIcon size={13} />
      </button>
    </div>
  );
}
