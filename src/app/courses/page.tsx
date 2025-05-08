import CoursesPage from "@/pages/CoursesPage";
import { Metadata } from "next";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "Courses | Tech Learn Academy",
  description: "Explore expert-led courses at Tech Learn Academy.",
};

export default function Page(): JSX.Element {
  return <CoursesPage />;
}
