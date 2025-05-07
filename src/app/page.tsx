"use client";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden pt-24">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/tech-elements.svg"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          initial={{ scale: 0.95, rotate: 0 }}
          animate={{ scale: 1.05, rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      </motion.div>
    </main>
  );
}
