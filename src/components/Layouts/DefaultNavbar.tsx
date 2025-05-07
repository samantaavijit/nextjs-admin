"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import LoginButton from "../custom/LoginButton";
import { IoCloseSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "About", href: "/about" },
];

export default function DefaultNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleMouseMove = () => {
      setIsTransparent(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsTransparent(true), 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${isTransparent ? "bg-transparent" : "bg-dark-200/80 shadow-lg backdrop-blur-md"} transition-all duration-300`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex lg:flex-1"
        >
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
              Tech Academy
            </span>
          </Link>
        </motion.div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-dark-700 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MdMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex lg:gap-x-12"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-dark-700 text-lg font-bold leading-6 transition-colors hover:text-white ${
                pathname === item.href ? "text-blue-500" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden lg:flex lg:flex-1 lg:justify-end"
        >
          <Link href="/login">
            <LoginButton />
          </Link>
        </motion.div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="bg-dark-200/95 sm:ring-dark-400 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 backdrop-blur-md sm:max-w-sm sm:ring-1">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
                Tech Academy
              </span>
            </Link>
            <button
              type="button"
              className="text-dark-700 -m-2.5 rounded-md p-2.5 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <IoCloseSharp className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-dark-700 hover:bg-dark-300 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors hover:text-white ${
                      pathname === item.href ? "text-blue-500" : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <LoginButton />
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
