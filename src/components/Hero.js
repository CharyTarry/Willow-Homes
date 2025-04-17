import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
      <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 md:mb-10">
          Empower Your Stay, Empower Yourself
        </h1>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
          Find comfort, security, and a community of like-minded women in our cozy and welcoming space. Your home away from home.
        </p>
                  <a
            href="#booking"
            className="px-8 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-400 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Book Your Stay
          </a>
      </div>
    </section>
  );
};

export default Hero;
