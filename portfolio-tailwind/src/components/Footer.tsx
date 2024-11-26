import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border z-10 border-t-[#33353F] text-white bg-gradient-to-r from-orange-900 via-transparent to-orange-900">
      <div className="p-12 flex justify-between max-w-[1200px] mx-auto">
        <span>Rubi Abid</span>
        <p className="text-slate-900">2024 © All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
