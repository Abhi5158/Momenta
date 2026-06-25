import { useState } from "react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [activity, setActivity] = useState("");

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzzxCO-57tIxXoMsKtmXtqsn4NsMRXlzo1DlVCeAFXZQLXUJWZnBRFbI_8u4m8pyzo/exec",
      {
        method: "POST",
        body: JSON.stringify({
          email,
          activity,
        }),
      }
    );

    const result = await response.json();

    if (result.success) {
      alert("Welcome to Momenta 🚀");

      setEmail("");
      setActivity("");
    } else {
      alert("Something went wrong.");
    }
  } catch (error) {
    console.error(error);
    alert("Failed to join waitlist.");
  }
};

  return (
    <section
    id="Waitlist"
     className="mx-auto max-w-7xl px-8 py-32 lg:px-20">
      <div className="mx-auto max-w-3xl text-center">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          EARLY EXPLORERS
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Help shape the future of Momenta.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Join our early explorer waitlist and tell us the first
          activity you'd create.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-4"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Email Address"
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/50 px-5 py-4 text-white outline-none transition focus:border-violet-500"
          />

          <textarea
            required
            rows={4}
            value={activity}
            onChange={(e) =>
              setActivity(e.target.value)
            }
            placeholder="What activity would you create first? (Cricket Match, Coffee Chat, Study Group...)"
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/50 px-5 py-4 text-white outline-none transition focus:border-violet-500 resize-none"
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-violet-600 px-6 py-4 font-medium transition-all duration-300 hover:bg-violet-500 hover:scale-[1.02]"
          >
            Become an Early Explorer
          </button>
        </form>

      </div>
    </section>
  );
};

export default Waitlist;