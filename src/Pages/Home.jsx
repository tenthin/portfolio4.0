import Hero from "../Components/layout/Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <main className="space-y-32">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
