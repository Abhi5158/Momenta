const activities = [
  { emoji: "🏏", title: "Cricket Match" },
  { emoji: "☕", title: "Coffee Chat" },
  { emoji: "🎬", title: "Movie Night" },
  { emoji: "📚", title: "Study Session" },
  { emoji: "🎮", title: "Gaming Squad" },
  { emoji: "📸", title: "Photo Walk" },
  { emoji: "🏃", title: "Morning Run" },
  { emoji: "🛍️", title: "Shopping Trip" },
];

const ActivityExamples = () => {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32 lg:px-20">
      
      <div className="text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          ACTIVITY EXAMPLES
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Anything can become a moment.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Coffee chats, cricket matches, movie nights, study sessions,
          gaming squads, photo walks and more.
        </p>
      </div>

      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {activities.map((activity) => (
          <div
            key={activity.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/50"
          >
            <div className="text-4xl">{activity.emoji}</div>

            <h3 className="mt-4 text-xl font-semibold">
              {activity.title}
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Find explorers nearby and make it happen.
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ActivityExamples;