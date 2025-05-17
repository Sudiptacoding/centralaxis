import Image from "next/image";
import React from "react";

function BookADemo() {
  return (
    <div className="bg-[#0d1117] ">
      <section className="container relative mx-auto flex flex-col items-center gap-10 px-6 pb-14">
        <article
          className="border-[#0d1117] dark:bg-dark-surface-secondary h-[250px] relative flex flex-col items-center justify-center gap-9 self-stretch overflow-hidden rounded-xl border border-border p-6"
          aria-label="Book a Demo Invitation"
        >
          <Image
            src="https://www.centralaxis.com/background.png"
            alt="Blurred background image"
            fill
            className="object-cover"
            style={{ filter: "blur(3px)" }}
            aria-hidden="true"
            priority // if it's a key visual and important for LCP
          />

          <div
            className="absolute left-0 top-0 h-full w-full bg-black opacity-60"
            aria-hidden="true"
          ></div>

          <div className="relative z-20 flex flex-col items-center gap-2 text-center text-gray-100">
            <h4 className="text-3xl font-medium tracking-tighter md:text-4xl">
              Book a Demo
            </h4>
            <p className="mb-4 text-lg text-white/70 md:text-xl max-w-xl">
              See how CentralAxis can revolutionize your data center operations.
            </p>

            <div className="relative z-20 flex items-center gap-2">
              <a
                href="https://calendly.com/margarita-centralaxis/30min"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded bg-gray-200 px-4 py-2 text-base font-semibold text-black hover:bg-gray-200 transition"
              >
                Schedule Now
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default BookADemo;
