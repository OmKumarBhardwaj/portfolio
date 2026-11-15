import { Hero } from "@/components/v2/hero";
import { About, Contact, Experience, Projects, Skills } from "@/components/v2/sections";

export default function Page() {
  return (
    <main className="relative overflow-x-clip">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
