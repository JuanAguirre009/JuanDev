import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Stack } from "./components/sections/Stack";

function App() {
  return (
    <main className="relative min-h-screen bg-dark-50 text-dark-700 dark:bg-[#050b1d] dark:text-dark-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,168,232,0.18),rgba(2,6,23,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_10%,rgba(7,237,255,0.12),rgba(2,6,23,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.05),rgba(2,6,23,0.55))]" />
      </div>

      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Stack />
      <Footer />
    </main>
  );
}

export default App;
