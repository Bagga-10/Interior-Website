// Importing the motion library from framer-motion


export const SlideUp = (delay) => {
  return {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};
export const SlideLeft = (delay) => {
  return {
    initial: {
      x: 50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};

export const bounce =(delay)=>{
  return {
    initial: {
      y:0,
    },
    animate: {
      y:[0,-10,0],
      transition: {
        duration: 1,
        delay:delay,
        repeat: Infinity,
        repeatType:'loop',
        ease:'easeInOut'
      },
    },
  }
}



