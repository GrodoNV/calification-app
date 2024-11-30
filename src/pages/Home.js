import React, { useState, useEffect } from 'react';

const Home = () => {
  const [ratings, setRatings] = useState({ comp1: 1, comp2: 1, comp3: 1 }); // Calificación individual por componente
  const [starEffect, setStarEffect] = useState({ comp1: false, comp2: false, comp3: false }); // Efecto de cambio de estrella

  // Usar useEffect para manejar el cambio de calificación y el efecto de las estrellas
  useEffect(() => {
    // Efecto que se activa cuando una calificación cambia
    const timer = setTimeout(() => {
      setStarEffect({ comp1: false, comp2: false, comp3: false });
    }, 500); // El efecto dura 500ms

    return () => clearTimeout(timer); // Limpiar el timer cuando se desmonte el componente
  }, [ratings]); // Ejecutar el efecto cada vez que ratings cambie

  const handleRating = (comp) => {
    setRatings((prevRatings) => {
      const newRating = prevRatings[comp] < 5 ? prevRatings[comp] + 1 : 1;
      setStarEffect((prevEffect) => ({ ...prevEffect, [comp]: true })); // Activa el efecto de la estrella
      return { ...prevRatings, [comp]: newRating };
    });
  };

  const renderStars = (rating, comp) => {
    return (
      <>
        {[...Array(rating)].map((_, index) => (
          <span key={index} className={`text-yellow-400 text-xl ${starEffect[comp] ? 'animate-pulse' : ''}`}>
            ⭐
          </span>
        ))}
        {[...Array(5 - rating)].map((_, index) => (
          <span key={index} className="text-gray-400 text-xl">
            ☆
          </span>
        ))}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-7xl">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Componente 1</h2>
          <p className="text-gray-600 mb-4">
            En Technology Store nos dedicamos a la venta de productos tecnológicos de la mejor calidad y al mejor precio.
          </p>
          <button
            className="bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800 focus:outline-none"
            onClick={() => handleRating('comp1')}
          >
            Califica
          </button>
          <div className="mt-4">{renderStars(ratings.comp1, 'comp1')}</div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Componente 2</h2>
          <p className="text-gray-600 mb-4">
            En Technology Store nos dedicamos a la venta de productos tecnológicos de la mejor calidad y al mejor precio.
          </p>
          <button
            className="bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800 focus:outline-none"
            onClick={() => handleRating('comp2')}
          >
            Califica
          </button>
          <div className="mt-4">{renderStars(ratings.comp2, 'comp2')}</div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Componente 3</h2>
          <p className="text-gray-600 mb-4">
            En Technology Store nos dedicamos a la venta de productos tecnológicos de la mejor calidad y al mejor precio.
          </p>
          <button
            className="bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800 focus:outline-none"
            onClick={() => handleRating('comp3')}
          >
            Califica
          </button>
          <div className="mt-4">{renderStars(ratings.comp3, 'comp3')}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
