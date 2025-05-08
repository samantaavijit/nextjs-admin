import AboutUsPage from "@/pages/AboutUsPage";
import { Metadata } from "next";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "About Us | Tech Learn Academy",
  description:
    "Learn more about Tech Learn Academy, our mission, and our team.",
};

export default function Page(): JSX.Element {
  return <AboutUsPage />;
}
