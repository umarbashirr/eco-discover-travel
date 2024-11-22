import { Footer } from "@/components/footer";
import { MainNavbar } from "@/components/main-navbar";
import { TopNavbar } from "@/components/top-navbar";
import React from "react";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopNavbar />
      <MainNavbar />
      <main className="w-full min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
