import { Hello } from "@/components/home/Hello";
import { Hero } from "@/components/home/Hero";
import { Contact, Experience, Now, Projects, Recognition, Toolkit, Work } from "@/components/home/Sections";
import { Statement } from "@/components/home/Statement";

export default function Home() {
  return (
    <main>
      <Hero />
      <Hello />
      <Statement />
      <Work />
      <Projects />
      <Experience />
      <Recognition />
      <Toolkit />
      <Now />
      <Contact />
    </main>
  );
}
