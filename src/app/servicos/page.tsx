'use client'
import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

export default function Servicos() {
  const questions = [
    {
      question: "O que é energia limpa?",
      options: ["Energia gerada a partir de fontes renováveis que não poluem o ambiente", "Energia gerada por combustíveis fósseis", "Energia proveniente de reatores nucleares", "Energia gerada pela queima de madeira"],
      correctAnswer: "Energia gerada a partir de fontes renováveis que não poluem o ambiente",
      points: 100 // Dificuldade: fácil
    },
    {
      question: "Qual das opções abaixo é uma fonte de energia renovável?",
      options: ["Carvão", "Solar", "Petróleo", "Gás natural"],
      correctAnswer: "Solar",
      points: 100 // Dificuldade: fácil
    },
    {
      question: "Qual é o impacto da poluição plástica nos oceanos?",
      options: [
        "Reduz a quantidade de oxigênio disponível",
        "Afeta a vida marinha e pode levar à morte de espécies",
        "Aumenta a temperatura da água",
        "Melhora a qualidade da água"
      ],
      correctAnswer: "Afeta a vida marinha e pode levar à morte de espécies",
      points: 100 // Dificuldade: média
    },
    {
      question: "O que é a pegada de carbono?",
      options: [
        "A quantidade de carbono presente no ar devido à queima de combustíveis fósseis",
        "O impacto ambiental causado pela emissão de gases do efeito estufa",
        "A quantidade de energia consumida em um edifício",
        "A quantidade de plástico reciclado"
      ],
      correctAnswer: "O impacto ambiental causado pela emissão de gases do efeito estufa",
      points: 50 // Dificuldade: média
    },
    {
      question: "Qual das seguintes ações contribui para a preservação da biodiversidade?",
      options: [
        "Desmatamento de áreas naturais para a agricultura",
        "Uso sustentável dos recursos naturais e proteção de habitats",
        "Construção de mais indústrias em áreas de floresta",
        "Aumento do consumo de produtos plásticos"
      ],
      correctAnswer: "Uso sustentável dos recursos naturais e proteção de habitats",
      points: 100 // Dificuldade: fácil
    },
    {
      question: "O que caracteriza uma economia circular?",
      options: [
        "Produção, consumo e descarte de produtos de maneira linear",
        "Descarte de resíduos de maneira indiscriminada",
        "Reutilização de materiais e produtos para reduzir desperdícios",
        "Produção apenas de produtos descartáveis"
      ],
      correctAnswer: "Reutilização de materiais e produtos para reduzir desperdícios",
      points: 50 // Dificuldade: média
    },
    {
      question: "O que é a energia solar?",
      options: [
        "Energia gerada pelo calor do sol, que pode ser convertida em eletricidade",
        "Energia gerada a partir da queima de carvão",
        "Energia gerada a partir de usinas hidrelétricas",
        "Energia produzida a partir do vento"
      ],
      correctAnswer: "Energia gerada pelo calor do sol, que pode ser convertida em eletricidade",
      points: 50 // Dificuldade: fácil
    },
    {
      question: "O que é a biodiversidade?",
      options: [
        "A diversidade de plantas e animais em um determinado ecossistema",
        "O número de árvores em uma floresta",
        "A diversidade de fontes de energia utilizadas em uma região",
        "A quantidade de poluentes no ar"
      ],
      correctAnswer: "A diversidade de plantas e animais em um determinado ecossistema",
      points: 100 // Dificuldade: média
    },
    {
      question: "Qual das ações abaixo é uma forma eficaz de combater o aquecimento global?",
      options: [
        "Reduzir a emissão de gases de efeito estufa e adotar fontes de energia renovável",
        "Aumentar o uso de combustíveis fósseis",
        "Destruir florestas para aumentar a agricultura",
        "Construir mais usinas nucleares"
      ],
      correctAnswer: "Reduzir a emissão de gases de efeito estufa e adotar fontes de energia renovável",
      points: 50 // Dificuldade: média
    },
    {
      question: "Qual é o principal efeito da desflorestação no planeta?",
      options: [
        "Redução da biodiversidade e aumento dos gases de efeito estufa",
        "Aumento da produção de oxigênio",
        "Melhora da qualidade do solo",
        "Aumento da precipitação de chuva"
      ],
      correctAnswer: "Redução da biodiversidade e aumento dos gases de efeito estufa",
      points: 50 // Dificuldade: média
    },
    {
      question: "Qual é o maior ecossistema do planeta?",
      options: ["Floresta Amazônica", "Corais do Oceano Pacífico", "Oceano", "Deserto do Saara"],
      correctAnswer: "Oceano",
      points: 100 // Dificuldade: difícil
    },
    {
      question: "O que é uma fonte de energia não renovável?",
      options: ["Energia solar", "Carvão mineral", "Energia eólica", "Energia hidráulica"],
      correctAnswer: "Carvão mineral",
      points: 50 // Dificuldade: média
    },
    {
      question: "O que é o efeito estufa?",
      options: [
        "O aumento da temperatura da Terra devido ao acúmulo de gases na atmosfera",
        "Aumento da camada de ozônio",
        "Aquecimento do solo devido à perda de calor",
        "Acúmulo de resíduos plásticos nas cidades"
      ],
      correctAnswer: "O aumento da temperatura da Terra devido ao acúmulo de gases na atmosfera",
      points: 50 // Dificuldade: média
    },
    {
      question: "O que são as energias renováveis?",
      options: [
        "Fontes de energia que se esgotam com o uso",
        "Fontes de energia que podem ser regeneradas naturalmente",
        "Fontes de energia obtidas a partir de combustíveis fósseis",
        "Fontes de energia derivadas da queima de lixo"
      ],
      correctAnswer: "Fontes de energia que podem ser regeneradas naturalmente",
      points: 100 // Dificuldade: fácil
    },
    {
      question: "Quais são os principais gases responsáveis pelo efeito estufa?",
      options: ["Oxygeno e nitrogênio", "Dióxido de carbono e metano", "Hélio e oxigênio", "Oxigênio e dióxido de nitrogênio"],
      correctAnswer: "Dióxido de carbono e metano",
      points: 50 // Dificuldade: média
    },
    {
      question: "Qual é a principal causa do desaparecimento de espécies?",
      options: [
        "Aumento da temperatura dos oceanos",
        "Perda de habitat e poluição",
        "Mudança nas estações do ano",
        "Uso de combustíveis renováveis"
      ],
      correctAnswer: "Perda de habitat e poluição",
      points: 100 // Dificuldade: difícil
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [attemptsLeft, setAttemptsLeft] = useState(5); // Contador de tentativas
  const [isBlocked, setIsBlocked] = useState(false); // Estado para verificar se o usuário está bloqueado
  const [answerFeedback, setAnswerFeedback] = useState<string | null>(null); // Para exibir feedback visual
  const [feedbackColor, setFeedbackColor] = useState<string>(''); // Cor do feedback

  // Verificação de bloqueio de 1 minuto
  useEffect(() => {
    const lastAttemptTime = localStorage.getItem("lastAttemptTime");
    if (lastAttemptTime) {
      const timeDifference = Date.now() - parseInt(lastAttemptTime, 10);
      const oneMinute = 60 * 1000; // 1 minuto em milissegundos
      if (timeDifference < oneMinute) {
        setIsBlocked(true); // Bloqueio por 1 minuto
        return; // Impede que o usuário jogue se o bloqueio de 1 minuto não tiver passado
      }
    }
  }, []);

  // Função que vai ser chamada ao responder a uma pergunta
  const handleAnswer = (answer: string) => {
    if (isAnswered || isBlocked) return;

    setIsAnswered(true);
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + questions[currentQuestionIndex].points);
      setAnswerFeedback("Resposta Correta!");
      setFeedbackColor('bg-green-500'); // Verde para acerto
    } else {
      setAttemptsLeft(attemptsLeft - 1);
      setAnswerFeedback("Resposta Errada!");
      setFeedbackColor('bg-red-500'); // Vermelho para erro
      if (attemptsLeft === 1) {
        // Bloqueia o usuário se ele errar todas as tentativas
        localStorage.setItem("lastAttemptTime", Date.now().toString());
        setIsBlocked(true);
      }
    }

    // Troca de pergunta após a resposta
    setTimeout(() => {
      setIsAnswered(false);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }, 2000); // Atraso de 2 segundos para mostrar o feedback
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <main>
    <Header />
    <div className="relative w-full h-[70vh] overflow-hidden">
      <Image
        className="w-full h-full object-cover"
        src="/Designer.jpeg"
        alt="kahoot_banner"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-60"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 sm:px-12 py-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-shadow mb-4">EcoQuiz</h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-shadow max-w-lg mb-6">
          Teste seus conhecimentos e ganhe Desconto na sua próxima conta!
        </p>

        {/* Pontuação com fundo destacado e sombra */}
        <div className="mt-4 text-2xl font-bold text-blue-500 border-4 border-blue-500 rounded-lg px-4 py-2 shadow-lg bg-white bg-opacity-80">
          Pontuação: {score}
        </div>

        {/* Tentativas restantes com fundo destacado e sombra */}
        <div className={`text-2xl font-bold mt-2 px-4 py-2 rounded-lg border-4 
          ${attemptsLeft > 2 ? 'border-green-500 text-green-500' : attemptsLeft === 1 ? 'border-red-500 text-red-500' : 'border-yellow-500 text-yellow-500'} 
          shadow-lg bg-white bg-opacity-80`}>
          Tentativas restantes: {attemptsLeft}
        </div>

        {isBlocked && (
          <div className="mt-4 text-xl font-semibold text-red-500">
            Você esgotou suas tentativas! Aguarde 1 minuto para jogar novamente.
          </div>
        )}
        {answerFeedback && (
          <div className={`mt-4 text-3xl font-semibold ${feedbackColor} text-white`}>
            {answerFeedback}
          </div>
        )}
      </div>
    </div>

    <section className="mt-12 px-4 m-36">
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="flex flex-col w-full max-w-4xl rounded-xl shadow-lg bg-white p-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">{currentQuestion.question}</h2>

          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={`w-full py-4 px-6 text-lg mb-4 rounded-lg transition duration-300 font-semibold 
              ${isAnswered 
                ? (option === currentQuestion.correctAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white') 
                : 'bg-blue-500 text-white hover:bg-blue-600'}`}
              disabled={isAnswered || isBlocked}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </main>
  );
}
