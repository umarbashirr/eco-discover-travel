import { Footer } from "@/components/footer";
import { MainNavbar } from "@/components/main-navbar";
import { TopNavbar } from "@/components/top-navbar";
import React from "react";
import { GoogleTagManager } from "@next/third-parties/google";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <main className="w-full min-h-screen">{children}</main>
      <Footer />
      <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID as string} />
    </>
  );
};

export default WebsiteLayout;
