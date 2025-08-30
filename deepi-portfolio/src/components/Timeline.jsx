"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Calculate avatar position based on scroll progress
  const avatarY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height - 80]
  );

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          My journey through various roles and experiences that shaped my career
        </p>
      </div>

      <div ref={ref} className="relative pb-20 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-center mb-20 ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Content Card */}
            <div 
              className={`w-full max-w-md relative ${
                index % 2 === 0 ? 'mr-8 md:mr-16' : 'ml-8 md:ml-16'
              }`}
            >
              <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">
                {/* Date Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full mb-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wide">
                    {item.date}
                  </span>
                </div>

                {/* Title and Job */}
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <h4 className="text-lg text-cyan-400 font-semibold mb-3">
                    {item.job}
                  </h4>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  {item.contents.map((content, contentIndex) => (
                    <p key={contentIndex} className="text-gray-300 leading-relaxed text-sm">
                      {content}
                    </p>
                  ))}
                </div>

                {/* Arrow pointing to center */}
                <div 
                  className={`absolute top-8 ${
                    index % 2 === 0 ? '-right-4' : '-left-4'
                  } w-0 h-0 border-l-[16px] border-r-[16px] border-t-[16px] ${
                    index % 2 === 0 
                      ? 'border-l-transparent border-r-gray-800/90 border-t-transparent rotate-90' 
                      : 'border-l-gray-800/90 border-r-transparent border-t-transparent -rotate-90'
                  }`}
                />
              </div>
            </div>
          </motion.div>
        ))}

        {/* Central Timeline Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[3px] bg-gradient-to-b from-transparent via-gray-600 to-transparent rounded-full"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-full"
          />
        </div>

        {/* Animated Avatar */}
        <motion.div
          style={{ y: avatarY }}
          className="absolute left-1/2 top-0 transform -translate-x-1/2 z-20"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full blur-xl scale-150 animate-pulse"></div>
            
            {/* Avatar container */}
            <div className="relative w-16 h-16 ">
              <img
                src="https://png.pngtree.com/png-vector/20250613/ourmid/pngtree-female-avatar-png-image_16533727.png"
                alt="Professional Avatar"
                className="w-full h-full object-cover"
              />
              
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-full"></div>
            </div>

            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border border-blue-400/30 animate-ping animation-delay-75"></div>
          </div>
        </motion.div>

        {/* Timeline Dots */}
        {data.map((_, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-700 border-2 border-gray-500 rounded-full z-10"
            style={{
              top: `${(index / (data.length - 1)) * (height - 80) + 40}px`,
            }}
            whileInView={{
              backgroundColor: "#06b6d4",
              borderColor: "#0891b2",
              scale: 1.2,
            }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, margin: "-100px" }}
          />
        ))}
      </div>

      <style jsx>{`
        .animation-delay-75 {
          animation-delay: 75ms;
        }
      `}</style>
    </div>
  );
};
