import React from "react";

function Hero() {
  return (
    <main className="min-h-[calc(100svh-var(--header-height))] bg-[#0d1117] text-white">
      <section className="relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-10">
        <div className="absolute inset-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-border border-[#ffffff1a]">
          <div className="col-span-1 flex h-full items-center justify-center"></div>
          <div className="col-span-1 flex h-full items-center justify-center border-x border-border border-[#ffffff1a]"></div>
          <div className="col-span-1 flex h-full items-center justify-center"></div>
        </div>

        <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 aspect-square w-[520px] -translate-x-1/2 rounded-full blur-[200px] bg-accent-500/40 bg-[#8b5cf666]"></figure>
        <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full opacity-50 blur-[100px] bg-[#09090b] dark:bg-dark-surface-primary md:block"></figure>
        <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full opacity-50 blur-[100px] bg-[#09090b] dark:bg-dark-surface-primary md:block"></figure>

        <div className="relative z-10 flex flex-col divide-y divide-border divide-[#ffffff1a] pt-[35px]">
          <div className="mx-auto flex min-h-[288px] max-w-[80vw] flex-col items-center justify-center gap-4 px-4 sm:px-16 lg:px-24 text-center">
            <h1 className="text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-tight max-w-screen-lg">
              Data Center Management Software
            </h1>
            <h2 className="text-md md:text-lg text-[#71717a] dark:text-dark-text-tertiary max-w-2xl">
              Increase uptime, reduce costs, automate operations, and stay
              compliant.
            </h2>
            <h2 className="text-md md:text-lg text-[#71717a] dark:text-dark-text-tertiary max-w-2xl">
              Built for colocations, data centers, and cloud providers.
            </h2>
          </div>

          <div className="flex items-start justify-center px-8 sm:px-24 pt-6">
            <div className="flex w-full max-w-[80vw] md:max-w-[392px] flex-col items-center justify-start">
              <a
                href="https://calendly.com/xxx-centralaxis/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-full items-center justify-center  bg-[#8b5cf6] hover:bg-accent-600 text-textOnAccent-primary text-base font-medium ring-control focus-visible:ring-2 transition"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
