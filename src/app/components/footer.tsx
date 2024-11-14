import { FaLinkedin, FaGithub, FaFigma } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 sm:py-16">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start px-4 sm:px-8 space-y-8 sm:space-y-0">

                {/* Coluna 1: Logo e descrição */}
                <div className="sm:w-1/3 flex flex-col items-center sm:items-start text-center sm:text-left">
                    <Image
                        src="/logo_ecosentry.png"
                        alt="ECOsentry logo"
                        width={150} 
                        height={90}
                        className="mb-4"
                    />
                    <p className="text-gray-400 mb-3 text-sm sm:text-base">
                        Sit at aut eaque corporis, provident reiciendis impedit repudiandae tempora a dele. Sit at aut eaque corporis, provident reiciendis impedit repudiandae tempora a dele.
                    </p>
                    <p className="text-gray-500 text-sm sm:text-base">© 2024 ECOsentry</p>
                </div>

                {/* Coluna 2: Menu */}
                <div className="sm:w-1/3 ml-16 sm:ml-36">
                    <h3 className="font-bold text-xl mb-4 sm:mb-6">Menu</h3>
                    <ul className="space-y-2 sm:space-y-3 text-center sm:text-left">
                        <li><a href="/sobre-nos" className="text-base hover:underline">Sobre nós</a></li>
                        <li><a href="/servicos" className="text-base hover:underline">Serviços</a></li>
                        <li><a href="/projetos" className="text-base hover:underline">Projetos</a></li>
                        <li><a href="/contato" className="text-base hover:underline">Contato</a></li>
                    </ul>
                </div>

                {/* Coluna 3: Contato e redes sociais */}
                <div className="sm:w-1/3">
                    <h3 className="font-bold text-xl mb-4 sm:mb-6">Entre em contato</h3>
                    <p className="mb-3 sm:mb-6 text-base">ecosentry@gmail.com</p>
                    <h3 className="font-bold text-xl mb-4 sm:mb-6">Nos siga nas redes</h3>
                    <div className="flex justify-center sm:justify-start space-x-6">
                        <a href="https://www.linkedin.com/in/guilherme-pereira-487398234/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-white transition">
                            <FaLinkedin size={28} />
                        </a>
                        <a href="https://github.com/Gu1LhermeF5P" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition">
                            <FaGithub size={28} />
                        </a>
                        <a href="https://www.figma.com/design/KHXKc8h8arpvKBKLtiGFIW/ECOsentry?node-id=0-1&node-type=canvas&t=D4Td4Ardx5eryqJp-0" aria-label="Figma" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition">
                            <FaFigma size={28} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
