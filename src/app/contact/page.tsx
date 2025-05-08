import ContactUsPage from "@/pages/ContactUsPage";
import { Metadata } from "next";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "Contact Us | Tech Learn Academy",
  description:
    "Get in touch with Tech Learn Academy for any inquiries or support.",
};

export default function Page(): JSX.Element {
  return <ContactUsPage />;
}
