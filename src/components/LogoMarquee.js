"use client";
import Image from "next/image";

const logos = [
  "https://www.centralaxis.com/landing/logos/nvidia.svg",
  "https://www.centralaxis.com/landing/logos/amd.svg",
  "https://www.centralaxis.com/landing/logos/cisco.svg",
  "https://www.centralaxis.com/landing/logos/dell.svg",
  "https://www.centralaxis.com/landing/logos/hp.svg",
  "https://www.centralaxis.com/landing/logos/intel.svg",
  "https://www.centralaxis.com/landing/logos/lenovo.svg",
  "https://www.centralaxis.com/landing/logos/schneider.svg",
  "https://www.centralaxis.com/landing/logos/supermicro.svg",
];

const LogoMarquee = () => {
  return (
    <div className="bg-[#0d1117] relative flex flex-col items-center gap-10 py-14 md:py-[72px]">
      <h2 className="text-[#71717a] text-center tracking-tight opacity-80">
        Seamless integrations with any data center hardware
      </h2>

      <div className="overflow-hidden relative w-full py-4 ">
        <div className="animate-marquee flex w-max">
          {[...logos, ...logos].map((src, index) => (
            <div key={index} className="flex items-center h-16 px-4">
              <Image
                src={src}
                alt={`Logo ${index}`}
                width={128}
                height={64}
                className="w-24 lg:w-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
