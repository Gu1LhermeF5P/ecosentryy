import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Header() {
  return (
    <header className="font-roboto flex flex-col sm:flex-row justify-center items-center sm:justify-center py-4 sm:py-6 space-y-4 sm:space-y-0 sm:space-x-8">
      {/* Logo */}
      <div className="flex justify-center sm:justify-start">
        <Image
          src="/logo_ecosentry.png"
          alt="logo"
          width={140}
          height={140}
          priority
        />
      </div>
      
      {/* Menu */}
      <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-center">
        <li className="transition duration-300 hover:bg-lime-300 text-black font-medium py-2 px-4 rounded-full text-base sm:text-lg text-center">
          <Link href="/sobre-nos">Sobre Nós</Link>
        </li>
        <li className="transition duration-300 hover:bg-lime-300 text-black font-medium py-2 px-4 rounded-full text-base sm:text-lg text-center">
          <Link href="/servicos">Serviços</Link>
        </li>
        <li className="transition duration-300 hover:bg-lime-300 text-black font-medium py-2 px-4 rounded-full text-base sm:text-lg text-center">
          <Link href="/projetos">Projetos</Link>
        </li>
        <li className="transition duration-300 hover:bg-lime-300 text-black font-medium py-2 px-4 rounded-full text-base sm:text-lg text-center">
          <Link href="/industrias">Indústrias</Link>
        </li>
        <li className="transition duration-300 bg-lime-300 hover:bg-lime-500 text-black font-bold py-2 px-4 rounded-full flex items-center text-base sm:text-lg text-center">
          <Link href="/contato" className="flex items-center">
            Contato
            <FaArrowRight className="ml-2 -rotate-45" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
