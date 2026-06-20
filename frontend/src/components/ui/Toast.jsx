import { SaveIcon, CloseIcon } from '../icons/Icons.jsx';
import './Toast.css';

export default function Toast({ variant = 'saved', children, onDismiss }) {
  return (
    <div className={`bf-toast bf-toast--${variant}`}>
      {variant === 'saved' && <SaveIcon size={14} color="currentColor" />}
      {variant === 'error' && <CloseIcon size={14} color="currentColor" />}
      <span>{children}</span>
      {variant === 'error' && (
        <button className="bf-toast__dismiss" onClick={onDismiss}>
          <CloseIcon size={11} />
        </button>
      )}
    </div>
  );
}
