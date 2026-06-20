import { useState } from 'react';
import { ClusterIcon, TagIcon } from '../icons/Icons.jsx';
import { Tag, AddTagChip } from '../ui/Tag.jsx';
import './CollapsiblePanel.css';

export default function CollapsiblePanel() {
  const [open, setOpen] = useState(true);
  // TODO: wire cluster + tags to real state/API
  const [tags] = useState(['animals', 'language']);

  return (
    <div className={`bf-panel${open ? ' bf-panel--open' : ' bf-panel--collapsed'}`}>
      <button className="bf-panel__toggle" onClick={() => setOpen(o => !o)}>
        {open ? '›' : '‹'}
      </button>

      <div className="bf-panel__content" style={{ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}>
        <div className="bf-panel__section">
          <div className="bf-panel__label">Cluster</div>
          <button className="bf-panel__cluster-btn">
            <ClusterIcon size={20} color="#6b675f" />
            <span>Add to a cluster…</span>
          </button>
        </div>

        <div className="bf-panel__section">
          <div className="bf-panel__label">Tags</div>
          <div className="bf-panel__tags">
            {tags.map(t => <Tag key={t}>{t}</Tag>)}
            <AddTagChip />
          </div>
        </div>
      </div>

      <div className="bf-panel__hints" style={{ opacity: open ? 0 : 1 }}>
        <ClusterIcon size={20} color="#c4c0b7" />
        <TagIcon size={16} color="#c4c0b7" />
      </div>
    </div>
  );
}
