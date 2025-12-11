import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main  className="pt-[72px]">
        <div className="max-w-7xl mx-auto px-4">
          {children}
        </div>    
          </main>
      <Footer />
    </>
  );
};

export default Layout;
