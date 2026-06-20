import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext.jsx';
import AppLayout from '../components/layout/AppLayout.jsx';
import LeftNav from '../components/nav/LeftNav.jsx';
import Button from '../components/ui/Button.jsx';
import { DeleteIcon } from '../components/icons/Icons.jsx';
import './Settings.css';

export default function Settings() {
  const [section, setSection] = useState('Account');
  const { logout }            = useAuth();
  const navigate              = useNavigate();

  const handleSignOut = () => { logout(); navigate('/welcome'); };

  return (
    <AppLayout navVariant="settings">
      <div className="bf-settings__heading">Account</div>

      <div className="bf-settings__body">
        <LeftNav active={section} onChange={setSection} />

        <div className="bf-settings__content">
          {section === 'Account' && (
            <>
              <div className="bf-settings__eyebrow">Your account</div>

              <div className="bf-settings__row">
                <div>
                  <div className="bf-settings__row-label">Email</div>
                  <div className="bf-settings__row-value">jsmith@example.com</div>
                </div>
                <button className="bf-settings__change">Change</button>
              </div>

              <div className="bf-settings__row">
                <div>
                  <div className="bf-settings__row-label">Password</div>
                  <div className="bf-settings__row-value bf-settings__row-value--dots">········</div>
                </div>
                <button className="bf-settings__change">Change</button>
              </div>

              <div className="bf-settings__signout">
                <Button variant="secondary" onClick={handleSignOut}>Sign out</Button>
              </div>

              <div className="bf-settings__eyebrow">Danger zone</div>

              <div className="bf-settings__row bf-settings__row--danger">
                <div>
                  <div className="bf-settings__row-value">Delete account</div>
                  <div className="bf-settings__row-sub">Permanently remove your account and all notes.</div>
                </div>
                <button className="bf-settings__delete">
                  <DeleteIcon size={13} color="currentColor" /> Delete
                </button>
              </div>
            </>
          )}

          {section !== 'Account' && (
            <div className="bf-settings__todo">
              {section} settings coming soon.
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
