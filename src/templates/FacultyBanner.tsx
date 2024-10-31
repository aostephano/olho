import React from 'react';

import { Background } from '@/background/Background';
import { ButtonNav } from '@/button/ButtonNav';
import { Section } from '@/layout/Section';

const FacultyBanner = () => {
  return (
    <Background color="">
      <Section yPadding="py-12">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-black">
              Conheça nosso corpo docente
            </h2>
          </div>
          <div>
            <ButtonNav to="/pesquisadores">Pesquisadores</ButtonNav>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export default FacultyBanner;
