import React from 'react';

import CardResearch from './CardResearch';

const ResearchCardList: React.FC = () => (
  <div className="p-4">
    <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">
      Pesquisadores do OLHO
    </h2>
    <h3 className="mb-6 text-center text-xl text-gray-600">
      Conheça os principais pesquisadores e suas contribuições.
    </h3>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
      <CardResearch
        researcherName="Dr. João Souza"
        summary="Especialista em mídia e educação."
        imageUrl="/assets/images/kelly_03.jpeg"
        biography="Dr. João Souza é um especialista renomado na área de mídia e educação, com experiência prática em diferentes plataformas educacionais."
        researchAreas="Mídia digital, educação, aprendizagem interativa."
        projects="Projeto de educação interativa online, curso de tecnologia para professores."
        contact="joao.souza@email.com | LinkedIn: @joaosouza"
      />
      <CardResearch
        researcherName="Dra. Maria Ferreira"
        summary="Pesquisadora de tecnologias audiovisuais."
        imageUrl="/assets/images/kelly_03.jpeg"
        biography="Dra. Maria Ferreira é uma pesquisadora apaixonada por tecnologias audiovisuais aplicadas à educação."
        researchAreas="Tecnologias audiovisuais, educação online."
        projects="Projeto de integração de vídeo interativo em sala de aula."
        contact="maria.ferreira@email.com | Twitter: @mariaferreira"
      />
      <CardResearch
        researcherName="Prof. Ana Lima"
        summary="Explora as interseções entre artes visuais e educação."
        imageUrl="/assets/images/kelly_03.jpeg"
        biography="Prof. Ana Lima se especializa nas relações entre arte e aprendizagem em ambientes educacionais."
        researchAreas="Artes visuais, educação, design instrucional."
        projects="Exposição de arte educativa e workshop para educadores."
        contact="ana.lima@email.com | Instagram: @anart"
      />
      <CardResearch
        researcherName="Dr. Carlos Pereira"
        summary="Especialista em tecnologias educacionais."
        imageUrl="/assets/images/kelly_03.jpeg"
        biography="Dr. Carlos Pereira trabalha com inovações tecnológicas aplicadas ao ensino de ciências."
        researchAreas="Tecnologias educacionais, ensino de ciências, aprendizado baseado em jogos."
        projects="Desenvolvimento de uma plataforma de aprendizado para ensino de física interativo."
        contact="carlos.pereira@email.com | LinkedIn: @carlospereira"
      />
      <CardResearch
        researcherName="Dra. Beatriz Costa"
        summary="Pesquisadora em arte e novas mídias."
        imageUrl="/assets/images/kelly_03.jpeg"
        biography="Dra. Beatriz Costa é uma referência no estudo de arte contemporânea e seu impacto nas novas mídias."
        researchAreas="Arte contemporânea, novas mídias, cultura digital."
        projects="Projeto de arte digital colaborativa e curadoria de exposições online."
        contact="beatriz.costa@email.com | Twitter: @beatrizcosta"
      />
      <CardResearch
        researcherName="Prof. Roberto Santos"
        summary="Foca na educação interativa e em jogos digitais."
        imageUrl="/assets/images/kelly_03.jpeg"
        biography="Prof. Roberto Santos é especialista em técnicas de ensino interativas e gamificação no contexto educacional."
        researchAreas="Gamificação, aprendizagem ativa, tecnologias interativas."
        projects="Desenvolvimento de jogo educativo para reforço do aprendizado de matemática."
        contact="roberto.santos@email.com | Instagram: @robertsantosedu"
      />
    </div>
  </div>
);

export default ResearchCardList;
