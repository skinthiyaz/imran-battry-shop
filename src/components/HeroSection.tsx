const HeroSection = () => {
  return (
    <section className="relative bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Power when it matters.</h1>
          <p className="mt-4 text-lg text-neutral-300">Authorized batteries and same‑day assistance.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-[#7CC242] px-5 py-3 font-semibold text-black hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-lime-400" aria-label="Emergency jump start">Emergency Jump Start</a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-[#7CC242] px-5 py-3 font-semibold text-[#7CC242] hover:bg-[#7CC242] hover:text-black focus:outline-none focus:ring-2 focus:ring-lime-400" aria-label="Get help">Get Help</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-white/10 px-5 py-3 font-semibold hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-lime-400" aria-label="Call technician now">Call Technician Now</a>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 ring-1 ring-white/10"></div>
      </div>
    </section>
  );
};

export default HeroSection;