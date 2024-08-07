import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen py-20 px-4 gradient-animation text-white flex items-center justify-center mt-[-100px]">
      <div className="relative z-10 w-full max-w-lg mx-auto text-center glassmorphism p-8">
        <h2 className="text-4xl font-bold mb-4">Sobre Mí</h2>
        <p className="text-lg mb-4">
          Hola, soy Jhonatan Zarzuri, un desarrollador web apasionado por crear experiencias digitales únicas y efectivas.
          Tengo experiencia en tecnologías como HTML, CSS, JavaScript, React, y Laravel. Me encanta aprender nuevas
          herramientas y mejorar continuamente mis habilidades.
        </p>
      </div>
    </section>
  );
};

export default About;
