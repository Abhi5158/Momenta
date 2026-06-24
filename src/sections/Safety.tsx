const safetyFeatures = [
  {
    emoji: "🔒",
    title: "Verified Profiles",
    description:
      "Know more about who you're meeting before joining an activity.",
  },
  {
    emoji: "📍",
    title: "Public Meetup First",
    description:
      "Encourage first activities in public places for added comfort.",
  },
  {
    emoji: "🚨",
    title: "Safety Tools",
    description:
      "Quick access to reporting, blocking, and emergency assistance.",
  },
  {
    emoji: "🛡️",
    title: "Stay In Control",
    description:
      "Choose who joins your activity and manage requests with confidence.",
  },
];

const Safety = () => {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32 lg:px-20">
      <div className="text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          SAFETY & TRUST
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Designed with safety in mind.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Meeting new people should feel exciting, not uncertain.
          Momenta is built to help explorers stay comfortable and in control.
        </p>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {safetyFeatures.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/50"
          >
            <div className="text-4xl">{feature.emoji}</div>

            <h3 className="mt-4 text-xl font-semibold">
              {feature.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Safety;