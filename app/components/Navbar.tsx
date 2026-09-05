"use client";

export default function Navbar() {
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-10 py-6 bg-black z-50">
      <h1
        onClick={scrollToTop}
        className="text-xl font-bold text-white cursor-pointer"
      >
        Beyond The World
      </h1>
      <div className="flex gap-8 text-sm text-white">
        <a href="#about" onClick={scrollToSection("about")}>About</a>
        <a href="#music" onClick={scrollToSection("music")}>Music</a>
        <a href="#projects" onClick={scrollToSection("projects")}>Projects</a>
        <a href="#socials" onClick={scrollToSection("socials")}>Socials</a>
        <a href="#contact" onClick={scrollToSection("contact")}>Contact</a>
      </div>
    </nav>
  );
}