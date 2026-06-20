import './LeftNav.css';

const ITEMS = ['Account', 'Notifications', 'Appearance'];

export default function LeftNav({ active = 'Account', onChange }) {
  return (
    <div className="bf-leftnav">
      {ITEMS.map(item => (
        <button
          key={item}
          className={`bf-leftnav__item${active === item ? ' bf-leftnav__item--active' : ''}`}
          onClick={() => onChange?.(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
