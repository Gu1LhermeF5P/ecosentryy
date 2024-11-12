import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Header(){
    return(
        <header className="font-roboto m-2 flex justify-center items-center" >
            <Image className="mr-20"src="/logo_ecosentry.png" alt="logo" width={200} height={200}/>
            <ul className="flex gap-20">
                <li className="transition duration-300 hover:bg-lime-400 text-black font-medium py-2 px-4 rounded-full">
                    <Link className="text-2xl " href={"/sobrenos"}>Sobre Nós</Link></li>
                <li className="transition duration-300 hover:bg-lime-400 text-black font-medium py-2 px-4 rounded-full">
                    <Link className="text-2xl " href={"/servicos"}>Serviços</Link></li>
                <li className="transition duration-300 hover:bg-lime-400 text-black font-medium py-2 px-4 rounded-full">
                    <Link className="text-2xl " href={"/projetos"}>Projetos</Link></li>
                <li className="transition duration-300 hover:bg-lime-400 text-black font-medium py-2 px-4 rounded-full">
                    <Link className="text-2xl " href={"/industrias"}>Industrias</Link></li>
                <li className="transition duration-300 bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-4 rounded-full flex items-center" >
                    <Link className="text-2xl font-medium flex items-center" href={"/contatos"}>
                    Contato
                    <FaArrowRight className="ml-2 -rotate-45"/>
                    </Link>
                </li>
            </ul>
        </header>     
    );
}