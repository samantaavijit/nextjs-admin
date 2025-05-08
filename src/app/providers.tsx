"use client";

import AdminSidebar from "@/components/Layouts/AdminSidebar";
import AfterLoginNavbar from "@/components/Layouts/AfterLoginNavbar";
import DefaultNavbar from "@/components/Layouts/DefaultNavbar";
import { SidebarProvider } from "@/context/SidebarContext";
import AnimatedBackground from "@/utils/AnimatedBackground";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { useEffect } from "react";
import AOS from "aos";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  const isStudentRoute = pathname.startsWith("/student");
  const isNormalUserRoute = pathname.startsWith("/user");

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
    <ThemeProvider defaultTheme="dark" attribute="class">
      <SidebarProvider>
        <NextTopLoader color="#5750F1" showSpinner={false} />
        <div className="flex min-h-screen">
          {isAdminRoute && <AdminSidebar />}

          <div className="w-full bg-gray-2 dark:bg-[#020d1a]">
            {isAdminRoute || isStudentRoute || isNormalUserRoute ? (
              <AfterLoginNavbar />
            ) : (
              <DefaultNavbar />
            )}

            <main className="isolate w-full overflow-hidden p-4">
              <AnimatedBackground />
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
