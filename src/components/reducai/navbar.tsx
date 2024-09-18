import { Button } from "../ui/button";
import Logo from "./logo";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

export default function Navbar() {
  const _routes = routes;
  const _defaultStyle = "sticky top-5 animate-[opacity_1s_ease-in-out_forwards] transition-all duration-500 mb-10 flex flex-col md:flex-row gap-x-2 p-4 border-border border-1 rounded-lg z-50 md:items-center justify-between bg-white md:bg-transparent bg-opacity-30 backdrop-blur-lg";
  const _onScrolled = "md:bg-grey-500/20 bg-opacity-30 backdrop-blur-lg";
  const [scrolled, setScrolled] = useState(false);
  const [hashName, setHashName] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 150)
    })
    window.addEventListener("hashchange", () => {
      setHashName(window.location.hash)
    })
  })
  return (
    <nav className={twMerge(_defaultStyle, scrolled  ? _onScrolled : "")}>
      <Logo to="#home" />
      <div className="flex flex-col mt-4 md:mt-0 md:flex-row  gap-x-10 text-white">
        {_routes.map((route) => (
          <a key={route.path} className={twMerge("hover:text-white/30 transition duration-500", hashName === route.path ? "font-bold" : "")} href={route.path}>{route.name}</a>
        ))}
      </div>
      <div>
        <Button variant="outline" className="transition-all w-full md:w-auto mt-4 md:mt-0 duration-500 hover:-translate-y-1 mr-4" asChild>
          <a href="/dashboard">Cadastre-se</a>
        </Button>
        <Button variant="default" className="transition-all w-full md:w-auto mt-4 md:mt-0 duration-500 hover:-translate-y-1" asChild>
          <a href="/dashboard">Área do aluno</a>
        </Button>
      </div>
    </nav>
  )
}


// home
// sobre nos
// como funciona
// cursos
// contato

const routes: {
  path: string;
  name: string;
}[] = [
    {
      path: "#about",
      name: "Sobre nós"
    },
    {
      path: "#how-it-works",
      name: "Como funciona?"
    },
    {
      path: "#courses",
      name: "Cursos"
    },
    {
      path: "#contact",
      name: "Contato"
    }
  ]