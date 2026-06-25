
const HowItWorks = () => {
return (
<section
id="HowItWorks"
className="mx-auto max-w-7xl px-8 py-32 lg:px-20">
      <div className="text-center">
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
      HOW IT WORKS
    </p>

    <h2 className="text-4xl font-bold md:text-5xl">
      From idea to moment in three simple steps.
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
      Whether it's cricket, coffee, a movie, or a study session,
      creating plans should be simple.
    </p>
  </div>

  <div className="mt-20 grid gap-8 md:grid-cols-3">

    {/* Step 1 */}
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm">
      <div className="mb-6 text-5xl">📝</div>

      <h3 className="text-2xl font-semibold">
        Create a Plan
      </h3>

      <p className="mt-4 text-zinc-400">
        Create an activity in seconds. Choose what you're doing,
        when it happens, and how many explorers you're looking for.
      </p>
    </div>

    {/* Step 2 */}
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm">
      <div className="mb-6 text-5xl">👋</div>

      <h3 className="text-2xl font-semibold">
        Find Explorers
      </h3>

      <p className="mt-4 text-zinc-400">
        Nearby explorers discover your activity and request to join.
        You decide who joins your plan.
      </p>
    </div>

    {/* Step 3 */}
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm">
      <div className="mb-6 text-5xl">✨</div>

      <h3 className="text-2xl font-semibold">
        Make It Happen
      </h3>

      <p className="mt-4 text-zinc-400">
        Meet up, enjoy the activity, and turn a simple plan into
        a memorable moment.
      </p>
    </div>

  </div>
</section>

    );
};

export default HowItWorks;