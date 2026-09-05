import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Artwork from "./components/Artwork";
import About from "./components/About";
import Music from "./components/Music";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Contact from "./components/Contact";
import ScrollReset from "./components/ScrollReset";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <ScrollReset />
      <Intro />
      <Navbar />
      <Artwork />
      <About />
      <Music />
      <Projects />
      <Socials />
      <Contact />
    </main>
  );
}
