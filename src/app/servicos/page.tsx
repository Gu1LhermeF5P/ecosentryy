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
    // Outras perguntas...
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

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const lastAttemptTime = localStorage.getItem("lastAttemptTime");

    if (lastAttemptTime) {
      const timePassed = Date.now() - Number(lastAttemptTime);
      if (timePassed >= 60000) {
        setIsBlocked(false);
        localStorage.removeItem("lastAttemptTime");
      }
    }

    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    const storedPassword = localStorage.getItem(`${username}-password`);
    if (storedPassword === password) {
      localStorage.setItem('username', username);
      setIsLoggedIn(true);
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  };

  const handleRegister = () => {
    if (username && password) {
      localStorage.setItem(`${username}-password`, password);
      alert("Conta criada com sucesso! Faça login.");
      setIsRegistering(false);
    } else {
      alert("Por favor, preencha ambos os campos.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleAnswer = (answer: string) => {
    if (isAnswered || isBlocked) return;

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
      }
    }, 2000);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <main>
      <Header />
      {!isLoggedIn ? (
        !isRegistering ? (
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
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
                className="w-full py-3 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Entrar
              </button>
              <div className="mt-4 text-center">
                <span className="text-sm">Não tem uma conta? </span>
                <button
                  onClick={() => setIsRegistering(true)}
                  className="text-sm text-blue-500 hover:underline"
                >
                  Registre-se
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
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
                className="w-full py-3 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Registrar
              </button>
              <div className="mt-4 text-center">
                <span className="text-sm">Já tem uma conta? </span>
                <button
                  onClick={() => setIsRegistering(false)}
                  className="text-sm text-blue-500 hover:underline"
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

          {/* Quiz e demais funcionalidades */}
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-shadow mb-4">Jogo Estilo Kahoot</h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-shadow max-w-lg mb-6">
                Teste seus conhecimentos e ganhe Desconto na sua próxima conta!
              </p>
              <div className="mt-4 text-2xl font-bold text-blue-500">Pontuação: {score}</div>
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
        </>
      )}
    </main>
  );
}
