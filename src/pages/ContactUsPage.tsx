"use client";

import Image from "next/image";
import { RiMapPin2Fill, RiPhoneFill, RiMailFill } from "react-icons/ri";

export default function ContactUsPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <div className="from-dark-200/50 to-dark-300/50 w-full bg-gradient-to-b pb-16 backdrop-blur-lg sm:py-32">
        <section className="relative px-6 py-15 text-center md:px-12">
          <div className="mx-auto max-w-5xl">
            <h1
              data-aos="zoom-in"
              className="text-3xl font-bold text-white md:text-5xl"
            >
              Reach out to us for any inquiries or assistance.
            </h1>
            <p
              className="mt-4 text-lg text-gray-300"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Get in touch with us for any queries, course details, or support.
            </p>
          </div>
        </section>
      </div>

      {/* Vision */}
      <section className="bg-slate-500/10 pb-16 pt-16 backdrop-blur-lg sm:my-32">
        <div className="mx-auto grid w-4/5 grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <h2 className="mb-6 text-3xl font-bold text-white">Get in Touch</h2>
            <p className="mb-6 text-base text-gray-300 md:text-lg">
              Whether you have questions about our courses or need assistance,
              feel free to reach out.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: <RiPhoneFill className="h-6 w-6 text-blue-400" />,
                  text: "+91 8145263799",
                  href: "tel:+918145263799",
                },
                {
                  icon: <RiMailFill className="h-6 w-6 text-blue-400" />,
                  text: "techlearnacademy2025@gmail.com",
                  href: "mailto:techlearnacademy2025@gmail.com",
                },
                {
                  icon: <RiMapPin2Fill className="h-6 w-6 text-blue-400" />,
                  text: "Ajodhyapur, Patashpur, West Bengal 721439",
                  href: "https://www.google.com/maps/place/Tech+Learn+Academy/@22.0706431,87.4934578,20z/data=!4m6!3m5!1s0x3a1d3300792b4fd1:0xf5f6c3995b2e6b96!8m2!3d22.0704909!4d87.4934954!16s%2Fg%2F11m5s0nzj0?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  {item.icon}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:underline md:text-lg"
                  >
                    {item.text}
                  </a>
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
              src="/contact_us_hero_section.jpg"
              alt="Contact Us"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
