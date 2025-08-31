import React, { useEffect, useRef } from 'react';

const AnimatedPaperBackground = ({ className = "" }) => {
  const canvasRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation function
    const animate = () => {
      timeRef.current += 0.02;
      const time = timeRef.current;

      // Clear canvas with black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create animated noise pattern
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let x = 0; x < canvas.width; x += 2) {
        for (let y = 0; y < canvas.height; y += 2) {
          const uv = {
            x: x / canvas.width,
            y: y / canvas.height
          };

          // Simulate the shader noise pattern
          let noise = Math.sin(uv.x * 20.0 + time) * Math.cos(uv.y * 15.0 + time * 0.8);
          noise += Math.sin(uv.x * 35.0 - time * 2.0) * Math.cos(uv.y * 25.0 + time * 1.2) * 0.5;

          // Mix colors based on noise
          const intensity = 1.0 + Math.sin(time * 2) * 0.3;
          const color1 = { r: 255, g: 87, b: 34 }; // #ff5722
          const color2 = { r: 255, g: 255, b: 255 }; // #ffffff

          const mixFactor = noise * 0.5 + 0.5;
          let r = color1.r + (color2.r - color1.r) * mixFactor;
          let g = color1.g + (color2.g - color1.g) * mixFactor;
          let b = color1.b + (color2.b - color1.b) * mixFactor;

          // Add intensity effect
          const intensityEffect = Math.pow(Math.abs(noise), 2.0) * intensity;
          r = r + (255 - r) * intensityEffect;
          g = g + (255 - g) * intensityEffect;
          b = b + (255 - b) * intensityEffect;

          // Add glow effect
          const centerX = uv.x - 0.5;
          const centerY = uv.y - 0.5;
          const distance = Math.sqrt(centerX * centerX + centerY * centerY);
          let glow = 1.0 - distance * 2.0;
          glow = Math.max(0, Math.pow(glow, 2.0));

          const alpha = glow * 0.8;

          // Apply to canvas
          const index = (y * canvas.width + x) * 4;
          if (index < data.length) {
            data[index] = r * glow;     // Red
            data[index + 1] = g * glow; // Green
            data[index + 2] = b * glow; // Blue
            data[index + 3] = alpha * 255; // Alpha
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`fixed inset-0 w-full h-full ${className}`}>
      {/* CSS-based animated background as fallback/enhancement */}
      <div className="absolute inset-0 bg-black">
        {/* Animated gradient layers */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, #ff5722 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, #ffffff 0%, transparent 40%),
              radial-gradient(circle at 40% 80%, #ff5722 0%, transparent 45%),
              radial-gradient(circle at 90% 20%, #ffffff 0%, transparent 35%)
            `,
            animation: 'paperShaderMove 20s ease-in-out infinite alternate'
          }}
        />
        
        {/* Secondary animated layer */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 60% 40%, #ff5722 0%, transparent 60%),
              radial-gradient(circle at 30% 90%, #ffffff 0%, transparent 50%)
            `,
            animation: 'paperShaderMove2 15s ease-in-out infinite alternate-reverse'
          }}
        />

        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(255, 87, 34, 0.03) 2px,
                rgba(255, 87, 34, 0.03) 4px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(255, 255, 255, 0.02) 2px,
                rgba(255, 255, 255, 0.02) 4px
              )
            `,
            animation: 'noiseShift 10s linear infinite'
          }}
        />
      </div>

      {/* Canvas overlay for more complex effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen"
        style={{ pointerEvents: 'none' }}
      />

      <style jsx>{`
        @keyframes paperShaderMove {
          0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            filter: hue-rotate(0deg);
          }
          25% {
            transform: translate(-10px, 20px) scale(1.1) rotate(1deg);
            filter: hue-rotate(15deg);
          }
          50% {
            transform: translate(15px, -10px) scale(0.95) rotate(-1deg);
            filter: hue-rotate(30deg);
          }
          75% {
            transform: translate(-5px, -15px) scale(1.05) rotate(0.5deg);
            filter: hue-rotate(15deg);
          }
          100% {
            transform: translate(10px, 5px) scale(1) rotate(-0.5deg);
            filter: hue-rotate(0deg);
          }
        }
        
        @keyframes paperShaderMove2 {
          0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(20px, -15px) scale(1.15) rotate(-1deg);
          }
          66% {
            transform: translate(-15px, 25px) scale(0.9) rotate(1deg);
          }
          100% {
            transform: translate(5px, -5px) scale(1.05) rotate(0deg);
          }
        }
        
        @keyframes noiseShift {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-2px, 2px);
          }
          50% {
            transform: translate(2px, -1px);
          }
          75% {
            transform: translate(-1px, -2px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedPaperBackground;
