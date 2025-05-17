import React from 'react'

function FutureData() {
  return (
    <div className='bg-[#0d1117]'>
        <section className="container relative mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px]">
  <article className="bg-[#7c3aed1a] dark:bg-accent-600/10 flex flex-col justify-center gap-9 self-stretch rounded-xl p-6 lg:flex-row lg:justify-between lg:p-10">
    
   
    <div className="flex flex-col gap-2">
      <h4 className="text-[#fafafa] dark:text-dark-text-primary text-3xl font-medium lg:text-4xl">
        We've Built the Future of Data Centers
      </h4>
      <p className="text-[#a1a1aa] dark:text-dark-text-secondary text-lg lg:text-xl">
        Contact our team for a demo
      </p>
    </div>
    
  
    <div className="grid grid-cols-2 items-center gap-2 md:flex lg:flex-col">
      <a
        className="ring-control bg-[#8b5cf6] hover:bg-accent-600 text-gray-50 border-accent-600 inline-flex h-8 shrink-0 items-center justify-center gap-1 rounded-full px-3.5 text-sm font-normal outline-none focus-visible:ring-2 md:px-5"
        href="https://calendly.com/margarita-centralaxis/30min"
        target="_blank" rel="noopener noreferrer" aria-label="Set up a time for demo"
      >
        Set Up a Time
      </a>
      <a
        className="ring-control bg-[#18181b] text-gray-50 border-[#27272a] dark:bg-dark-surface-secondary dark:text-dark-text-primary dark:border-dark-border hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary inline-flex h-8 shrink-0 items-center justify-center gap-1 rounded-full border border-border px-3.5 text-sm font-normal outline-none focus-visible:ring-2 md:px-5"
        href="/learn-more"
        aria-label="Learn more about data centers"
      >
        Learn More
      </a>
    </div>

  </article>
</section>

    </div>
  )
}

export default FutureData