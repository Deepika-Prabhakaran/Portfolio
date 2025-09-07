import React from 'react';
import MasonryGrid from '../components/ui/masonry-grid';

const AchievementsShowcase = () => {
  const achievements = [
    {
      src: 'https://picsum.photos/800/600?random=1',
      title: 'Full Stack Developer Certification',
      description: 'Completed comprehensive full-stack development program with React, Node.js, and MongoDB',
      date: '2023',
      alt: 'Full Stack Certificate'
    },
    {
      src: 'https://picsum.photos/640/480?random=2',
      title: 'Best Innovation Award',
      description: 'Recognized for developing innovative web solutions that improved user experience by 40%',
      date: '2023',
      alt: 'Innovation Award'
    },
    {
      src: 'https://picsum.photos/1280/720?random=3',
      title: 'Open Source Contributor',
      description: 'Active contributor to multiple React and JavaScript open source projects',
      date: '2022-2024',
      alt: 'Open Source Contributions'
    },
    {
      src: 'https://picsum.photos/960/540?random=4',
      title: 'Tech Conference Speaker',
      description: 'Delivered presentation on Modern Web Development at TechCon 2023',
      date: '2023',
      alt: 'Conference Speaker'
    },
    {
      src: 'https://picsum.photos/900/300?random=5',
      title: 'Hackathon Winner',
      description: 'First place in 48-hour hackathon for creating an AI-powered web application',
      date: '2023',
      alt: 'Hackathon Victory'
    },
    {
      src: 'https://picsum.photos/1200/600?random=6',
      title: 'JavaScript Expert Certification',
      description: 'Advanced certification in JavaScript ES6+ and modern frameworks',
      date: '2022',
      alt: 'JavaScript Certification'
    },
    {
      src: 'https://picsum.photos/400/600?random=7',
      title: 'UI/UX Design Recognition',
      description: 'Awarded for exceptional user interface design in web applications',
      date: '2023',
      alt: 'UI/UX Award'
    },
    {
      src: 'https://picsum.photos/300/450?random=8',
      title: 'Team Leadership Award',
      description: 'Recognized for leading successful development team of 8 developers',
      date: '2024',
      alt: 'Leadership Award'
    },
    {
      src: 'https://picsum.photos/600/800?random=9',
      title: 'Cloud Architecture Certification',
      description: 'AWS Solutions Architect certification for designing scalable applications',
      date: '2023',
      alt: 'AWS Certification'
    },
    {
      src: 'https://picsum.photos/450/600?random=10',
      title: 'Performance Optimization Expert',
      description: 'Specialized certification in web performance and optimization techniques',
      date: '2023',
      alt: 'Performance Optimization'
    },
    {
      src: 'https://picsum.photos/600/600?random=11',
      title: 'Mentorship Excellence',
      description: 'Recognized for mentoring 20+ junior developers in their career growth',
      date: '2022-2024',
      alt: 'Mentorship Award'
    },
    {
      src: 'https://picsum.photos/500/550?random=12',
      title: 'Code Quality Champion',
      description: 'Awarded for maintaining exceptional code quality standards across projects',
      date: '2024',
      alt: 'Code Quality Award'
    }
  ];

  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden" id="achievements-showcase">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm uppercase tracking-widest mb-4">SHOWCASE</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A visual journey through my professional milestones, certifications, and recognition in the world of technology and development.
            </p>
          </div>

          {/* Masonry Grid */}
          <MasonryGrid images={achievements} />
          
        </div>
      </div>
    </section>
  );
};

export default AchievementsShowcase;
