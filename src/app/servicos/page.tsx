'use client'
import Link from "next/link";
import Header from "../components/header";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../components/footer";

export default function Servicos() {
  return (
    <main>
      <Header />
      <div className="w-full h-2 bg-gray-400"></div>
      <div className="relative w-full h-[70vh] overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src="/Designer.jpeg"
          alt="serviços_banner"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-50"></div>

        {/* Conteúdo Principal */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-6 sm:px-12 py-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">ECO SENTRY</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Acessibilidade e Inclusão</h2>
          <p className="text-base sm:text-lg md:text-xl font-medium max-w-lg mb-4">
            Com notificações, recomendações personalizadas e rankings de sustentabilidade,
            a plataforma motiva os usuários a adotarem hábitos mais verdes. Isso gera
            engajamento e cria um senso de competição positiva.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
            <Link href="/servicos">
              <button className="bg-black hover:opacity-80 transition duration-300 text-white font-bold py-3 px-6 text-base sm:text-lg rounded-full">
                Serviços
              </button>
            </Link>
            <Link href="/projetos">
              <button className="bg-white hover:opacity-80 transition duration-300 text-black font-bold py-3 px-6 text-base sm:text-lg rounded-full">
                Projeto
              </button>
            </Link>
          </div>
        </div>
      </div>
     {/*Conteudo*/}
      <section className="mt-12 px-4">
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="flex flex-col sm:flex-row w-full max-w-4xl rounded-xl shadow-lg overflow-hidden">
            
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
