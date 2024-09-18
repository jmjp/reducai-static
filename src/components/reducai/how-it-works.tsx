import { Button } from "../ui/button";
import StepList from "./steplist";

export default function HowItWorks() {
    return (
        <div className="flex flex-col pt-80 md:pt-40 items-center min-h-screen text-center text-white font-semibold">
            <p className="text-2xl mb-4">Como funciona?</p>
            <StepList />
            <Button variant="secondary" size="lg" className="max-w-lg mt-8 text-xl py-6" asChild>
                <a href="#courses">Cursos disponíveis </a>
            </Button>
        </div>
    )
}