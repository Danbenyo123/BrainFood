import './Tag.css';

export function Tag({ children }) {
  return <span className="bf-tag">{children}</span>;
}

export function AddTagChip({ onClick }) {
  return (
    <button className="bf-tag-add" onClick={onClick} type="button">
      <span style={{ fontSize: 14 }}>+</span> add tag
    </button>
  );
}
