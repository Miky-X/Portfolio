import Head from 'next/head'
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Michal Portfolio</title>
      </Head>

        <Header />
        <section id="hero" className="snap-center">
            <Hero />
        </section>

        <section id="about" className="snap-center">
            <About />
        </section>

        <section id="experience" className="snap-center">
            <WorkExperience />
        </section>

        <section id="skills" className="snap-center">
            <Skills />
        </section>

        <section id="projects" className="snap-center">
            <Projects />
        </section>

        <section id="contact" className="snap-center">
            <Contact />
        </section>
    </div>
  );
};
