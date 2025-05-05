"use client";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const techElements = [
    { id: 1, icon: "/javascript.svg", initialX: "10%", initialY: "10%" },
    { id: 2, icon: "/python.svg", initialX: "70%", initialY: "20%" },
    { id: 3, icon: "/react.svg", initialX: "20%", initialY: "60%" },
    { id: 4, icon: "/next.svg", initialX: "80%", initialY: "70%" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {techElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute h-16 w-16 opacity-30"
          style={{ left: element.initialX, top: element.initialY }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: element.id * 0.5,
          }}
        >
          <img
            src={element.icon}
            alt="Tech element"
            className="h-full w-full object-contain"
          />
        </motion.div>
      ))}
      <div className="bg-gradient-radial via-dark-100/50 to-dark-100 absolute inset-0 from-transparent opacity-80" />
    </div>
  );
};

export default AnimatedBackground;
