"use client";

import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="border-t border-[#363b42] bg-[#0d1117] lg:pl-12 pl-2 ">
      <div className="flex flex-col items-center justify-start gap-4 px-8 md:flex-row md:gap-2 md:px-0 py-10">
        <Image src="/image/logo.png" alt="Logo" width={36} height={36} />
        <p className="text-center text-sm leading-loose md:text-left text-gray-200">
          Copyright © 2025
        </p>
      </div>
    </footer>
  );
}

export default Footer;
