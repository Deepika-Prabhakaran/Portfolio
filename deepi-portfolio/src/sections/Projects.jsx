import { myProjects } from "../constants";
import { ContainerScroll, CardSticky } from "../components/ui/cards-stack";

const Projects = () => {
  return (
    <section className="relative min-h-screen text-white">
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-xs uppercase tracking-wide text-cyan-300 font-semibold">
              Featured Work
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            My Creative
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 leading-relaxed">
            Explore a collection of innovative projects that showcase modern
            development practices, from e-commerce platforms to game engines.
          </p>
        </div>

        <ContainerScroll className="min-h-[400vh]">
          {myProjects.map((project, index) => (
            <CardSticky
              key={project.id}
              index={index}
              className="w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black/80 backdrop-blur-xl shadow-2xl"
              incrementY={60}
              incrementZ={5}
            >
              {/* Visible title when stacked */}
              <div className="absolute top-4 left-6 z-30 pointer-events-none">
                <h3 className="text-xl font-bold text-white bg-black/70 px-3 py-1 rounded-md backdrop-blur-sm">
                  {project.title}
                </h3>
              </div>

              <div className="flex flex-col lg:flex-row min-h-[500px]">
                {/* Image Section - Left */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-20">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/20">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-white font-medium">
                        Live Project
                      </span>
                    </div>
                  </div>

                  {project.image ? (
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      src={project.image}
                      alt={project.title}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="text-6xl text-gray-600">
                        <svg
                          className="w-16 h-16"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section - Right */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                  {/* Header */}
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags?.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-300 hover:bg-cyan-500/30 transition-colors duration-200"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {project.subDescription && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                          <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {project.subDescription
                            .slice(0, 3)
                            .map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="text-gray-400 flex items-start gap-3 group hover:text-gray-200 transition-colors duration-200"
                              >
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 group-hover:bg-cyan-300 transition-colors duration-200"></div>
                                <span className="text-sm leading-relaxed">
                                  {feature}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-8">
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5"
                      >
                        <span>View Project</span>
                        <svg
                          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}

                    <button className="group inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-300 hover:bg-gray-800/50">
                      <span>View Details</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </section>
  );
};

export default Projects;
