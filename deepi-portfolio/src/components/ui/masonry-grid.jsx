import { useState } from 'react';
import { motion } from 'framer-motion';

export default function MasonryGrid({ images = [], title = "Gallery" }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full px-4 py-12 md:px-6">
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
        </div>
      )}
      
      <div className="columns-1 gap-4 space-y-4 transition-all sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
        {images.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-in-out break-inside-avoid mb-4"
          >
            <motion.img
              src={item.src || item}
              alt={item.alt || `Achievement ${index + 1}`}
              className={`w-full rounded-lg object-cover transition-all duration-300 ease-in-out ${
                hovered === null
                  ? 'blur-0 scale-100'
                  : hovered === index
                    ? 'blur-0 scale-105'
                    : 'blur-[1px]'
              }`}
              whileHover={{ scale: 1.05 }}
              loading="lazy"
            />
            
            {/* Overlay with achievement info */}
            {item.title && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm opacity-90">{item.description}</p>
                  )}
                  {item.date && (
                    <span className="text-xs opacity-75 block mt-2">{item.date}</span>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
