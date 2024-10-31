import React from 'react';
import { FaChalkboardTeacher, FaEye, FaFlask, FaPalette } from 'react-icons/fa';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

const Statistics = () => {
  const stats = [
    {
      icon: <FaChalkboardTeacher className="text-6xl text-primary-800" />,
      number: '25',
      label: 'Pesquisadores',
    },
    {
      icon: <FaFlask className="text-6xl text-primary-800" />,
      number: '55',
      label: 'Estudantes',
    },
    {
      icon: <FaPalette className="text-6xl text-primary-800" />,
      number: '92',
      label: 'Publicações',
    },
    {
      icon: <FaEye className="text-6xl text-primary-800" />,
      number: '10.000+',
      label: 'Olhares impactados',
    },
  ];

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col items-start justify-center text-left">
            <p className="text-2xl font-bold text-black md:text-3xl">
              Gerando conhecimento para a{' '}
              <span className="text-yellow-600">academia</span> e impacto para a{' '}
              <span className="text-yellow-600">sociedade</span>.
            </p>
            <h3 className="mt-2 text-lg text-gray-700">
              Desde 1994 realizando ciência e pesquisa
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="h-34 flex items-center rounded-lg bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="flex w-1/4 items-center justify-center">
                  {stat.icon}
                </div>
                <div className="flex-1 pl-2">
                  <span className="text-2xl font-bold text-black">
                    {stat.number}
                  </span>
                  <br />
                  <span className="font-bold text-yellow-900">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Background>
  );
};

export default Statistics;
