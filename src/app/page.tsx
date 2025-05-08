"use client";
import AOS from "aos";
import Button from "@/components/custom/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";
import { FaArrowRight, FaAward } from "react-icons/fa";
import CourseCard from "@/components/CourseCard";

export default function LandingPage() {
  const courses = [
    {
      title: "Web Development Fundamentals",
      instructor: "John Smith",
      level: "Beginner",
      duration: "8 weeks",
      rating: 4.8,
      students: 1234,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    },
    {
      title: "Data Science Essentials",
      instructor: "Emily Brown",
      level: "Intermediate",
      duration: "10 weeks",
      rating: 4.9,
      students: 2341,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Machine Learning Fundamentals",
      instructor: "Michael Chen",
      level: "Intermediate",
      duration: "14 weeks",
      rating: 4.9,
      students: 2198,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
      <section className="w-full py-10 backdrop-blur-lg">
        <div className="mx-auto w-[80%] pb-8 pt-8">
          {/* Make flex direction column on mobile, row on md+ */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="150"
            className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
          >
            <h2 className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
              Popular Courses
            </h2>
            <Link href="/courses">
              <Button text="View All" variant="learn_more" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 md:mt-16 lg:grid-cols-2 xl:grid-cols-3">
            {courses.map((course, key) => {
              return (
                <div
                  data-aos="fade-right"
                  data-aos-anchor-placement="top-center"
                  data-aos-delay={`${key * 150}`}
                  key={key}
                >
                  <CourseCard course={course} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-500/10 pb-16 pt-16 backdrop-blur-lg sm:my-32">
        <div className="mx-auto mt-8 grid w-[80%] grid-cols-1 items-center gap-12 xl:grid-cols-2">
          {/* IMAGE */}
          <Tilt>
            <div>
              <Image
                src="/f.png"
                alt="Learning Experience"
                width={1000}
                height={1000}
              />
            </div>
          </Tilt>
          {/* TEXT */}

          <div>
            {/* Sub heading */}
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-rose-600">
                <FaAward className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-slate-200">
                Elevate Your Learning Journey
              </h1>
            </div>
            {/* MAIN heading */}
            <h1 className="mt-8 text-2xl font-bold text-white sm:text-3xl md:text-6xl md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem]">
              Unlock potential with expert guidance.
            </h1>
            <div className="mb-6 mt-8">
              <h1 className="text-lg font-semibold text-white text-opacity-70 md:text-2xl">
                Learn from Industry Experts
              </h1>
              <p className="mt-4 text-sm text-white text-opacity-70 md:text-base">
                Gain insights from top professionals with hands-on experience in
                various domains. Stay ahead with up-to-date and practical
                knowledge.
              </p>
            </div>
            <div className="mb-6 mt-8">
              <h1 className="text-lg font-semibold text-white text-opacity-70 md:text-2xl">
                Enhance Your Skills with Practical Learning
              </h1>
              <p className="mt-4 text-sm text-white text-opacity-70 md:text-base">
                Our courses are designed to help you apply what you learn in
                real-world scenarios. Build projects, test your skills, and grow
                your expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

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
