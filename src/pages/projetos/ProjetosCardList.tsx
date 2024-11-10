import React from 'react';

import CardProject from './CardProject';

const ProjetosCardList: React.FC = () => (
  <div className="p-4">
    <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">
      Projetos em Destaque
    </h2>
    <h3 className="mb-6 text-center text-xl text-gray-600">
      Conheça os principais projetos e suas contribuições.
    </h3>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
      <CardProject
        projectName="Cinema & Educação"
        summary="Projeto que utiliza tecnologias interativas para ensino de arte."
        imageUrl="/assets/images/kelly_03.jpeg"
        projectDetails="Este projeto busca integrar ferramentas de mídia interativas no ensino de arte, proporcionando uma experiência mais imersiva aos alunos."
        contact="contato@projeto1.com | LinkedIn: @projeto1"
      />
      <CardProject
        projectName="Plataforma Educacional Online"
        summary="Desenvolvimento de uma plataforma de ensino online para educação básica."
        imageUrl="/assets/images/kelly_03.jpeg"
        projectDetails="Uma plataforma que permite aos professores criar cursos e gerenciar o progresso dos alunos de maneira eficiente."
        contact="contato@projeto2.com | Twitter: @projeto2"
      />
      <CardProject
        projectName="Estudo sobre Tecnologias Audiovisuais"
        summary="Pesquisa sobre o impacto das tecnologias audiovisuais no aprendizado."
        imageUrl="/assets/images/kelly_03.jpeg"
        projectDetails="Este estudo investiga como as tecnologias audiovisuais podem ser usadas para melhorar o aprendizado em diversas disciplinas."
        contact="contato@projeto3.com | Instagram: @projeto3"
      />
    </div>
  </div>
);

export default ProjetosCardList;
