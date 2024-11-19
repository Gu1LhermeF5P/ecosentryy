'use client'
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Equipe() {
  const members = [
    {
      name: 'Larissa Menzencio',
      rm: 'RM-557197',
      imgSrc: '/foto_larissa.png',
      linkedinUrl: 'https://www.linkedin.com/in/larissa-muniz-1964442b7/',
      githubUrl: 'https://github.com/larissa557197',
    },
    {
      name: 'Guilherme Francisco',
      rm: 'RM-557648',
      imgSrc: '/foto_guilherme.png',
      linkedinUrl: 'https://www.linkedin.com/in/guilherme-pereira-487398234/',
      githubUrl: 'https://github.com/Gu1LhermeF5P#',
    },
    {
      name: 'Nicolas Dorizoti',
      rm: 'RM-556868',
      imgSrc: '/foto_nicolas.png',
      linkedinUrl: '#',
      githubUrl: 'https://github.com/NicolasDorizoti',
    },
  ];

  return (
    <main>
      <Header/>
      <div className="w-full h-1 bg-gray-400"></div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl m-60 ">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image
                src={member.imgSrc}
                alt={member.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-xl font-bold">{member.name}</h2>
            <p className="text-gray-600">{member.rm}</p>
            <div className="flex space-x-4 mt-4">
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-500"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={member.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-500"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </main>
  );
}
