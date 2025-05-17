export default function CustomPage({ title }) {
  return (
    <div className="bg-[#09090b]">
      <article className="mx-auto max-w-6xl px-4 py-8  text-white">
        <h1 className="mb-8 text-4xl font-bold ">{title}</h1>

        <section className="relative mb-12">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <video
              className="absolute left-0 top-0 h-full w-full rounded-lg object-cover shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/landing/hb-monitoring.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-4 text-center text-sm text-gray-400 sm:text-base">
            Real-time monitoring and asset management dashboard
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
            Intelligent Infrastructure Management
          </h2>
          <p className="mb-4 text-lg leading-relaxed sm:text-xl">
            CentralAxis delivers an integrated platform that combines advanced
            monitoring capabilities with comprehensive asset management. Our
            solution provides real-time insights, predictive analytics, and
            automated maintenance scheduling to optimize your data center
            operations and extend infrastructure lifespan.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            Comprehensive Monitoring Features
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-[#121214] p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                Advanced Performance Monitoring
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-300">
                <li>
                  Real-time server and application performance tracking with
                  ML-powered anomaly detection
                </li>
                <li>
                  Predictive analytics for capacity planning and resource
                  optimization
                </li>
                <li>
                  Custom alerting thresholds with automated incident response
                </li>
                <li>Historical trend analysis and performance forecasting</li>
              </ul>
            </div>
            <div className="rounded-lg bg-[#121214] p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                Power &amp; Environmental Monitoring
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-300">
                <li>
                  Granular power monitoring with per-device energy profiling
                </li>
                <li>
                  Advanced PUE optimization with AI-driven recommendations
                </li>
                <li>3D thermal mapping with predictive cooling analytics</li>
                <li>
                  Environmental sensor integration and compliance tracking
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-[#121214] p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                Asset Lifecycle Management
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-300">
                <li>Automated asset discovery and inventory management</li>
                <li>
                  Predictive maintenance scheduling with failure prediction
                </li>
                <li>Warranty and service contract tracking</li>
                <li>Asset utilization optimization and replacement planning</li>
              </ul>
            </div>
            <div className="rounded-lg bg-[#121214] p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                Infrastructure Analytics
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-300">
                <li>Comprehensive infrastructure health scoring</li>
                <li>Cost analysis and optimization recommendations</li>
                <li>Capacity trending and growth forecasting</li>
                <li>Custom reporting and compliance documentation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            Key Benefits
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-[#121214] p-6 shadow-md">
              <h3 className="mb-3 text-lg font-semibold sm:text-xl">
                Operational Excellence
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-300">
                <li>Reduce downtime through predictive maintenance</li>
                <li>Optimize resource utilization</li>
                <li>Streamline maintenance workflows</li>
              </ul>
            </div>
            <div className="rounded-lg bg-[#121214] p-6 shadow-md">
              <h3 className="mb-3 text-lg font-semibold sm:text-xl">
                Cost Optimization
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-300">
                <li>Reduce energy consumption by up to 40%</li>
                <li>Extend equipment lifespan</li>
                <li>Optimize maintenance costs</li>
              </ul>
            </div>
            <div className="rounded-lg bg-[#121214] p-6 shadow-md">
              <h3 className="mb-3 text-lg font-semibold sm:text-xl">
                Risk Management
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-300">
                <li>Ensure regulatory compliance</li>
                <li>Prevent equipment failures</li>
                <li>Enhance security monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/landing/hb-monitoring.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 p-8 text-center">
            <h2 className="mb-4 text-3xl font-semibold sm:text-4xl text-white">
              Try It Today
            </h2>
            <p className="mb-6 text-lg sm:text-xl text-white">
              See how CentralAxis can transform your infrastructure management
            </p>
            <a
              href="https://calendly.com/margarita-centralaxis/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded bg-white px-8 py-3 text-black transition-colors hover:bg-gray-100">
                Schedule a Chat
              </button>
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
