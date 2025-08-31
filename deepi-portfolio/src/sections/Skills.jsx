import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef(null);
  const flowerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (flowerRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        const rotation = scrollProgress * 360;
        const scale = 0.7 + (scrollProgress * 0.6);
        const opacity = Math.max(0.2, Math.min(0.65, scrollProgress * 1.5));
        
        flowerRef.current.style.transform = `rotate(${rotation}deg) scale(${scale})`;
        flowerRef.current.style.opacity = opacity;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techStackItems = [
    { name: "ReactJS", icon: "⚛️", color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20" },
    { name: "NextJS", icon: "▲", color: "bg-gray-500/10 border-gray-500/20 text-white hover:bg-gray-500/20" },
    { name: "TypeScript", icon: "TS", color: "bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20" },
    { name: "Tailwind CSS", icon: "🌊", color: "bg-teal-500/10 border-teal-500/20 text-teal-400 hover:bg-teal-500/20" },
    { name: "Motion", icon: "🎭", color: "bg-purple-500/10 border-purple-500/20 text-purple-400 hover:bg-purple-500/20" },
    { name: "Sanity", icon: "S", color: "bg-red-500/10 border-red-500/20 text-red-400 hover:bg-red-500/20" },
    { name: "Contentful", icon: "🏢", color: "bg-orange-500/10 border-orange-500/20 text-orange-400 hover:bg-orange-500/20" },
    { name: "NodeJS", icon: "🟢", color: "bg-green-500/10 border-green-500/20 text-green-400 hover:bg-green-500/20" },
    { name: "ExpressJS", icon: "⚡", color: "bg-gray-600/10 border-gray-600/20 text-gray-400 hover:bg-gray-600/20" },
    { name: "PostgreSQL", icon: "🐘", color: "bg-blue-600/10 border-blue-600/20 text-blue-300 hover:bg-blue-600/20" },
    { name: "MongoDB", icon: "🍃", color: "bg-green-600/10 border-green-600/20 text-green-300 hover:bg-green-600/20" },
    { name: "Prisma", icon: "🔺", color: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400 hover:bg-indigo-500/20" },
    { name: "Zustand", icon: "🐻", color: "bg-purple-600/10 border-purple-600/20 text-purple-300 hover:bg-purple-600/20" },
    { name: "Zod", icon: "Z", color: "bg-blue-800/10 border-blue-800/20 text-blue-200 hover:bg-blue-800/20" },
    { name: "pnpm", icon: "📦", color: "bg-orange-600/10 border-orange-600/20 text-orange-300 hover:bg-orange-600/20" },
    { name: "Bun", icon: "🥯", color: "bg-yellow-600/10 border-yellow-600/20 text-yellow-300 hover:bg-yellow-600/20" },
    { name: "Git", icon: "🌳", color: "bg-red-600/10 border-red-600/20 text-red-300 hover:bg-red-600/20" },
    { name: "GitHub", icon: "🐱", color: "bg-gray-700/10 border-gray-700/20 text-gray-300 hover:bg-gray-700/20" },
    { name: "Vercel", icon: "▲", color: "bg-black/10 border-gray-600/20 text-gray-200 hover:bg-black/20" },
    { name: "AWS", icon: "☁️", color: "bg-orange-700/10 border-orange-700/20 text-orange-200 hover:bg-orange-700/20" },
    { name: "Docker", icon: "🐳", color: "bg-blue-400/10 border-blue-400/20 text-blue-200 hover:bg-blue-400/20" },
    { name: "Expo", icon: "🚀", color: "bg-indigo-600/10 border-indigo-600/20 text-indigo-200 hover:bg-indigo-600/20" },
    { name: "Clerk", icon: "🔐", color: "bg-purple-700/10 border-purple-700/20 text-purple-200 hover:bg-purple-700/20" },
    { name: "Linux", icon: "🐧", color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-200 hover:bg-yellow-500/20" }
  ];

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden bg-black" id="skills">
      {/* Subtle animated background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black to-gray-900/20"></div>
        
        {/* Subtle floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-600/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full min-h-screen flex flex-col justify-center py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header with Steel Flower Image */}
          <div className="text-center mb-16 relative">
            {/* Steel Flower Background Image */}
            <div className="absolute inset-0 flex items-center justify-center -top-32 pointer-events-none">
              <img 
                ref={flowerRef}
                src="/steel-flower.webp" 
                alt="skills cover rotating image" 
                className="steel-flower-image select-none"
                style={{
                  width: '500px',
                  height: '500px',
                  opacity: 0.65,
                  transition: 'all 0.1s ease-out',
                  filter: 'brightness(0.8) contrast(1.2) drop-shadow(0 0 30px rgba(255, 255, 255, 0.1))',
                  transformOrigin: 'center'
                }}
                onError={(e) => {
                  console.log('Steel flower image failed to load');
                  e.target.style.display = 'none';
                }}
              />
            </div>
            
            <div className="relative z-30">
              <p className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-6 font-medium">MY SKILLS</p>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-16">
                <span className="text-white">The Secret </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent italic font-light">
                  Sauce
                </span>
              </h2>
            </div>
          </div>

          {/* Tech Stack Grid - Matching Reference Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 max-w-5xl mx-auto">
            {techStackItems.map((tech, index) => (
              <div
                key={tech.name}
                className={`
                  group relative px-4 py-3 rounded-xl border backdrop-blur-sm
                  transition-all duration-300 hover:scale-105 hover:shadow-xl
                  cursor-pointer ${tech.color}
                  bg-gray-900/30 border-gray-700/30
                  animate-fade-in transform hover:-translate-y-1
                `}
                style={{
                  animation: `fade-in 0.6s ease-out ${index * 0.05}s both`
                }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg opacity-80">{tech.icon}</span>
                  <span className="text-xs font-medium whitespace-nowrap opacity-90">{tech.name}</span>
                </div>
                
                {/* Subtle hover glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Corner highlights */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-gradient-to-br from-white/20 to-transparent rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-gradient-to-tl from-white/10 to-transparent rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 768px) {
          .steel-flower-image {
            width: 350px !important;
            height: 350px !important;
          }
        }

        @media (max-width: 480px) {
          .steel-flower-image {
            width: 280px !important;
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
       