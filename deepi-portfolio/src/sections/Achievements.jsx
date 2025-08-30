import { GlowCard } from "../components/ui/spotlight-card";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Full Stack Developer Certification",
      description: "Certified in modern web development technologies including React, Node.js, and cloud deployment.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&auto=format",
      glowColor: "blue",
      year: "2023"
    },
    {
      id: 2,
      title: "Best Innovation Award",
      description: "Recognized for developing innovative solutions that improved user experience by 40%.",
      image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=400&h=300&fit=crop&auto=format",
      glowColor: "purple",
      year: "2023"
    },
    {
      id: 3,
      title: "Open Source Contributor",
      description: "Active contributor to multiple open-source projects with 100+ merged pull requests.",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop&auto=format",
      glowColor: "green",
      year: "2022-2024"
    },
    {
      id: 4,
      title: "Tech Conference Speaker",
      description: "Delivered talks on modern web development at multiple tech conferences and meetups.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&auto=format",
      glowColor: "orange",
      year: "2023"
    }
  ];

  return (
    <section className="c-space section-spacing" id="achievements">
      <div className="text-center mb-16">
        <h2 className="head-text">Achievements</h2>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Milestones and recognitions that mark my journey in software development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {achievements.map((achievement) => (
          <GlowCard
            key={achievement.id}
            glowColor={achievement.glowColor}
            customSize={true}
            className="w-full h-96 group hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col h-full">
              {/* Achievement Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 flex-shrink-0">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                  <span className="text-xs text-white font-semibold">
                    {achievement.year}
                  </span>
                </div>
              </div>

              {/* Achievement Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 text-sm flex-1 leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Achievement Badge/Icon */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${
                    achievement.glowColor === 'blue' ? 'bg-blue-500' :
                    achievement.glowColor === 'purple' ? 'bg-purple-500' :
                    achievement.glowColor === 'green' ? 'bg-green-500' :
                    'bg-orange-500'
                  }`}></div>
                  <span className="text-xs text-gray-400 uppercase tracking-wide">
                    Achievement
                  </span>
                </div>
                <svg 
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
                  />
                </svg>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
