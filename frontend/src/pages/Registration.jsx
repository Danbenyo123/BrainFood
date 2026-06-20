import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext.jsx';
import TextField from '../components/ui/TextField.jsx';
import Button from '../components/ui/Button.jsx';
import './AuthForm.css';

export default function Registration() {
  const [email, setEmail] = useState('');
  const [pw, setPw]       = useState('');
  const { login }         = useAuth();
  const navigate          = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // TODO: real auth
    login();
    navigate('/');
  };

  return (
    <div className="bf-auth">
      <div className="bf-auth__header">
        <Link to="/welcome" className="bf-auth__wordmark">brainfood</Link>
      </div>

      <div className="bf-auth__body">
        <form className="bf-auth__form" onSubmit={submit}>
          <h1 className="bf-auth__title bf-auth__title--italic">
            What do you want<br />to think about?<span className="bf-cursor" />
          </h1>
          <p className="bf-auth__sub">Start with an email. The rest is yours.</p>

          <div className="bf-auth__fields">
            <TextField label="Email" type="email" placeholder="you@example.com"
              value={email} onChange={e => setEmail(e.target.value)} />
            <TextField label="Password" type="password" placeholder="········"
              value={pw} onChange={e => setPw(e.target.value)}
              hint="At least 8 characters." />
          </div>

          <Button type="submit" variant="primary" style={{ width: '100%', justifyContent: 'center', padding: '13px 20px', fontSize: 15 }}>
            Start writing
          </Button>

          <p className="bf-auth__terms">
            By continuing you agree to the{' '}
            <Link to="#" className="bf-auth__link-muted">Terms</Link> and{' '}
            <Link to="#" className="bf-auth__link-muted">Privacy policy</Link>.
          </p>

          <div className="bf-auth__divider"><span>or</span></div>

          <p className="bf-auth__switch">
            Already writing?{' '}
            <Link to="/login" className="bf-auth__link-strong">Sign in →</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
