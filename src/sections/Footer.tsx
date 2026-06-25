const Footer = () => {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-8 py-12 lg:px-20">

        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

          <div>
            <h3 className="text-xl font-bold">
              MOMENTA
            </h3>

            <p className="mt-2 text-zinc-400">
              Life&apos;s better when plans happen.
            </p>
          </div>

          <div className="text-sm text-zinc-500">
            Built in India 🇮🇳
          </div>

        </div>

        <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          © 2026 Momenta. All rights reserved.<br/>
          Making more moments happen.
        </div>

      </div>
    </footer>
  );
};

export default Footer;