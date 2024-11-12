import Header from "../components/header";
import Image from "next/image";

export default function Sobrenos() {
    return (
        <main>
            <Header />
            <div className="w-full h-1 bg-gray-400"></div>
            <div className="relative items-end w-full h-screen overflow-hidden">
                <Image className="w-full h-screen object-cover" src="/favela.jpg" alt="banner_favela" width={1000} height={500} />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-50"></div>
                
                {/* Adicionando título e texto */}
                <div className="absolute inset-0 flex flex-col justify-start items-start text-left text-white m-10 p-4">
                    <h1 className="text-7xl font-bold mb-6 mt-64">ECO SENTRY</h1>
                    <h2 className="text-5xl font-bold mb-6">Acessibilidade e Inclusão</h2>
                    <p className="text-2xl font-semibold max-w-lg mb-6">
                        Com notificações, recomendações personalizadas e 
                        rankings de sustentabilidade, a plataforma motiva os usuários 
                        a adotarem hábitos mais verdes. Isso gera 
                        engajamento e cria um senso de competição positiva.
                    </p>
                    {/* Botões */}
                    <div className="flex space-x-4  ml-10 mt-5">
                        <button className="bg-black hover:opacity-65 transition duration-300 text-white font-bold py-2 px-10 rounded-full">
                            Serviços
                        </button>
                        <button className="bg-white hover:opacity-65 transition duration-300 text-black font-bold py-2 px-10 rounded-full">
                            Projeto
                        </button>
                    </div>
                </div>                               
            </div>
        </main>
    );
}