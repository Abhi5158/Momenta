import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import ActivityExamples from "./sections/ActivityExamples";
import Safety from "./sections/Safety";

function App() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white overflow-hidden">
      <Hero />
      <HowItWorks />
      <ActivityExamples />
      <Safety />
    </main>
  );
}

export default App;