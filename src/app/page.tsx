import { AiDevelopment } from "@/components/AiDevelopment";
import { BackToTop } from "@/components/BackToTop";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div id="about" />
        <Experience />
        <Projects />
        <Skills />
        <AiDevelopment />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
