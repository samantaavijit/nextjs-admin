"use client";
import AOS from "aos";
import Button from "@/components/custom/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";
import { FaArrowRight, FaAward } from "react-icons/fa";

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

  useEffect(() => {
    const initiAOS = async () => {
      await import("aos");

      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initiAOS();
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden">
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

      {/* Hero Section */}
      <div className="from-dark-200/50 to-dark-300/50 w-full bg-gradient-to-b pb-16 pt-24 backdrop-blur-lg sm:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-8 xl:px-50">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h1
                data-aos="fade-right"
                className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              >
                Smart Learning for a Digital Future.
              </h1>
              <p
                data-aos="fade-left"
                data-aos-delay="150"
                className="mt-6 text-sm text-white text-opacity-60 md:text-base"
              >
                Empower your future with high-quality Computer education. Join
                our expert-led courses and excel in academics, programming, and
                beyond.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link data-aos="zoom-in" data-aos-delay="300" href="/courses">
                  <Button text="Get Started" />
                </Link>
                <Link data-aos="zoom-in" data-aos-delay="450" href="/about">
                  <Button text="Learn More" variant="learn_more" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center space-x-16">
                {/* <div>
                  <p className="text-base font-bold text-white md:text-xl lg:text-2xl">
                    260+
                  </p>
                  <p className="mb-2 mt-2 h-[3px] w-[100px] rounded-lg bg-green-600" />
                  <p className="text-sm text-white text-opacity-70 md:text-lg">
                    Tutors
                  </p>
                </div> */}
                <div data-aos="fade-up" data-aos-delay="600">
                  <p className="text-base font-bold text-white md:text-xl lg:text-2xl">
                    95+
                  </p>
                  <p className="mb-2 mt-2 h-[3px] w-[100px] rounded-lg bg-blue-600" />
                  <p className="text-sm text-white text-opacity-70 md:text-lg">
                    Students
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="750">
                  <p className="text-base font-bold text-white md:text-xl lg:text-2xl">
                    15+
                  </p>
                  <p className="mb-2 mt-2 h-[3px] w-[100px] rounded-lg bg-pink-600" />
                  <p className="text-sm text-white text-opacity-70 md:text-lg">
                    Courses
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative hidden lg:block"
              data-aos="fade-left"
              data-aos-delay="1050"
            >
              <Tilt>
                <Image
                  src="/hero.png"
                  alt="Programming Illustration"
                  width={600}
                  height={450}
                />
              </Tilt>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-slate-500/10 pb-16 pt-16 backdrop-blur-lg sm:my-32">
        <div className="mx-auto grid w-4/5 grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-rose-600">
                <FaAward className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-slate-50">
                Trusted and Recognized
              </h1>
            </div>
            <h1 className="mt-8 text-2xl font-bold text-white sm:text-3xl md:text-4xl md:leading-[3rem] lg:text-6xl lg:leading-[3.5rem] xl:leading-[3.9rem]">
              Build Computer skills with experts.
            </h1>
            <p className="mt-4 text-gray-5">
              Gain hands-on experience with expert mentors and structured
              curriculum designed to boost your skills.
            </p>
            <button className="mt-8 flex items-center space-x-2 rounded-3xl bg-black px-8 py-3 text-white transition-all duration-200 hover:bg-gray-700">
              <span>Learn More</span>
              <FaArrowRight />
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay="150"
          >
            <div>
              <h1 className="text-7xl font-bold text-gray-3 text-opacity-5 lg:text-9xl">
                01
              </h1>
              <div className="-mt-10">
                <h1 className="mb-3 text-xl font-bold text-white text-opacity-70 md:text-2xl">
                  Personalized Learning
                </h1>
                <p className="w-[90%] text-base text-gray-300 text-opacity-60 lg:w-[70%]">
                  Get one-on-one guidance with expert faculty and structured
                  learning plans for better understanding.
                </p>
              </div>
            </div>
            <div className="mt-8 w-full">
              <h1 className="text-7xl font-bold text-gray-3 text-opacity-5 lg:text-9xl">
                02
              </h1>
              <div className="-mt-10">
                <h1 className="mb-3 text-xl font-bold text-white text-opacity-70 md:text-2xl">
                  Affordable Tuition
                </h1>
                <p className="w-[90%] text-base text-gray-300 text-opacity-60 lg:w-[70%]">
                  Quality education at budget-friendly fees, making learning
                  accessible for every student.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Courses Section */}
      <section className="bg-dark-200/50 w-full py-24 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Popular Courses
            </h2>
          </div>

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
