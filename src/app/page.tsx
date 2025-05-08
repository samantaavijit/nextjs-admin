"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  const popularCourses = [
    {
      title: "JavaScript Fundamentals",
      description: "Master the basics of JavaScript programming",
      level: "Beginner",
      duration: "8 weeks",
      image: "/javascript.svg",
    },
    {
      title: "Python for Beginners",
      description: "Start your programming journey with Python",
      level: "Beginner",
      duration: "10 weeks",
      image: "/python.svg",
    },
    {
      title: "React Development",
      description: "Build modern web applications with React",
      level: "Intermediate",
      duration: "12 weeks",
      image: "/react.svg",
    },
  ];

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden">
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

      {/* Hero Section */}
      <div className="from-dark-200/50 to-dark-300/50 w-full bg-gradient-to-b pt-24 backdrop-blur-lg sm:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-8 xl:px-50">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Smart Learning for a Digital Future.
              </h1>
              <p className="mt-6 text-sm text-white text-opacity-60 md:text-base">
                Empower your future with high-quality Computer education. Join
                our expert-led courses and excel in academics, programming, and
                beyond.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                {/* <Link href="/courses">
                  <Button variant="primary">Browse Courses</Button>
                </Link>
                <Link href="/about">
                  <Button variant="secondary">Learn More</Button>
                </Link> */}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <img
                src="/hero.png"
                alt="Programming Illustration"
                className="mx-auto h-auto w-full max-w-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Popular Courses Section */}
      <section className="bg-dark-200/50 w-full py-24 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Popular Courses
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              Choose from our most popular programming courses
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {popularCourses.map((course, index) => (
              <article
                key={index}
                className="border-dark-300 bg-dark-200/30 flex flex-col items-start justify-between rounded-2xl border p-6 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="relative w-full">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">
                      {course.duration}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href="/courses">
                      <span className="absolute inset-0" />
                      {course.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {course.description}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-dark-300/50 w-full py-24 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto max-w-2xl lg:text-center"
          >
            <h2 className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Why Choose Tech Academy?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We provide a comprehensive learning experience with features
              designed to help you succeed in your programming journey.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
