import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  
  const floatingStyle = {
    animation: 'floatAnimation 6s ease-in-out infinite',
    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
    transition: 'transform 0.3s ease',
    zIndex: 10
  };

  return (
    <>
      <style>
        {`
          @keyframes floatAnimation {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(2deg);
            }
          }
          .floating-image:hover {
            transform: scale(1.1) !important;
          }
        `}
      </style>
      <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
        <HeroText />
        <ParallaxBackground />
        <figure
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ width: "100vw", height: "100vh", zIndex: 5 }}
        >
          <img
            src="/assets/deepika.jpg"
            alt="Deepika"
            className={`floating-image ${isMobile ? 'w-40 h-40' : 'w-120 h-120'} object-cover rounded-lg shadow-2xl pointer-events-auto`}
            style={{...floatingStyle, marginLeft: isMobile ? '0' : '20rem'}}
          />
        </figure>
      </section>
    </>
  );
};

export default Hero;
