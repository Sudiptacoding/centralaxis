import Image from "next/image";
import React from "react";

function DynamicResource() {
  return (
    <div className="bg-[#0d1117] text-gray-50">
      <section className="relative flex flex-col items-center gap-10 py-14 lg:container md:py-[72px] lg:mx-auto lg:flex-row lg:gap-0 lg:p-28">
        <div className="container relative top-0 mx-auto shrink self-stretch px-6 lg:w-1/2 lg:pl-0 lg:pr-12 xl:pr-20">
          <div className="sticky bottom-0 top-[calc(var(--header-height)+40px)] flex flex-col gap-10">
            <div className="flex flex-col items-start gap-3 self-start">
              <h3 className="bg-[#18181b] text-[#71717a] dark:bg-dark-surface-secondary dark:text-dark-text-tertiary flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base">
                Built for Scale
              </h3>
              <div className="flex max-w-[800px] flex-col items-start justify-center gap-1 self-start">
                <h4
                  className="text-pretty text-left text-3xl font-medium md:text-4xl"
                  title="Supercharge Team Productivity"
                >
                  Dynamic Resource Management
                </h4>
              </div>
              <p className="text-[#71717a] dark:text-dark-text-tertiary max-w-screen-md text-pretty text-left text-lg font-light md:text-xl">
                Seamlessly expand from racks to data centers. Our system grows
                with you, automatically managing resources across your entire
                infrastructure.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex-1 shrink-0 lg:w-1/2 lg:flex-1">
          <div className="no-scrollbar flex gap-10 overflow-auto px-6 lg:flex-col lg:px-0">
            <article className="bg-[#18181b] border-[#18181b] dark:bg-dark-surface-secondary flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-border p-4 lg:w-full lg:flex-row lg:p-5">
              <figure className="bg-gray-50 dark:bg-dark-surface-tertiary flex size-12 shrink-0 items-center justify-center rounded-full p-3">
                <Image
                  src="https://assets.basehub.com/fa068a12/4tjfOxi91wk29BRy6jH1p/mail.svg"
                  alt="Resource Management Icon"
                  width={24}
                  height={24}
                  loading="lazy"
                  className="dark:invert"
                  priority={false}
                />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium">Resource Management</h5>
                <p className="text-[#71717a] dark:text-dark-text-tertiary text-pretty">
                  See all of your resources in one place, update issues, and
                  dynamically plan your resources.
                </p>
              </div>
            </article>

            <article className="bg-[#18181b] border-[#18181b] dark:bg-dark-surface-secondary flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-border p-4 lg:w-full lg:flex-row lg:p-5">
              <figure className="bg-gray-50 dark:bg-dark-surface-tertiary flex size-12 shrink-0 items-center justify-center rounded-full p-3">
                <Image
                  src="https://assets.basehub.com/fa068a12/xGzl38RZpWQq8bij8Hzhu/zap.svg"
                  alt="Resource Management Icon"
                  width={24}
                  height={24}
                  loading="lazy"
                  className="dark:invert"
                  priority={false}
                />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium">Deployment Automation</h5>
                <p className="text-[#71717a] dark:text-dark-text-tertiary text-pretty">
                  From design, sourcing, manufacturing, and deployment - our
                  system automates the entire process.
                </p>
              </div>
            </article>

            <article className="bg-[#18181b] border-[#18181b] dark:bg-dark-surface-secondary flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-border p-4 lg:w-full lg:flex-row lg:p-5">
              <figure className="bg-gray-50 dark:bg-dark-surface-tertiary flex size-12 shrink-0 items-center justify-center rounded-full p-3">
                <Image
                  src="https://assets.basehub.com/fa068a12/bp99UZ-NioE-mvd_ZLLh-/bar-chart-2.svg"
                  alt="Resource Management Icon"
                  width={24}
                  height={24}
                  loading="lazy"
                  className="dark:invert"
                  priority={false}
                />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium">Networking</h5>
                <p className="text-[#71717a] dark:text-dark-text-tertiary text-pretty">
                  Ensure that your networking infrastructure is always in place
                  and ready to scale with your deployments.
                </p>
              </div>
            </article>

            <article className="bg-[#18181b] border-[#18181b] dark:bg-dark-surface-secondary flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-border p-4 lg:w-full lg:flex-row lg:p-5">
              <figure className="bg-gray-50 dark:bg-dark-surface-tertiary flex size-12 shrink-0 items-center justify-center rounded-full p-3">
                <Image
                  src="https://assets.basehub.com/fa068a12/ZJG_2vVCKgVzSUrxdDMHo/smile.svg"
                  alt="Resource Management Icon"
                  width={24}
                  height={24}
                  loading="lazy"
                  className="dark:invert"
                  priority={false}
                />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium">Firmware Versioning</h5>
                <p className="text-[#71717a] dark:text-dark-text-tertiary text-pretty">
                  Ensure that your firmware is always up to date and secure with
                  our automated versioning system.
                </p>
              </div>
            </article>

            <article className="bg-[#18181b] border-[#18181b] dark:bg-dark-surface-secondary flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-border p-4 lg:w-full lg:flex-row lg:p-5">
              <figure className="bg-gray-50 dark:bg-dark-surface-tertiary flex size-12 shrink-0 items-center justify-center rounded-full p-3">
                <Image
                  src="https://assets.basehub.com/fa068a12/IDiRkDVimmZ2V_id1-FX7/command.svg"
                  alt="Resource Management Icon"
                  width={24}
                  height={24}
                  loading="lazy"
                  className="dark:invert"
                  priority={false}
                />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium">Digital Twins</h5>
                <p className="text-[#71717a] dark:text-dark-text-tertiary text-pretty">
                  Plan capacity intelligently with our digital twin technology.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DynamicResource;
