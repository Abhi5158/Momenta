import logo from "../assets/logo.png";
const Hero = () => {
  return (
     <main className="min-h-screen bg-[#09090B] text-white overflow-hidden">
      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-8 lg:px-20">

            {/* Background Glow */}
    <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

    {/* Left Side */}
    <div className="relative z-10 max-w-3xl lg:-translate-y-8">

      <div className="mb-8 flex items-center gap-3">
          <img
            src={logo}
            alt="Momenta"
            className="h-16 w-18"
          />
          <span className="text-sm font-semibold tracking-[0.3em] text-zinc-400">
            MOMENTA
          </span>
        </div>

      <h1 className="text-5xl font-bold leading-tight md:text-6xl">
        Life&apos;s better when plans happen.
      </h1>

      <p className="mt-6 max-w-xl text-lg text-zinc-400 md:text-xl">
        Turn &quot;we should&quot; into &quot;we did.&quot;
        Create activities, discover people nearby, and make every plan happen.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button
            onClick={() =>
                document
                  .getElementById("Waitlist")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="rounded-full bg-violet-600 px-8 py-4 font-medium transition-all duration-300 hover:bg-violet-500 hover:scale-105"
              >
              Become an Early Explorer
              </button>

        <button 
        onClick={() =>
                document
                  .getElementById("HowItWorks")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
        className="rounded-full border border-zinc-700 px-8 py-4 font-medium text-zinc-300 transition-all duration-300 hover:border-zinc-500 hover:text-white hover:scale-105">
          See How It Works
        </button>
      </div>

    </div>

    {/* Right Side Activity Cards */}
    <div className="relative hidden h-[650px] flex-1 lg:flex items-center justify-center">

      {/* Movie Card */}
      <div className="absolute top-0 right-12 rotate-[-4deg] w-64 rounded-3xl border border-zinc-700 bg-zinc-800/80 p-5 backdrop-blur-md">
        <p className="text-3xl">🎬</p>
        <h3 className="mt-3 font-semibold">Movie Night</h3>
        <p className="mt-2 text-sm text-zinc-400">
          Need 1 Explorer
        </p>
        <p className="mt-4 text-xs text-zinc-500">
          Tonight • 8:30 PM
        </p>
      </div>

      {/* Coffee Card */}
      <div className="absolute top-52 left-10 rotate-[4deg] w-60 rounded-3xl border border-zinc-700 bg-zinc-800/80 p-5 backdrop-blur-md">
        <p className="text-3xl">☕</p>
        <h3 className="mt-3 font-semibold">Coffee Chat</h3>
        <p className="mt-2 text-sm text-zinc-400">
          Need 1 Explorer
        </p>
        <p className="mt-4 text-xs text-zinc-500">
          Today • 6:00 PM
        </p>
      </div>

      {/* Cricket Card */}
      <div className="absolute bottom-15 right-10 rotate-[4deg] w-64 rounded-3xl border border-zinc-700 bg-zinc-800/80 p-5 backdrop-blur-md">
        <p className="text-3xl">🏏</p>
        <h3 className="mt-3 font-semibold">Cricket Match</h3>
        <p className="mt-2 text-sm text-zinc-400">
          Need 2 Players
        </p>
        <p className="mt-4 text-xs text-zinc-500">
          Tomorrow • 7:00 AM
        </p>
      </div>

    </div>

  </section>
</main>
  );
};

export default Hero;