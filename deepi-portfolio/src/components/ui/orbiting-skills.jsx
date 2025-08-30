import React, { useEffect, useState, memo } from 'react';

// --- SVG Icon Components ---
const iconComponents = {
  html: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26"/>
      </svg>
    ),
    color: '#E34F26'
  },
  css: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.751L12 19.351l5.379-1.443.744-8.157z" fill="#1572B6"/>
      </svg>
    ),
    color: '#1572B6'
  },
  javascript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E"/>
        <path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#323330"/>
      </svg>
    ),
    color: '#F7DF1E'
  },
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/>
        </g>
      </svg>
    ),
    color: '#61DAFB'
  },
  node: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.048-.139.144-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.352 18.675C.533 18.215 0 17.352 0 16.43V6.284c0-.922.533-1.786 1.352-2.245L10.147-.963c.8-.452 1.866-.452 2.657 0l8.796 5.002c.819.459 1.352 1.323 1.352 2.245v10.146c0 .922-.533 1.783-1.352 2.245l-8.796 5.078c-.28.163-.601.247-.926.247zm2.717-6.993c-3.849 0-4.654-1.766-4.654-3.246 0-.14.114-.253.256-.253h1.136c.127 0 .232.091.252.215.173 1.164.686 1.752 3.01 1.752 1.852 0 2.639-.419 2.639-1.401 0-.566-.224-1.03-3.099-1.249-2.404-.184-3.89-.768-3.89-2.689 0-1.771 1.491-2.825 3.991-2.825 2.808 0 4.199.975 4.377 3.068.007.072-.019.141-.065.193-.047.049-.111.077-.178.077h-1.14c-.119 0-.225-.083-.248-.196-.276-1.224-.944-1.616-2.746-1.616-2.023 0-2.259.705-2.259 1.234 0 .641.278.827 3.006 1.19 2.7.359 3.982.866 3.982 2.771 0 1.922-1.603 3.024-4.399 3.024z" fill="#339933"/>
      </svg>
    ),
    color: '#339933'
  },
  csharp: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM9.426 7.12a5.55 5.55 0 011.985.38v1.181a4.5 4.5 0 00-2.025-.494 2.9 2.9 0 00-2.962 3.027 2.9 2.9 0 002.962 3.027 4.5 4.5 0 002.025-.494v1.181a5.55 5.55 0 01-1.985.38 4.1 4.1 0 01-4.204-4.094A4.1 4.1 0 019.426 7.12zm8.748 2.645h-.83v-.798h-.855v.798h-.828v.855h.828v.798h.855v-.798h.83zm2.264 0h-.83v-.798h-.855v.798h-.828v.855h.828v.798h.855v-.798h.83z" fill="#512BD4"/>
      </svg>
    ),
    color: '#512BD4'
  },
  dotnet: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M3.1 6.9c-.1 0-.2.1-.2.2v9.8c0 .1.1.2.2.2h17.8c.1 0 .2-.1.2-.2V7.1c0-.1-.1-.2-.2-.2H3.1zm14.7 7.2h-1.4v-4.5h1.4v4.5zm-2.8 0H13.6v-4.5H15v4.5zm-2.8 0h-1.4v-4.5h1.4v4.5zm-2.8 0H7.2v-4.5h1.4v4.5zm-2.8 0H4.4v-4.5h1.4v4.5z" fill="#512BD4"/>
      </svg>
    ),
    color: '#512BD4'
  },
  blazor: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M0 16L8 0l2.5 6.5L16 8L8 24l-2.5-6.5L0 16z" fill="#512BD4"/>
      </svg>
    ),
    color: '#512BD4'
  }
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration for the Orbiting Skills ---
const skillsConfig = [
  // Inner Orbit
  { 
    id: 'html',
    orbitRadius: 90, 
    size: 44, 
    speed: 0.8, 
    iconType: 'html', 
    phaseShift: 0, 
    glowColor: 'cyan',
    label: 'HTML5'
  },
  { 
    id: 'css',
    orbitRadius: 90, 
    size: 44, 
    speed: 0.8, 
    iconType: 'css', 
    phaseShift: (2 * Math.PI) / 3, 
    glowColor: 'cyan',
    label: 'CSS3'
  },
  { 
    id: 'javascript',
    orbitRadius: 90, 
    size: 44, 
    speed: 0.8, 
    iconType: 'javascript', 
    phaseShift: (4 * Math.PI) / 3, 
    glowColor: 'cyan',
    label: 'JavaScript'
  },
  // Outer Orbit
  { 
    id: 'react',
    orbitRadius: 160, 
    size: 52, 
    speed: -0.5, 
    iconType: 'react', 
    phaseShift: 0, 
    glowColor: 'purple',
    label: 'React'
  },
  { 
    id: 'csharp',
    orbitRadius: 160, 
    size: 52, 
    speed: -0.5, 
    iconType: 'csharp', 
    phaseShift: (2 * Math.PI) / 3, 
    glowColor: 'purple',
    label: 'C#'
  },
  { 
    id: 'dotnet',
    orbitRadius: 160, 
    size: 52, 
    speed: -0.5, 
    iconType: 'dotnet', 
    phaseShift: (4 * Math.PI) / 3, 
    glowColor: 'purple',
    label: '.NET'
  },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-500 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 30 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-3 bg-gray-900/95 backdrop-blur-md
          rounded-full flex items-center justify-center border border-gray-700/50
          transition-all duration-500 cursor-pointer group
          ${isHovered ? 'scale-125 shadow-2xl border-opacity-100' : 'shadow-xl hover:shadow-2xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 40px ${iconComponents[iconType]?.color}60, 0 0 80px ${iconComponents[iconType]?.color}30, 0 20px 40px rgba(0,0,0,0.3)`
            : `0 10px 30px rgba(0,0,0,0.2)`,
        }}
      >
        <SkillIcon type={iconType} />
        
        {/* Enhanced hover label */}
        {isHovered && (
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gray-800/95 backdrop-blur-sm rounded-lg text-sm text-white whitespace-nowrap pointer-events-none border border-gray-600/50 shadow-xl">
            <div className="text-center font-medium">{label}</div>
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-l border-t border-gray-600/50"
              style={{ backgroundColor: 'rgb(31 41 55 / 0.95)' }}
            />
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }) => {
  const glowColors = {
    cyan: {
      primary: 'rgba(6, 182, 212, 0.4)',
      secondary: 'rgba(6, 182, 212, 0.2)',
      border: 'rgba(6, 182, 212, 0.3)'
    },
    purple: {
      primary: 'rgba(147, 51, 234, 0.4)',
      secondary: 'rgba(147, 51, 234, 0.2)',
      border: 'rgba(147, 51, 234, 0.3)'
    }
  };

  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 20px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs = [
    { radius: 90, glowColor: 'cyan', delay: 0 },
    { radius: 160, glowColor: 'purple', delay: 1.5 }
  ];

  return (
    <div className="w-full flex items-center justify-center py-20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)
            `,
          }}
        />
      </div>

      {/* Main orbiting container */}
      <div 
        className="relative flex items-center justify-center"
        style={{
          width: 'min(90vw, 500px)',
          height: 'min(90vw, 500px)',
          minWidth: '400px',
          minHeight: '400px'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Enhanced Central Hub */}
        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-full flex items-center justify-center z-20 relative shadow-2xl border-2 border-gray-600/30">
          {/* Multiple animated glow layers */}
          <div className="absolute inset-0 rounded-full bg-cyan-500/40 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="33%" stopColor="#3B82F6" />
                  <stop offset="66%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          
          {/* Rotating ring around center */}
          <div className="absolute inset-0 rounded-full border border-gray-500/20 animate-spin" style={{ animationDuration: '10s' }}>
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill
              key={config.id}
              config={config}
              angle={angle}
            />
          );
        })}

        {/* Enhanced floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-60 animate-pulse"
              style={{
                top: `${10 + (i * 6)}%`,
                left: `${5 + (i * 7)}%`,
                backgroundColor: i % 3 === 0 ? '#06B6D4' : i % 3 === 1 ? '#9333EA' : '#3B82F6',
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + (i * 0.2)}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
