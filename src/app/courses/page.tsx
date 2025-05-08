"use client";

import CourseCard from "@/components/CourseCard";
import { COURSES } from "@/data/Courses";

export default function CoursesPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <div className="from-dark-200/50 to-dark-300/50 w-full bg-gradient-to-b pb-16 backdrop-blur-lg sm:py-32">
        <section className="relative px-6 py-15 text-center md:px-12">
          <div className="mx-auto max-w-5xl">
            <h1
              data-aos="zoom-in"
              className="text-3xl font-bold text-white md:text-5xl"
            >
              Explore Our Expert-Led Courses
            </h1>
            <p
              className="mt-4 text-lg text-gray-300"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Discover our wide range of courses taught by industry experts
            </p>
          </div>
        </section>

        <section className="px-6 py-12 md:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {COURSES.map((item, key) => (
              <CourseCard key={key} course={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
