import { About } from "@/components/about/About";
import { Projects } from "@/components/projects/Projects";
import { Contact } from "@/components/contact/Contact";
import { Skills } from "@/components/skills/Skills";

export default function HomePage() {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}