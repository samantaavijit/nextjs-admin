"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function CourseCard({ course }: { course: any }) {
  return (
    <Tilt>
      <div className="cursor-pointer overflow-hidden rounded-lg bg-gray-800">
        {/* Image Wrapper - Ensures Square Image */}
        <div className="flex h-[250px] w-full items-center justify-center overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            width={250}
            height={250}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6 text-white">
          {/* Title with Two-Line Clamp */}
          <h3 className="mb-2 line-clamp-2 h-[56px] text-xl font-semibold">
            {course.title}
          </h3>

          <div className="mb-4 flex items-center justify-between text-sm">
            <span className="rounded-full bg-purple-600 px-3 py-1 text-sm text-white">
              {course.level}
            </span>
            <span>{course.duration}</span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            {/* <div className="flex items-center space-x-1 text-yellow-400">
              <FaStar />
              <span className="font-semibold">{course.rating}</span>
            </div> */}
            <span className="font-semibold">₹100 - ₹500</span>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
