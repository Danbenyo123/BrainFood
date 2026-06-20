import { useNavigate } from 'react-router';
import { AccountIcon } from '../icons/Icons.jsx';
import SearchBar from './SearchBar.jsx';
import NewMenu from './NewMenu.jsx';
import './TopNav.css';

export default function TopNav({ variant = 'default' }) {
  const navigate = useNavigate();

  return (
    <div className="bf-topnav">
      <button className="bf-topnav__wordmark" onClick={() => navigate('/')}>brainfood</button>

      {variant === 'settings' ? (
        <button className="bf-topnav__back" onClick={() => navigate('/')}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><polyline points="15 18 9 12 15 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Notes
        </button>
      ) : (
        <div className="bf-topnav__actions">
          <SearchBar />
          <AccountIcon color="#a8a39a" />
          <NewMenu />
        </div>
      )}
    </div>
  );
}
