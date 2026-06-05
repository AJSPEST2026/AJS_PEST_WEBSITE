import './Logo.css';

const Logo = ({ size = 'default', showText = true, className = '' }) => {
  const sizeMap = {
    small: { circle: 36, fontSize: 14 },
    default: { circle: 44, fontSize: 16 },
    large: { circle: 64, fontSize: 22 },
  };

  const s = sizeMap[size] || sizeMap.default;

  return (
    <div className={`ajs-logo ${className}`}>
      {/* Circle Logo Mark */}
      <div className="ajs-logo__mark" style={{ width: s.circle, height: s.circle }}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="ajs-logo__svg">
          <defs>
            <linearGradient id="ajsCircleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1976D2" />
              <stop offset="100%" stopColor="#0D47A1" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#ajsCircleGrad)" />
          {/* AJS text */}
          <text
            x="50"
            y="68"
            textAnchor="middle"
            fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
            fontWeight="900"
            fontSize="38"
            fill="white"
            letterSpacing="-1"
          >
            AJS
          </text>
          {/* Green pest/grasshopper accent */}
          <g transform="translate(48, 16) scale(0.35)">
            <ellipse cx="30" cy="25" rx="16" ry="7" transform="rotate(-20 30 25)" fill="#4CAF50" />
            <circle cx="48" cy="14" r="6" fill="#4CAF50" />
            <path d="M 51 9 Q 58 -4, 67 -6" fill="none" stroke="#66BB6A" strokeWidth="3" strokeLinecap="round" />
            <path d="M 53 11 Q 62 1, 72 3" fill="none" stroke="#66BB6A" strokeWidth="3" strokeLinecap="round" />
            <path d="M 18 30 Q 5 48, 13 57" fill="none" stroke="#388E3C" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M 38 27 Q 47 38, 52 48" fill="none" stroke="#388E3C" strokeWidth="3" strokeLinecap="round" />
            <path d="M 23 17 Q 28 6, 40 9" fill="rgba(76,175,80,0.35)" stroke="#4CAF50" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      {/* Text beside the logo */}
      {showText && (
        <div className="ajs-logo__text" style={{ fontSize: s.fontSize }}>
          <span className="ajs-logo__brand">
            AJS <span className="ajs-logo__accent">Pest Control</span> Solutions
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
