"use client";
import Image from "next/image";
import Link from "next/link";

// import { Notification } from "./notification";

import { UserInfo } from "./header/user-info";
import { useSidebarContext } from "@/context/SidebarContext";
import { GrMenu } from "react-icons/gr";

export default function AfterLoginNavbar() {
  const { toggleSidebar, isMobile } = useSidebarContext();

  return (
    <header className="sticky top-0 flex items-center justify-between border-b border-stroke bg-white px-4 py-5 shadow-1 dark:border-stroke-dark dark:bg-gray-dark md:px-5 2xl:px-10">
      <button
        onClick={toggleSidebar}
        className="rounded-lg border px-1.5 py-1 dark:border-stroke-dark dark:bg-[#020D1A] hover:dark:bg-[#FFFFFF1A] lg:hidden"
      >
        <GrMenu />
        <span className="sr-only">Toggle Sidebar</span>
      </button>

      {isMobile && (
        <Link href="/" className="ml-2 max-[430px]:hidden min-[375px]:ml-4">
          <Image
            src={"/images/logo/logo-icon.svg"}
            width={32}
            height={32}
            alt=""
            role="presentation"
          />
        </Link>
      )}

      <div className="max-xl:hidden">
        <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
          Tech Learn Academy
        </h1>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2 min-[375px]:gap-4">
        {/* <Notification /> */}

        <div className="shrink-0">
          <UserInfo />
        </div>
      </div>
    </header>
  );
}
