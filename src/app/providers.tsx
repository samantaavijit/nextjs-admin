"use client";

import AfterLoginNavbar from "@/components/Layouts/AfterLoginNavbar";
import DefaultNavbar from "@/components/Layouts/DefaultNavbar";
import { Sidebar } from "@/components/Layouts/sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

import AnimatedBackground from "@/utils/AnimatedBackground";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin/") && pathname !== "/admin";
  const isStudentRoute =
    pathname.startsWith("/student/") && pathname !== "/student";
  const isNormalUserRoute =
    pathname.startsWith("/user/") && pathname !== "/user";

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <SidebarProvider>
        <NextTopLoader color="#5750F1" showSpinner={false} />
        <div className="flex min-h-screen">
          {/* <Sidebar /> */}

          <div className="w-full bg-gray-2 dark:bg-[#020d1a]">
            {isAdminRoute || isStudentRoute || isNormalUserRoute ? (
              <AfterLoginNavbar />
            ) : (
              <DefaultNavbar />
            )}

            {/* <Header /> */}

            <main className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden p-4 md:p-6 2xl:p-10">
              <AnimatedBackground />
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
