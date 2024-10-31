import React, { useState } from 'react';

import { ButtonNav } from '@/button/ButtonNav';
import { MiniButton } from '@/button/MiniButton';

const AboutOlho = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex flex-col items-center p-6 text-center">
      <h2 className="text-3xl font-bold text-black">O que é o Olho?</h2>
      <p className="mt-2 max-w-5xl text-lg text-gray-700">
        O Laboratório de Estudos Audiovisuais investiga as educações estéticas,
        culturais e políticas como formas complexas da cultura, da sociedade e
        das diversas práticas da educação contemporânea. Atuamos na Faculdade de
        Educação da Unicamp desde 1994 com distintas produções em pesquisa.
        <span className="ml-2 inline-flex">
          <MiniButton
            xl={false}
            onClick={togglePopup}
            className="px-2 py-1 text-sm"
          >
            Ementa
          </MiniButton>
        </span>
      </p>

      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-11/12 max-w-lg rounded-lg bg-white p-8 shadow-lg">
            <h3 className="mb-4 text-center text-2xl font-semibold text-gray-800">
              OLHO - Laboratório de Estudos Audiovisuais
            </h3>
            <p
              className="space-y-4 text-justify leading-relaxed text-gray-700"
              style={{ textIndent: '1.5em' }}
            >
              O Laboratório de Estudos Audiovisuais Olho investiga as educações
              estéticas, culturais e políticas como formas complexas da cultura,
              da sociedade e das diversas práticas da educação contemporânea.
              Pesquisa e estuda a educação, o conhecimento, a linguagem e a arte
              como faces entrelaçadas e como produções materiais coletivas,
              abertas a experimentações e reflexões sociais, culturais,
              políticas e históricas.
            </p>
            <p
              className="space-y-4 text-justify leading-relaxed text-gray-700"
              style={{ textIndent: '1.5em' }}
            >
              Estes estudos e pesquisas em cinema, literatura, fotografia, artes
              visuais, artes da cena, performance, intervenção, instalação e
              tecnologias operam em uma rede de transversalidade conceitual,
              teórica e metodológica. Esse trabalho amplia as potencialidades de
              acoplamento do Laboratório às diversas problemáticas das imagens,
              dos corpos e das artes nos diversos terrenos de produção do
              pensamento, do conhecimento e da educação.
            </p>

            <div className="mt-6 flex justify-center">
              <ButtonNav xl={false} onClick={togglePopup}>
                Fechar
              </ButtonNav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutOlho;
