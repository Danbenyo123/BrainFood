import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '../icons/Icons.jsx';
import './TextField.css';

export default function TextField({ label, type = 'text', placeholder, value, onChange, error, hint }) {
  const [showPw, setShowPw] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPw ? 'text' : 'password') : type;

  return (
    <div className="bf-field">
      {label && <label className="bf-field__label">{label}</label>}
      <div className="bf-field__input-wrap">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`bf-field__input${error ? ' bf-field__input--error' : ''}`}
          style={isPassword ? { paddingRight: 44 } : undefined}
        />
        {isPassword && (
          <button type="button" className="bf-field__eye" onClick={() => setShowPw(v => !v)}>
            {showPw ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>
      {error && (
        <div className="bf-field__error">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/><line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>
          {error}
        </div>
      )}
      {hint && !error && <div className="bf-field__hint">{hint}</div>}
    </div>
  );
}
