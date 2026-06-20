import { Link } from 'react-router';
import { SmallSparkIcon } from '../icons/Icons.jsx';
import './Breadcrumbs.css';

export default function Breadcrumbs({ note }) {
  return (
    <div className="bf-breadcrumbs">
      <Link to="/" className="bf-breadcrumbs__link">Home</Link>
      <span className="bf-breadcrumbs__sep">›</span>
      <span className="bf-breadcrumbs__current">
        <SmallSparkIcon size={11} color="#6b675f" />
        {note?.title || 'Untitled'}
      </span>
    </div>
  );
}
