import { useState } from 'react';
import { useNavigate } from 'react-router';
import { SparkIcon, ClusterIcon } from '../icons/Icons.jsx';
import './NewMenu.css';

export default function NewMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSpark = () => {
    setOpen(false);
    navigate('/new');
  };

  const handleCluster = () => {
    setOpen(false);
    // TODO: prompt for cluster name + persist when backend supports clusters
    alert('Clusters coming soon!');
  };

  return (
    <div className="bf-newmenu">
      <button className="bf-newmenu__trigger" onClick={e => { e.stopPropagation(); setOpen(o => !o); }}>
        <span style={{ fontSize: 17, fontWeight: 300 }}>+</span> New
      </button>

      {open && (
        <>
          <div className="bf-newmenu__overlay" onClick={() => setOpen(false)} />
          <div className="bf-newmenu__dropdown">
            <button className="bf-newmenu__item" onClick={handleSpark}>
              <SparkIcon size={22} />
              <div>
                <div className="bf-newmenu__item-title">Spark</div>
                <div className="bf-newmenu__item-sub">a note — just write</div>
              </div>
            </button>
            <button className="bf-newmenu__item" onClick={handleCluster}>
              <ClusterIcon size={22} />
              <div>
                <div className="bf-newmenu__item-title">Cluster</div>
                <div className="bf-newmenu__item-sub">a space to grow ideas</div>
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
