import { Hero } from "../components/sections/Hero";
import { FeaturedWork } from "../components/sections/FeaturedWork";
import { AboutStrip } from "../components/sections/AboutStrip";
import { Experience } from "../components/sections/Experience";
import { SelectedProjects } from "../components/sections/SelectedProjects";
import { ContactCTA } from "../components/sections/ContactCTA";
import { Reveal } from "../components/ui/Reveal";

export function Home() {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <FeaturedWork />
      </Reveal>
      <Reveal>
        <AboutStrip />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <SelectedProjects />
      </Reveal>
      <Reveal>
        <ContactCTA />
      </Reveal>
    </>
  );
}
