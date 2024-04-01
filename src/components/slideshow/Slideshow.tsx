import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import images from "./imagens";
import "./slideshow.css";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offsetX: number, velocityX: number) => {
  return Math.abs(offsetX) * velocityX;
};

const Slideshow = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [page]);

  return (
    <div className="slideshow-container">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(event, info) => {
            console.log(event);
            const { offset, velocity } = info;
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </div>
  );
};

export default Slideshow;
