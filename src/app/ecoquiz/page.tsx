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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [attemptsLeft, setAttemptsLeft] = useState(5);
  const [isBlocked, setIsBlocked] = useState(false);
  const [answerFeedback, setAnswerFeedback] = useState<string | null>(null);
  const [feedbackColor, setFeedbackColor] = useState<string>(''); 
  const [quizFinished, setQuizFinished] = useState(false);

  // Verifica se o usuário já está logado
  useEffect(() => {
    const storedUsername = localStorage.getItem('loggedInUser');
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
      localStorage.setItem('loggedInUser', username);
      setIsLoggedIn(true);
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  };

  const handleRegister = () => {
    if (!username || !password) {
      alert("Por favor, preencha ambos os campos.");
      return;
    }

    if (localStorage.getItem(username)) {
      alert("Usuário já registrado. Por favor, faça login.");
      return;
    }

    localStorage.setItem(username, password);
    alert("Usuário registrado com sucesso! Faça login.");
    setIsRegistering(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUsername('');
    setPassword('');
    setIsLoggedIn(false);
  };
  


  const handleAnswer = (answer: string) => {
    if (isAnswered || isBlocked || quizFinished) return;

    setIsAnswered(true);
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + questions[currentQuestionIndex].points);
      setAnswerFeedback("Resposta Correta!");
      setFeedbackColor('bg-green-500');
    } else {
      setAttemptsLeft(attemptsLeft - 1);
      setAnswerFeedback("Resposta Errada!");
      setFeedbackColor('bg-red-500');
      if (attemptsLeft === 1) {
        localStorage.setItem("lastAttemptTime", Date.now().toString());
        setIsBlocked(true);
      }
    }

    setTimeout(() => {
      setIsAnswered(false);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizFinished(true);
      }
    }, 2000);
  };

  const calculateDiscount = () => {
    const maxPoints = 1000;
    const maxDiscount = 55; // Porcentagem
    return Math.min((score / maxPoints) * maxDiscount, maxDiscount).toFixed(2);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <main>
      <Header />
      {!isLoggedIn ? (
        !isRegistering ? (
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-lime-400 p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
              <div className="mb-4">
                <label htmlFor="username" className="block text-lg font-medium mb-2">Nome de Usuário</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-lg font-medium mb-2">Senha</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Digite sua senha"
                />
              </div>
              <button
                onClick={handleLogin}
                className="w-full py-3 text-lg bg-green-700 text-white rounded-lg hover:bg-green-600 transition duration-300"
              >
                Entrar
              </button>
              <div className="mt-4 text-center">
                <span className="text-sm">Não tem uma conta? </span>
                <button 
                  onClick={() => setIsRegistering(true)}
                  className="text-sm text-green-700 hover:underline"
                >
                  Registre-se
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-lime-400 p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-center mb-6">Registro</h2>
              <div className="mb-4">
                <label htmlFor="username" className="block text-lg font-medium mb-2">Nome de Usuário</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-lg font-medium mb-2">Senha</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Digite sua senha"
                />
              </div>
              <button
                onClick={handleRegister}
                className="w-full py-3 text-lg bg-green-700 text-white rounded-lg hover:bg-green-600 transition duration-300"
              >
                Registrar
              </button>
              <div className="mt-4 text-center">
                <span className="text-sm">Já tem uma conta? </span>
                <button
                  onClick={() => setIsRegistering(false)}
                  className="text-sm text-green-700 hover:underline"
                >
                  Faça login
                </button>
              </div>
            </div>
          </div>
        )
      ) : (
        <>
          <div className="flex justify-between items-center p-6 bg-gray-100">
            <div className="flex items-center">
              <Image
                src="/foto_perfil.png"
                alt="Foto de Perfil"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="ml-4 text-lg font-semibold">Bem-vindo, {username}!</span>
            </div>
            <button
              onClick={handleLogout}
              className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </div>

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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-shadow mb-4">ECOQuiz</h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-shadow max-w-lg mb-6">
                Teste seus conhecimentos e ganhe Desconto na sua próxima conta!
              </p>
              {!quizFinished && (
                <>
                  <div className="mt-4 text-2xl font-bold rounded-lg border-4 p-2 border-blue-500  text-blue-500 bg-white">Pontuação: {score}</div>
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
                </>
              )}
            </div>
          </div>
          {quizFinished || isBlocked ? (
            <section className="flex flex-col items-center justify-center mt-20 p-6">
              <h2 className="text-4xl font-bold text-green-600 mb-4">Parabéns!</h2>
              <p className="text-2xl text-gray-700 mb-6">Você concluiu o quiz.</p>
              <div className="text-3xl font-bold text-blue-600 mb-6">
                Seu desconto na conta de luz: <span className="text-green-500">{calculateDiscount()}%</span>
              </div>
              {/*"fake" cupom */}
              <div className="text-2xl font-bold text-gray-700 mb-6">
                <p className="text-lg">Seu cupom de desconto:</p>
                <p className="text-3xl font-semibold text-blue-600">
                  ECO-{calculateDiscount()}OFF
                </p>
              </div>
            </section>
          ) : (
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
          )}
          <Footer />
        </>
      )}
    </main>
  );
}