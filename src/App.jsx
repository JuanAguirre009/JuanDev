import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Stack } from "./components/sections/Stack";

function App() {
  return (
    <main className="relative min-h-screen bg-dark-50 text-dark-700 dark:bg-[#050b1d] dark:text-dark-100">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-20 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-dark-950"
      >
        Saltar al contenido principal
      </a>

      <div id="main-content">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 animate-gradient-shift bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,168,232,0.15),rgba(2,6,23,0))]" />
          <div className="absolute inset-0 animate-gradient-shift bg-[radial-gradient(ellipse_40%_40%_at_80%_10%,rgba(7,237,255,0.1),rgba(2,6,23,0))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.05),rgba(2,6,23,0.55))]" />
          <div
            className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Stack />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
