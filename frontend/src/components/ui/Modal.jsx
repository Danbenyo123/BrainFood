import Button from './Button.jsx';
import './Modal.css';

export default function Modal({ title, body, onCancel, onConfirm, confirmLabel = 'Delete', open }) {
  if (!open) return null;
  return (
    <div className="bf-modal-backdrop" onClick={onCancel}>
      <div className="bf-modal" onClick={e => e.stopPropagation()}>
        <div className="bf-modal__title">{title}</div>
        {body && <div className="bf-modal__body">{body}</div>}
        <div className="bf-modal__actions">
          <Button variant="secondary" onClick={onCancel}>Cancel</Button>
          <Button variant="ember" onClick={onConfirm}>{confirmLabel}</Button>
        </div>
      </div>
    </div>
  );
}
