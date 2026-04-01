import { LangProvider } from "./hooks/useLang";
import { Cursor } from "./components/Cursor/Cursor";
import { Nav } from "./sections/Nav/Nav";
import { Hero } from "./sections/Hero/Hero";
import { Work } from "./sections/Work/Work";
import { StandOut } from "./sections/StandOut/StandOut";
import { RightFit } from "./sections/RightFit/RightFit";
import { Testimonials } from "./sections/Testimonials/Testimonials";
import { Stack } from "./sections/Stack/Stack";
import { Contact } from "./sections/Contact/Contact";
import { Footer } from "./sections/Footer/Footer";
import { Marquee } from "./sections/Marquee/Marquee";

export function App() {
  return (
    <LangProvider>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <StandOut />
        <RightFit />
        <Testimonials />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
