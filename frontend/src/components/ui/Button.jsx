import './Button.css';

export default function Button({ variant = 'primary', children, onClick, type = 'button', disabled }) {
  return (
    <button
      type={type}
      className={`bf-btn bf-btn--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
