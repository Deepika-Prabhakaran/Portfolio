import React from 'react';

const MeshGradient = ({ 
  colors = ["#000000", "#1a1a1a", "#333333", "#ffffff"],
  speed = 1.0,
  className = ""
}) => {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      {/* Base black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated gradient blobs */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, ${colors[1]} 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, ${colors[2]} 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, ${colors[1]} 0%, transparent 40%),
            radial-gradient(circle at 90% 20%, ${colors[2]} 0%, transparent 45%)
          `,
          animation: `meshMove ${30 / speed}s ease-in-out infinite alternate`
        }}
      />
      
      {/* Moving dots pattern */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <style jsx>{`
        @keyframes meshMove {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-20px, 20px) scale(1.1);
          }
          100% {
            transform: translate(20px, -10px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};

export default MeshGradient;
