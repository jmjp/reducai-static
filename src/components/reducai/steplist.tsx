
interface Step { title: string, description: string }

const steps: Step[] = [
  {
    title: "Realiza cadastro na página do aluno",
    description: "Clique aqui para realizar o cadastro na página do aluno"
  },
  {
    title: "Seleciona o curso",
    description: "Selecione um curso entre os mais de 100 cursos disponíveis no site da Reducai"
  },
  {
    title: "Imprima a autorização do aluno e encaminhe para o responsável",
    description: "Imprima a autorização do aluno preenchida com os dados e encaminhe até o orgão responsável"
  },
  {
    title: "Realiza matricula",
    description: "Você já está quase lá para iniciar a jornada. Clique aqui para realizar a matricula"
  },
  {
    title: "Realiza o pagamento",
    description: "Clique aqui para realizar o pagamento"
  },
  {
    title: "Inicia a jornada",
    description: "Clique aqui para iniciar a jornada"
  },
  {
    title: "Recebe certificado e redução da pena",
    description: "Clique aqui para receber o certificado e redução da pena"
  }
];


export default function StepList() {
  return (
    <div className="max-w-2xl mx-auto p-6 border-2 bg-white/20 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Passo a Passo</h2>
      <ol className="list-decimal pl-6 space-y-4 text-white">
        {steps.map((step: Step, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-white text-card-foreground rounded-full flex items-center justify-center mr-4">
              {index + 1}
            </div>
            <div className="flex flex-col text-start">
              <span className="font-bold text-xl mb-1">{step.title}</span>
              <span className="text-card/80">{step.description}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

