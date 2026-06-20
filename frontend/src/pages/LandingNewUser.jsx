import { Link } from 'react-router';
import './LandingNewUser.css';

export default function LandingNewUser() {
  return (
    <div className="bf-landing">
      <header className="bf-landing__header">
        <div className="bf-landing__wordmark">brainfood</div>
        <nav className="bf-landing__nav">
          <Link to="/login" className="bf-landing__signin">Sign in</Link>
          <Link to="/register" className="bf-landing__cta">Start writing</Link>
        </nav>
      </header>

      <main className="bf-landing__hero">
        <div className="bf-landing__prompt">
          <span className="bf-landing__prompt-text">What do you want to think about?</span>
          <span className="bf-cursor" />
        </div>
      </main>
    </div>
  );
}
