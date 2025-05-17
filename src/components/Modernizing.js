import React from "react";

function Modernizing() {
  return (
    <div className="bg-[#0d1117] ">
      <section className="container relative mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px] ">
        <div className="flex flex-col items-center gap-3 self-center">
          <h3 className="text-[#71717a] bg-[#18181b] text-sm dark:bg-dark-surface-secondary dark:text-dark-text-tertiary flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px font-medium md:text-base">
            Built for AI
          </h3>
          <div className="flex max-w-[800px] flex-col items-center justify-center gap-1 self-center">
            <h4 className="text-gray-100 text-center text-3xl font-medium md:text-4xl">
              Modernizing the Digital Backbone
            </h4>
          </div>
          <p className="text-[#71717a] dark:text-dark-text-tertiary max-w-screen-md text-pretty text-center text-lg font-light md:text-xl">
            Data center software (DCIM, BMS and EPMS) has stagnated. We've built
            a better way.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Advanced Monitoring Block */}
          <article className="bg-[#18181b] border-[#18181b] flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "var(--radius)",
                  display: "block",
                  height: "100%",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              >
                <img
                  src="https://www.centralaxis.com/posters/monitoring.png"
                  alt="Video poster"
                />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    aspectRatio: "16/9",
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    border: "none",
                    objectFit: "contain",
                    borderRadius: "var(--radius)",
                  }}
                  poster="/posters/monitoring.png"
                >
                  <source src="/hb-monitoring.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </figure>
            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
              <div className="flex flex-col items-start gap-2">
                <h5 className="text-gray-200 dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
                  Advanced Monitoring
                </h5>
                <p className="text-[#a1a1aa] dark:text-dark-text-secondary font-normal md:text-lg">
                  CentralAxis provides cutting-edge monitoring solutions for
                  your data center, offering real-time insights and
                  comprehensive analytics to optimize performance, reduce costs,
                  and enhance reliability.
                </p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {[
                  "Real-time performance metrics and predictive analytics",
                  "Automated alerts and intelligent incident response",
                  "Comprehensive reporting and trend analysis",
                ].map((text, index) => (
                  <li
                    key={index}
                    className="text-[#a1a1aa] dark:text-dark-text-secondary flex items-center gap-4 font-normal"
                  >
                    <span
                      className="bg-[#27272a] dark:bg-dark-surface-tertiary flex size-6 items-center justify-center rounded-full"
                      style={{ minWidth: "1.5rem" }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-text-tertiary dark:text-dark-text-tertiary"
                      >
                        <path
                          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Networking Management Block */}

          <article className="bg-[#18181b] border-[#18181b] flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "var(--radius)",
                  display: "block",
                  height: "100%",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              >
                <img
                  src="https://www.centralaxis.com/posters/networking.png"
                  alt="Video poster"
                />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    aspectRatio: "16/9",
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    border: "none",
                    objectFit: "contain",
                    borderRadius: "var(--radius)",
                  }}
                  poster="/posters/monitoring.png"
                >
                  <source src="/hb-monitoring.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </figure>
            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
              <div className="flex flex-col items-start gap-2">
                <h5 className="text-gray-200 dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
                 Network Management and Monitoring
                </h5>
                <p className="text-[#a1a1aa] dark:text-dark-text-secondary font-normal md:text-lg">
                  Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.
                </p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {[
                  "Real-time network performance monitoring and bandwidth optimization",
                  "Automated network security and threat detection",
                  "Advanced network diagnostics and troubleshooting tools",
                ].map((text, index) => (
                  <li
                    key={index}
                    className="text-[#a1a1aa] dark:text-dark-text-secondary flex items-center gap-4 font-normal"
                  >
                    <span
                      className="bg-[#27272a] dark:bg-dark-surface-tertiary flex size-6 items-center justify-center rounded-full"
                      style={{ minWidth: "1.5rem" }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-text-tertiary dark:text-dark-text-tertiary"
                      >
                        <path
                          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </article>





                    {/* Advanced Monitoring Block */}
          <article className="bg-[#18181b] border-[#18181b] flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "var(--radius)",
                  display: "block",
                  height: "100%",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              >
                <img
                  src="#"
                  alt=""
                />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    aspectRatio: "16/9",
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    border: "none",
                    objectFit: "contain",
                    borderRadius: "var(--radius)",
                  }}
                  poster="/posters/monitoring.png"
                >
                  <source src="/hb-monitoring.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </figure>
            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
              <div className="flex flex-col items-start gap-2">
                <h5 className="text-gray-200 dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
                  Asset Management
                </h5>
                <p className="text-[#a1a1aa] dark:text-dark-text-secondary font-normal md:text-lg">
                 Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease.
                </p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {[
                  "RAutomated inventory tracking and lifecycle management",
                  "Intelligent ticketing based on asset health and performance",
                  "Intelligent ticketing based on asset health and performance",
                ].map((text, index) => (
                  <li
                    key={index}
                    className="text-[#a1a1aa] dark:text-dark-text-secondary flex items-center gap-4 font-normal"
                  >
                    <span
                      className="bg-[#27272a] dark:bg-dark-surface-tertiary flex size-6 items-center justify-center rounded-full"
                      style={{ minWidth: "1.5rem" }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-text-tertiary dark:text-dark-text-tertiary"
                      >
                        <path
                          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Networking Management Block */}

          <article className="bg-[#18181b] border-[#18181b] flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "var(--radius)",
                  display: "block",
                  height: "100%",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              >
                <img
                  src="#"
                  alt=""
                />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    aspectRatio: "16/9",
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    border: "none",
                    objectFit: "contain",
                    borderRadius: "var(--radius)",
                  }}
                  poster="/posters/monitoring.png"
                >
                  <source src="/hb-monitoring.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </figure>
            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
              <div className="flex flex-col items-start gap-2">
                <h5 className="text-gray-200 dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
                 A Single Pane of Glass
                </h5>
                <p className="text-[#a1a1aa] dark:text-dark-text-secondary font-normal md:text-lg">
                 A unified view across all of your BMS and EPMS systems, tailored to your needs.
                </p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {[
                  "Comprehensive visibility across all of your colocation infrastructure",
                  "Customizable interface tailored to your specific operational requirements and priorities.",
                  "Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management.",
                ].map((text, index) => (
                  <li
                    key={index}
                    className="text-[#a1a1aa] dark:text-dark-text-secondary flex items-center gap-4 font-normal"
                  >
                    <span
                      className="bg-[#27272a] dark:bg-dark-surface-tertiary flex size-6 items-center justify-center rounded-full"
                      style={{ minWidth: "1.5rem" }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-text-tertiary dark:text-dark-text-tertiary"
                      >
                        <path
                          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </article>







                    {/* Advanced Monitoring Block */}
          <article className="bg-[#18181b] border-[#18181b] flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "var(--radius)",
                  display: "block",
                  height: "100%",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              >
                <img
                  src="#"
                  alt=""
                />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    aspectRatio: "16/9",
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    border: "none",
                    objectFit: "contain",
                    borderRadius: "var(--radius)",
                  }}
                  poster="/posters/monitoring.png"
                >
                  <source src="/hb-monitoring.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </figure>
            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
              <div className="flex flex-col items-start gap-2">
                <h5 className="text-gray-200 dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
                 Built-In Compliance
                </h5>
                <p className="text-[#a1a1aa] dark:text-dark-text-secondary font-normal md:text-lg">
                 CentralAxis provides compliance as a service for data centers.
                </p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {[
                  "Track data for EU, US, and global regulatary standards.",
                  "We guarantee compliance and handle every step between monitoring and reporting.",
                ].map((text, index) => (
                  <li
                    key={index}
                    className="text-[#a1a1aa] dark:text-dark-text-secondary flex items-center gap-4 font-normal"
                  >
                    <span
                      className="bg-[#27272a] dark:bg-dark-surface-tertiary flex size-6 items-center justify-center rounded-full"
                      style={{ minWidth: "1.5rem" }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-text-tertiary dark:text-dark-text-tertiary"
                      >
                        <path
                          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Networking Management Block */}

          <article className="bg-[#18181b] border-[#18181b] flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "var(--radius)",
                  display: "block",
                  height: "100%",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              >
                <img
                  src="#"
                  alt=""
                />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    aspectRatio: "16/9",
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    border: "none",
                    objectFit: "contain",
                    borderRadius: "var(--radius)",
                  }}
                  poster="/posters/monitoring.png"
                >
                  <source src="/hb-monitoring.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </figure>
            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
              <div className="flex flex-col items-start gap-2">
                <h5 className="text-gray-200 dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
                 Data Center Planning
                </h5>
                <p className="text-[#a1a1aa] dark:text-dark-text-secondary font-normal md:text-lg">
                 Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever.
                </p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {[
                  "Model new architectures and see detailed implications on power and cooling needs.",
                  "Design unique specifications for your data center.",
                  "Our continuous monitoring is the most advanced on the market, lowering costs while increasing reliability.",
                ].map((text, index) => (
                  <li
                    key={index}
                    className="text-[#a1a1aa] dark:text-dark-text-secondary flex items-center gap-4 font-normal"
                  >
                    <span
                      className="bg-[#27272a] dark:bg-dark-surface-tertiary flex size-6 items-center justify-center rounded-full"
                      style={{ minWidth: "1.5rem" }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-text-tertiary dark:text-dark-text-tertiary"
                      >
                        <path
                          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </article>








        </div>
      </section>
    </div>
  );
}

export default Modernizing;
