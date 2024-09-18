
import { Button } from "../ui/button";


export default function Contact() {
    return (
        <div className="flex flex-col pt-80 md:pt-40 items-center justify-center mt-20 text-white space-y-4 text-center">
             <p className="text-3xl">Nos envie um email para contato@reducai.com.br</p>
             <p className="text-xl">ou clique no botão abaixo para abrir seu app de email</p>
            <Button onClick={() => window.open("mailto:contato@reducai.com.br?subject=Contato%20via%20site", "_self")}>Falar com nosso time</Button>
        </div>
    )
}