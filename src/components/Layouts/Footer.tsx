import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, href: "https://facebook.com" },
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
    { name: "YouTube", icon: FaYoutube, href: "https://youtube.com" },
  ];

  return (
    <footer className="bg-dark-200/80 shadow-lg backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Google Map */}
          <div
            className="relative"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="150"
          >
            <h3 className="mb-3 text-lg font-semibold text-white">Visit Us</h3>
            <div className="bg-dark-300 relative h-[200px] overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.7260149315816!2d87.4909098!3d22.0708778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d3300792b4fd1%3A0xf5f6c3995b2e6b96!2sTech%20Learn%20Academy!5e0!3m2!1sen!2sin!4v1647025970282!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div
            className="space-y-8"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="250"
          >
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                Contact Us
              </h3>
              <div className="text-dark-700 space-y-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-500" />
                  <p>techlearnacademy2025@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-blue-500" />
                  <p>+91 8145263799</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <p>Ajodhyapur, Patashpur, West Bengal 721439</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h4 className="mb-4 text-lg font-semibold text-white">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-700 transition-colors hover:text-blue-500"
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-dark-300 border-t pt-8 text-center">
          <p className="text-dark-700">
            © {new Date().getFullYear()} Tech Learn Academy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
