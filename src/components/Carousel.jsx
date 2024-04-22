import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavigationMenu from './NavigationMenu';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    let intervalId;

    if (autoplay) {
      intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 4000);
    }

    return () => clearInterval(intervalId);
  }, [autoplay, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full overflow-hidden relative">
    
      <div className="absolute top-0 left-0 right-0 z-50">
        <NavigationMenu />
      </div>

      <div className="absolute bottom-24 right-4 flex flex-col items-end space-y-4 z-50">
        <a href="#" className="text-white">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="#" className="text-white">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="#" className="text-white">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="#" className="text-white">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </div>
      
   
      <div className="relative w-full">
        <div
          className="carousel relative shadow-2xl bg-white w-full h-full"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
        
          <div className="relative w-full h-96 overflow-hidden" style={{ height: '600px' }}>
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={img}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  alt={`Slide ${index + 1}`}
                />
               
                <div className="absolute inset-x-0 bottom-10 text-center z-20">
                  <h3>JOLLOF SUMMIT</h3>
                  <h1
                    className={`text-3xl font-bold text-white transition-transform duration-1000 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    }`}
                  >
                    THE BIGGEST JOLLOF FESTIVAL <br /> in ADDIS-ABABA!
                  </h1>
                  <h6
                    className={`text-lg mt-6 font-semibold text-white transition-transform duration-1000 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    }`}
                  >
                    Jollof is more than just a rice dish - it’s <br /> the thread that ties diverse people together
                  </h6>
                  <div className="mt-64">
                    <button
                      className={`mt-12 bg-slate-900 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded transition-transform duration-1000 ${
                        index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                      }`}
                      onClick={() => navigate('/tickets')}
                    >
                      GET TICKETS HERE
                    </button>
                    <button
                      className={`mt-12 bg-slate-900 hover:bg-slate-950 text-white font-bold py-2 px-4 ml-4 rounded transition-transform duration-1000 ${
                        index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                      }`}
                      onClick={() => navigate('/vendor')}
                    >
                      BECOME A VENDOR
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="absolute inset-x-0 bottom-0 flex justify-end items-center p-4">
            <button
              className="w-8 h-8 bg-white bg-opacity-50 text-black rounded-full hover:bg-opacity-70"
              onClick={prevSlide}
              style={{ marginRight: '8px' }}
            >
              &#8592;
            </button>
            <div className="flex space-x-2 mt-10">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`text-white-800 h-4 hover:text-white-700 cursor-pointer ${
                    currentSlide === index ? 'text-pink-800' : ''
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  —
                </div>
              ))}
            </div>
            <button
              className="w-8 h-8 bg-white bg-opacity-50 text-black rounded-full hover:bg-opacity-70"
              onClick={nextSlide}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
