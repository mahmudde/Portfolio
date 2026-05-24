import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import InitialScroll from "@/components/InitialScroll";

export default function Home() {
  return (
    <>
      <InitialScroll />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Services />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
