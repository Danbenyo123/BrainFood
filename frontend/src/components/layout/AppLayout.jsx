import TopNav from '../nav/TopNav.jsx';
import './AppLayout.css';

export default function AppLayout({ children, navVariant = 'default' }) {
  return (
    <div className="bf-app-shell">
      <div className="bf-app-screen">
        <TopNav variant={navVariant} />
        <div className="bf-app-content">
          {children}
        </div>
      </div>
    </div>
  );
}
