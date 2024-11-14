'use client'
import Link from "next/link";
import Header from "../components/header";
import Image from "next/image";
import Footer from "../components/footer";
import { FaArrowRight } from "react-icons/fa";

const parceiros = [
    {
      id: 1,
      nome: 'Ultragaz',
      descricao: 'aut eaque corporis, provident reiciendis impeditSit at aut eaque corporis, provident impedit',
      imagem: '/ultragasz.png', 
      url: 'https://www.ultragaz.com.br/nossos-projetos/?etiqueta=ambiental',
    },
    {
      id: 2,
      nome: 'SAP',
      descricao: 'aut eaque corporis, provident reiciendis impeditSit at aut eaque corporis, provident impedit',
      imagem: '/sap.png', 
      url: 'https://www.sap.com/brazil/products/sustainability/esg-reporting.html',
    },
    {
      id: 3,
      nome: 'Ultracargo',
      descricao: 'aut eaque corporis, provident reiciendis impeditSit at aut eaque corporis, provident impedit',
      imagem: '/ultracargo.png', 
      url: 'https://www.ultracargo.com.br/sustentabilidade/',
    },
    {
      id: 4,
      nome: 'FIA',
      descricao: 'aut eaque corporis, provident reiciendis impeditSit at aut eaque corporis, provident impedit',
      imagem: '/fia.png',
      url: 'https://sustainabilityreport.fia.com',
    },
];

export default function Projeto() {

    return (
        <main>
            <Header />
            <div className="w-full h-2 bg-gray-400"></div>
            <div className="relative w-full h-[70vh] overflow-hidden">
                <Image
                    className="w-full h-full object-cover"
                    src="/colaboracao.jpeg"
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
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 ">
                        <Link href="/projetos">
                            <button className="bg-white hover:opacity-80 transition duration-300 text-black font-bold py-3 px-6 text-base sm:text-lg rounded-full">
                                Projeto
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <section className="py-6 sm:py-8 m-4 sm:m-8 ">
                <h2 className="text-center text-xl sm:text-2xl font-bold mb-20 sm:mb-5 text-gray-400">Empresas Parceiras</h2>
                <h3 className="text-center text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-gray-400 ">Projetos</h3>
                
                {/* Layout para 2 colunas verticais */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {/* Primeira coluna */}
                    <div className="flex flex-col space-y-4 sm:space-y-5">
                        {parceiros.slice(0, 2).map((parceiro) => (
                            <div key={parceiro.id} className="bg-lime-300 border rounded-lg shadow hover:shadow-lg transition p-4">
                                <Image
                                    src={parceiro.imagem}
                                    alt={parceiro.nome}
                                    width={1200} 
                                    height={1200} 
                                    className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4" 
                                />
                                <h3 className="text-sm sm:text-lg font-semibold mb-2">{parceiro.nome}</h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-3">{parceiro.descricao}</p>
                                <a href={parceiro.url} target="_blank" rel="noopener noreferrer">
                                    <button className="text-black border-2 border-black font-bold py-2 px-4 rounded-full flex items-center text-base sm:text-lg">
                                        Ler mais
                                        <FaArrowRight className="ml-2 -rotate-45" />
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                    
                    {/* Segunda coluna */}
                    <div className="flex flex-col space-y-4 sm:space-y-5">
                        {parceiros.slice(2, 4).map((parceiro) => (
                            <div key={parceiro.id} className="bg-lime-300 border rounded-lg shadow hover:shadow-lg transition p-4">
                                <Image
                                    src={parceiro.imagem}
                                    alt={parceiro.nome}
                                    width={1200} 
                                    height={1200} 
                                    className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4" 
                                />
                                <h3 className="text-sm sm:text-lg font-semibold mb-2">{parceiro.nome}</h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-3">{parceiro.descricao}</p>
                                <a href={parceiro.url} target="_blank" rel="noopener noreferrer">
                                    <button className="text-black border-2 border-black font-bold py-2 px-4 rounded-full flex items-center justify-center text-base sm:text-lg">
                                        Ler mais
                                        <FaArrowRight className="ml-2 -rotate-45" />
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
