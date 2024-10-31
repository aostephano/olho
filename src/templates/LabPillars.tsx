import React from 'react';
import { FaChalkboardTeacher, FaFlask, FaPalette } from 'react-icons/fa';

const LabPillars = () => {
  const pillars = [
    {
      icon: <FaFlask className="mb-2 text-4xl text-primary-700" />,
      title: 'Pesquisa & Criação',
      subtitle: 'Investigação criativa e experimental em mídias audiovisuais.',
    },
    {
      icon: <FaChalkboardTeacher className="mb-2 text-4xl text-primary-700" />,
      title: 'Educação e Formação',
      subtitle:
        'Formação educativa voltada para práticas visuais e audiovisuais.',
    },
    {
      icon: <FaPalette className="mb-2 text-4xl text-primary-700" />,
      title: 'Extensão & Arte',
      subtitle: 'Integração artística com a comunidade e espaços de arte.',
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 md:p-10">
      <h2 className="text-3xl font-bold text-black">Pilares</h2>
      <div className="flex flex-col space-y-4 md:flex-row md:justify-center md:space-x-6 md:space-y-0">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="flex w-full max-w-xs flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105"
          >
            {pillar.icon}
            <h3 className="mb-1 text-xl font-bold text-gray-800">
              {pillar.title}
            </h3>
            <p className="text-center text-sm text-gray-600">
              {pillar.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabPillars;
