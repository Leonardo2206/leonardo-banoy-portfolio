import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Trajectory } from "./components/Trajectory";
import { site } from "./data/portfolio";
import { useCvAvailable } from "./hooks/useCvAvailable";

export default function App() {
  const cvAvailable = useCvAvailable(site.cvPath);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar cvAvailable={cvAvailable} />
      <main id="contenido" className="site-main" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Trajectory />
        <Contact cvAvailable={cvAvailable} />
      </main>
      <Footer />
    </>
  );
}
