import { ArrowDownCircle } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col items-center pt-32 md:pt-40 justify-evenly min-h-screen text-center text-white font-semibold">
            <section className="space-y-8">
                <h1 className="text-center text-5xl">Estamos transformando a vida de pessoas privadas de liberdade</h1>
                <p className="text-3xl">Oferecemos cursos em diversos níveis, desde o básico até o superior, para que você possa continuar seus direitos de cidadão em ter um futuro digno e prospero</p>
                <p className="text-3xl">Todos tem esse direito e é nosso papel reinvidicar a sua mudança</p>
            </section>
            <a href="#about" className="mt-10 md:mt-0">
                <ArrowDownCircle className="w-10 h-10 text-white mx-auto animate-bounce" />
            </a>
        </div>
    )
}