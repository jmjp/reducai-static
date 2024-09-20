import { Button } from "../ui/button";
import Logo from "./logo";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

type SectionKey = 'home' | 'about' | 'how-it-works' | 'courses' | 'contact';


export default function Navbar() {
  const _routes = routes;
  const _defaultStyle = "sticky top-5 animate-[opacity_1s_ease-in-out_forwards] transition-all duration-500 mb-10 flex flex-col md:flex-row gap-x-2 p-4 border-border border-1 rounded-lg z-50 md:items-center justify-between bg-white md:bg-transparent bg-opacity-30 backdrop-blur-lg";
  const _onScrolled = "md:bg-grey-500/20 bg-opacity-30 backdrop-blur-lg";

  const [scrolled, setScrolled] = useState(false);
  const [hashName, setHashName] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuExpanded, setMenuExpanded] = useState(isMobile);

  const titles: Record<SectionKey, string> = {
    home: "Reducai - Inicio",
    about: "Reducai - Sobre nós",
    "how-it-works": "Reducai - Como funciona?",
    courses: "Reducai - Cursos",
    contact: "Reducai - Contato"
  };

  const descriptions: Record<SectionKey, string> = {
    home: "Maior plataforma de cursos a pessoas privadas de liberdade da america latina",
    about: "Plataforma de reinservação social de pessoas privadas de liberdade",
    "how-it-works": "Como funciona o Reducai?",
    courses: "Mais de 1000 cursos para pessoas privadas de liberdade",
    contact: "Fale conosco"
  };

  // Update page title based on the current section
  const updateTitleOnScroll = () => {
    const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section[id]');
    let currentSection: SectionKey = "home";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 200;
      if (window.scrollY >= sectionTop) {
        currentSection = (section.getAttribute('id') || "home") as SectionKey;
        setHashName(`#${currentSection}`);
      }
    });
    document.title = titles[currentSection];
    // Update the page description based on the current section
    document.querySelector('meta[name="description"]')?.setAttribute('content', descriptions[currentSection]);
  };

  // Handle scroll to detect if the navbar should change style
  const handleScroll = () => {
    setScrolled(window.scrollY > 150);
  };

  // Handle hash change for navigation highlighting
  const handleHashChange = () => {
    setHashName(window.location.hash);
    if(isMobile){
      setMenuExpanded(true);
    }
  };

  useEffect(() => {
    // Scroll listener
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", updateTitleOnScroll);
    // Hash change listener
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateTitleOnScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); // Empty dependency array ensures this runs once on mount


  return (
    <nav className={twMerge(_defaultStyle, scrolled ? _onScrolled : "")}>
      <section className="flex justify-between">
        <Logo to="#home" />
        <Button className="md:hidden" variant="outline" onClick={() => setMenuExpanded(!menuExpanded)}>
          menu
        </Button>
      </section>
      <div hidden={menuExpanded}>
        <div className="flex flex-col mt-4 md:mt-0 md:flex-row gap-x-10 text-white">
          {_routes.map((route) => (
            <a
              key={route.path}
              className={twMerge(
                "hover:text-white/30 transition duration-500",
                hashName === route.path ? "font-bold" : ""
              )}
              href={route.path}>
              {route.name}
            </a>
          ))}
        </div>
      </div>
      <div hidden={menuExpanded}>
        <Button variant="outline" className="transition-all w-full md:w-auto mt-4 md:mt-0 duration-500 hover:-translate-y-1 mr-4" asChild>
          <a href="/dashboard">Cadastre-se</a>
        </Button>
        <Button variant="default" className="transition-all w-full md:w-auto mt-4 md:mt-0 duration-500 hover:-translate-y-1" asChild>
          <a href="/dashboard">Área do aluno</a>
        </Button>
      </div>
    </nav>
  );
}

// Routes for navigation
const routes: { path: string; name: string }[] = [
  { path: "#about", name: "Sobre nós" },
  { path: "#how-it-works", name: "Como funciona?" },
  { path: "#courses", name: "Cursos" },
  { path: "#contact", name: "Contato" }
];
