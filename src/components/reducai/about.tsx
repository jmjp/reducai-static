import { Button } from "../ui/button";
import Logo from "./logo";

export default function About() {
    return (
        <div className="flex flex-col pt-80 md:pt-40 items-center justify-center mt-20 text-white">
            <Logo to="#" className="text-5xl mb-14" />
            <section className="max-w-lg text-justify space-y-10">
                <div>
                    <p className="text-3xl mb-4">O que é a Reducai?</p>
                    <p className="text-xl">Nossa missão é contribuir para a reinserção social de pessoas privadas de liberdade. Através de cursos profissionalizantes de qualidade, oferecemos ferramentas para que nossos alunos possam construir um novo futuro. Acreditamos que a educação profissional é fundamental para a construção de uma sociedade mais justa e inclusiva.</p>
                </div>
                <div>
                    <p className="text-3xl mb-4">Qual a missão da Reducai?</p>
                    <p className="text-xl">Desenvolver o potencial humano de pessoas privadas de liberdade, oferecendo cursos profissionalizantes que estimulem o aprendizado contínuo e a autonomia, preparando-as para um futuro com mais oportunidades.</p>
                </div>
                <Button variant="outline" size="lg" className="bg-transparent w-full text-xl py-6" asChild>
                    <a href="#how-it-works">Quer saber como funciona?</a>
                </Button>
            </section>
        </div>
    )
}