import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTextWord = ({ text }: { text: string }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.7 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', fontSize: '2rem' }}
      variants={container}
      initial="hidden"
      animate="visible"
      className=" whitespace-nowrap flex flex-wrap justify-center items-center"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: '5px' }}
          key={index}
          className="text-base text-primary-600"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
