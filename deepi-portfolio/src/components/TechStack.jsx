import OrbitingSkills from "./ui/orbiting-skills";

const TechStack = () => {
  return (
    <section className="c-space my-20" id="tech-stack">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
      </div>

      <div className="text-center mb-16">
        <h2 className="head-text">My Tech Stack</h2>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          I specialize in a variety of languages, frameworks, and tools that
          allow me to build robust and scalable applications
        </p>
      </div>

      <div className="flex items-center justify-center w-full">
        <div className="w-full max-w-6xl mx-auto px-4">
          <OrbitingSkills />
        </div>
      </div>
    </section>
  );
};

export default TechStack;

