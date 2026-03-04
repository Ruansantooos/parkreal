import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BusinessModels from "./components/BusinessModels";
import Team from "./components/Team";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-cyan-500/30 print:bg-zinc-950">
      <Navbar />
      <Hero />
      <About />
      <BusinessModels />
      <Team />
      <Features />
      <Benefits />
      <Contact />
      <BackToTop />
    </div>
  );
}
