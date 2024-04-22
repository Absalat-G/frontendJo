import React from 'react';
import { motion } from 'framer-motion';
import Carousel from './Carousel';
import Gallery from './Gallery';
import Contact from './Contact';
import Partner from './Partner';
import image1 from '../images/carousel1.png';
import image2 from '../images/carousel2.png';
import image3 from '../images/carousel3.png';
import image4 from '../images/gallery1.png';
import image5 from '../images/carousel3.png';
import image6 from '../images/gallery2.png';
import { useInView } from 'react-intersection-observer';
const Home = () => {
  const images = [image1, image2, image3];
  const images1 = [image4, image5, image6];
  const [ref, inView] = useInView({
    //triggerOnce: true,
    threshold: 1,
  });
  const [ref1, inView1] = useInView({
    //triggerOnce: true,
    threshold: 0.5, 
  });
 
  return (
    <motion.div 
      className="bg-black text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Carousel images={images} />
       <div className="m-2 gap-4 flex flex-wrap justify-center text-white">
    
      <motion.div
        className="p-4 border-r border-gray-300"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        Independence day<br />6th march, 2024<br />11am - 10pm
      </motion.div>

      
      <motion.div
        className="p-4 border-r border-gray-300"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
        transition={{ duration: 0.5 }}
      >
        GHION HOTEL<br />Addis - Ababa
      </motion.div>

      
      <motion.div
        className="p-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        Celebrating arguably<br />WA’s best and most<br />popular indigenous dish
      </motion.div>
    </div>
      <section id="gallery" className="">
        <motion.div 
          className='mb-2  pb-2'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Gallery title= "Gallery" images1={images1} />
        </motion.div>
      </section>
   
      <section id="about" className="">
      <motion.div 
        className="gap-4 flex flex-wrap justify-center mb-2 border-t-2 border-b-2 border-gray-50 pb-2"
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4 font-bold mt-4 text-2xl">
          500+<br />Jollof Lovers <br />
        </div>
        <div className="p-4 font-bold text-2xl">
          20+ <br />Vendor
        </div>
        <div className="p-4">
          The epic festival where flavor meets fun and  your inner <br />
          foodie comes alive! With incredible flavors, incredible people<br /> and unforgettable vibes.
          It’s the most iconic Jollof Summit<br /> coming together for an unforgettable taste adventure.
        </div>
      </motion.div>
    </section>

   
      <motion.div 
        className=''
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Partner title= "Partner" />
      </motion.div>
      <motion.div 
        className="container mx-auto py-8 mt-48 border-t-2 border-inherit pt-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Contact />
      </motion.div>
    </motion.div>
  );
};

export default Home;
