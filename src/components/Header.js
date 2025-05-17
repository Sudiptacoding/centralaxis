"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = (menuIndex) => {
    setActiveMenu(activeMenu === menuIndex ? null : menuIndex);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menus = [
    {
      label: "Data Center Infrastructure Management",
      links: [
        ["Monitoring Devices", "/dc-management/monitoring"],
        ["Asset Tracking", "/dc-management/asset-management"],
        ["Network Management", "/dc-management/networking"],
        ["Change Management", "/dc-management/change-management"],
        ["Colocation Management", "/dc-management/colocation"],
        ["Data Center Planner", "/dc-management/dc-planner"],
        ["Firmware Management", "/dc-management/firmware"],
        ["IP Address Management", "/dc-management/ipam"],
        ["Customer Portal", "/dc-management/customer-portal"],
        ["Custom Insights", "/dc-management/insights"],
        ["Custom Data Center Solutions", "/dc-management/custom-solutions"],
      ],
    },
    {
      label: "Intelligence Solutions",
      links: [
        ["Digital Twins", "/intelligence/digital-twins"],
        ["Smart Power Mapping", "/intelligence/power-mapping"],
        ["Predictive Failure and Alerting", "/intelligence/predictive-failure"],
        ["Smart Control Systems", "/intelligence/control-systems"],
        ["Automated Discovery", "/intelligence/discovery"],
      ],
    },
    {
      label: "Data Center Compliance",
      links: [
        ["DCOI Compliance", "/compliance/dcoi"],
        ["(EU) 2023/1791", "/compliance/eu-2023-1791"],
        ["EN 50600", "/compliance/en-50600"],
        ["LEED Certification", "/compliance/leed"],
        ["ISO/IEC 30134-2", "/compliance/iso-iec-30134-2"],
        ["(EPA) ENERGY STAR", "/compliance/energy-star"],
        ["EC JRC", "/compliance/ec-jrc"],
      ],
    },
    {
      label: "Sustainability Blog",
      links: [
        ["Energy Efficiency", "/energy-solutions/pue-tracking"],
        ["Stranded Energy Map", "/energy-solutions/energy-map"],
        [
          "Environmental Product Declaration",
          "/energy-solutions/environmental-product-declaration",
        ],
        ["Renewables Integration", "/energy-solutions/renewables-integration"],
        [
          "Power Resource Management",
          "/energy-solutions/power-resource-managment",
        ],
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#ffffff1a] bg-[#0d1117] text-white backdrop-blur-xl">
      <div
        className="container mx-auto flex h-16 items-center justify-between px-4 py-4"
        style={{ maxWidth: "unset" }}
      >
        {/* Logo */}
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Image src="/image/logo.png" alt="Logo" width={36} height={36} />
            <div className="text-2xl font-semibold">CentralAxis</div>
          </Link>
          <Link href="/" className="flex items-center space-x-2 md:hidden">
            <Image src="/image/logo.png" alt="Logo" width={36} height={36} />
            <span className="font-bold">CentralAxis</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {menus.map((menu, index) => (
            <div
              className="group relative"
              key={index}
              onMouseEnter={() => setActiveMenu(index)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center text-sm font-medium hover:text-gray-300">
                {menu.label}
                <span className="ml-1"><FaAngleDown /></span>
              </button>
              {activeMenu === index && (
                <div className="absolute right-0 mt-0 w-64 rounded-md border-2  border-gray-700 bg-[#0d1117] text-white shadow-lg z-50">
                  <div className="py-1">
                    {menu.links.map(([text, href], i) => (
                      <Link
                        key={i}
                        href={href}
                        className="block px-4 py-2 text-sm hover:bg-gray-800"
                      >
                        {text}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="ml-auto flex items-center justify-center rounded border border-border p-2 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1117] border-t border-gray-700 px-6 py-8 text-gray-300 text-md">
          {menus.map((menu, index) => (
            <div key={index} className="mb-5">
              <button
                className="w-full text-left font-semibold mb-2 flex gap-4 items-center"
                onClick={() => toggleMenu(index)}
              >
                {menu.label}
                <span>
                  {activeMenu === index ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </button>

              {activeMenu === index && (
                <div className="flex flex-col space-y-1 pl-2">
                  {menu.links.map(([text, href], i) => (
                    <Link
                      key={i}
                      href={href}
                      className="text-sm text-gray-400 py-0 hover:text-white "
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
