export function SparkIcon({ size = 22, color = '#c2502a' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 21 C 8 21 5.5 18.3 5.5 14.5 C 5.5 10.5 9 9 8.3 4.5 C 11 6.2 12.2 8.5 12.2 8.5 C 12.2 8.5 13.2 5.5 15.2 4 C 14.2 9.2 18.5 10.5 18.5 14.5 C 18.5 18.3 16 21 12 21 Z" stroke={color} strokeWidth="1.4" />
    </svg>
  );
}

export function ClusterIcon({ size = 22, color = '#2b2b2b' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.7" fill={color} />
      <line x1="12" y1="12" x2="5"  y2="6"  stroke={color} strokeWidth="1.3" />
      <line x1="12" y1="12" x2="20" y2="7"  stroke={color} strokeWidth="1.3" />
      <line x1="12" y1="12" x2="6"  y2="19" stroke={color} strokeWidth="1.3" />
      <line x1="12" y1="12" x2="19" y2="18" stroke={color} strokeWidth="1.3" />
      <circle cx="5"  cy="6"  r="1.5" fill={color} />
      <circle cx="20" cy="7"  r="1.5" fill={color} />
      <circle cx="6"  cy="19" r="1.5" fill={color} />
      <circle cx="19" cy="18" r="1.5" fill={color} />
    </svg>
  );
}

export function SearchIcon({ size = 19, color = '#a8a39a' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.6" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function SaveIcon({ size = 15, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 12.5 L10 17.5 L19 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TagIcon({ size = 16, color = '#a8a39a' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 12 L11 4 H20 V13 L12 21 Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="16" cy="8" r="1.4" fill={color} />
    </svg>
  );
}

export function AccountIcon({ size = 17, color = '#a8a39a' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.6" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function DeleteIcon({ size = 13, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <polyline points="3 6 5 6 21 6" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 6V4h8v2" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 6l-1 14H6L5 6" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRightIcon({ size = 18, color = '#6b675f' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <polyline points="9 18 15 12 9 6" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronLeftIcon({ size = 18, color = '#6b675f' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <polyline points="15 18 9 12 15 6" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ size = 13, color = '#a8a39a' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <line x1="18" y1="6"  x2="6"  y2="18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="6"  y1="6"  x2="18" y2="18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function EyeIcon({ size = 17, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}

export function EyeOffIcon({ size = 17, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="1" y1="1" x2="23" y2="23" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function InfoIcon({ size = 13, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6" />
      <line x1="12" y1="8" x2="12" y2="12" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1" fill={color} />
    </svg>
  );
}

export function PlusIcon({ size = 17, color = '#2b2b2b' }) {
  return (
    <span style={{ fontSize: size, fontWeight: 300, color, lineHeight: 1 }}>+</span>
  );
}

export function SmallSparkIcon({ size = 11, color = '#6b675f' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 20 C 8.5 20 6 17.5 6 14 C 6 10.5 9 9 8.5 5 C 10.8 6.5 11.8 8.5 11.8 8.5 C 11.8 8.5 12.8 5.5 14.8 4.5 C 13.8 9 17.5 10.5 17.5 14 C 17.5 17.5 15.5 20 12 20 Z" stroke={color} strokeWidth="1.3" />
    </svg>
  );
}

export function SmallClusterIcon({ size = 11, color = '#a8a39a' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.3" fill={color} />
      <line x1="12" y1="12" x2="5"  y2="6"  stroke={color} strokeWidth="1.3" />
      <line x1="12" y1="12" x2="20" y2="7"  stroke={color} strokeWidth="1.3" />
      <line x1="12" y1="12" x2="6"  y2="19" stroke={color} strokeWidth="1.3" />
      <line x1="12" y1="12" x2="19" y2="18" stroke={color} strokeWidth="1.3" />
      <circle cx="5"  cy="6"  r="1.3" fill={color} />
      <circle cx="20" cy="7"  r="1.3" fill={color} />
      <circle cx="6"  cy="19" r="1.3" fill={color} />
      <circle cx="19" cy="18" r="1.3" fill={color} />
    </svg>
  );
}
