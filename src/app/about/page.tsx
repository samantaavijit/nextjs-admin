"use client";

import Image from "next/image";
import { FaAward, FaBookOpen, FaUsers } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <div className="from-dark-200/50 to-dark-300/50 w-full bg-gradient-to-b pb-16 backdrop-blur-lg sm:py-32">
        <section className="relative px-6 py-15 text-center md:px-12">
          <div className="mx-auto max-w-5xl">
            <h1
              data-aos="zoom-in"
              className="text-3xl font-bold text-white md:text-5xl"
            >
              About Tech Learn Academy
            </h1>
            <p
              className="mt-4 text-lg text-gray-300"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Empowering students with cutting-edge Computer education and
              dedicated tuition for Class 11 & 12. We bridge the gap between
              learning and real-world application.
            </p>
          </div>
        </section>
      </div>

      {/* Vision */}
      <section className="bg-slate-500/10 pb-16 pt-16 backdrop-blur-lg sm:my-32">
        <div className="mx-auto grid w-4/5 grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <h2 className="mb-6 text-3xl font-bold text-white">Our Vision</h2>
            <p className="mb-6 text-base text-gray-300 md:text-lg">
              At Tech Learn Academy, we aim to provide top-notch Computer
              education and personalized tuition for students of Class 11 & 12,
              ensuring they excel in academics and future careers.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: <FaBookOpen className="h-6 w-6 text-blue-400" />,
                  text: "Comprehensive Computer courses",
                },
                {
                  icon: <FaUsers className="h-6 w-6 text-blue-400" />,
                  text: "Interactive and hands-on learning",
                },
                {
                  icon: <FaAward className="h-6 w-6 text-blue-400" />,
                  text: "Guidance from expert educators",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  {item.icon}
                  <p className="text-base md:text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay="150"
            className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-lg md:h-[400px]"
          >
            <Image
              src="/about_us_hero_section.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Mission */}

      <section className="w-full py-10 backdrop-blur-lg">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left Image */}
          <div
            data-aos="flip-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay="150"
            className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-lg md:h-[400px]"
          >
            <Image
              src="/about_us_mission.jpg"
              alt="Our Mission"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Content */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="150"
          >
            <h2 className="mb-6 text-3xl font-bold text-white">Our Mission</h2>
            <p className="text-base text-gray-300 md:text-lg">
              At Tech Learn Academy, our mission is to equip students with
              practical Computer skills and knowledge. We strive to create an
              engaging and interactive learning environment where students from
              Class 11 & 12 can build strong technical foundations and
              confidently step into the world of technology.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
