'use client'
import { useState, useEffect } from 'react';
import Link from "next/link";
import Header from "../components/header";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../components/footer";

const images = [
  { src: '/carrosel_img4.jpg', alt: 'Imagem 1' },
  { src: '/carrosel_img2.jpg', alt: 'Imagem 2' },
  { src: '/carrosel_img3.jpg', alt: 'Imagem 3' }
];

export default function Sobrenos() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Altere o tempo (3000ms) conforme necessário
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <Header />
      <div className="w-full h-2 bg-gray-400"></div>
      <div className="relative w-full h-[70vh] overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src="/favela.jpg"
          alt="banner_favela"
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

        {/* Bloco de Texto Lateral */}
        <div className="absolute top-1/3 right-4 sm:right-16 bg-gray-500 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-lg max-w-xs">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">Sustentabilidade</h2>
          <p className="text-white text-sm sm:text-base mb-2">
            Descubra como a sustentabilidade pode ser incorporada de forma prática em nossas vidas.
          </p>
          <Link href="/sustentabilidade">
            <button className="bg-lime-300 text-black h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center">
              <FaArrowRight className="-rotate-45" />
            </button>
          </Link>
        </div>
      </div>

      <section className="mt-12 mb-12 px-4">
        <div className="flex justify-center items-center min-h-[90vh]">
          <div className="flex flex-col sm:flex-row w-full max-w-4xl rounded-xl shadow-lg overflow-hidden">

            {/* Slideshow de Imagens */}
            <div className="w-full sm:w-1/2 h-48 sm:h-auto relative">
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
              {/* Indicadores do Carrossel */}
              <div className="absolute bottom-2 w-full flex justify-center">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`h-3 w-3 ${currentImageIndex === index ? 'bg-lime-300' : 'border-2 border-lime-300'} rounded-full mx-1`}
                  ></span>
                ))}
              </div>
            </div>

            <div className="w-full sm:w-1/2 bg-lime-300 p-6 sm:p-12 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sobre Nós</h2>
              <p className="text-base sm:text-lg mb-6">
                Sit at aut eaque corporis, provident reiciendis impedit. Descubra mais sobre nossas iniciativas e impacto.
              </p>
              <Link href="/sobre-nos">
                <button className="text-black font-bold py-3 px-8 rounded-full border-2 border-black shadow-md text-lg flex items-center space-x-2">
                  <span>ler mais</span>
                  <FaArrowRight className="-rotate-45" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
