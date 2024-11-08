import React from 'react';

import CardProd from './CardProd';

const ProdCardList = () => (
  <div className="p-4">
    <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">
      Pesquisas em Destaque
    </h2>
    <h3 className="mb-6 text-center text-xl text-gray-600">
      Explore as principais contribuições acadêmicas do laboratório.
    </h3>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
      <CardProd
        icon="teacher"
        researcherNames={['Dr. João Souza']}
        description="Estudo sobre o impacto da mídia na educação."
        imageUrl="/assets/images/kelly_03.jpeg"
        linkUrl="https://example.com/artigo1"
      />
      <CardProd
        icon="science"
        researcherNames={['Dra. Maria Ferreira']}
        description="Experimento audiovisual e novas tecnologias."
        imageUrl="/assets/images/kelly_03.jpeg"
        linkUrl="https://example.com/artigo2"
      />
      <CardProd
        icon="art"
        researcherNames={['Prof. Ana Lima']}
        description="Exploração das artes visuais na educação."
        imageUrl="/assets/images/kelly_03.jpeg"
        linkUrl="https://example.com/artigo3"
      />
      <CardProd
        icon="teacher"
        researcherNames={['Dr. Pedro Alves', 'Dra. Juliana Costa']}
        description="A influência das mídias sociais na aprendizagem."
        imageUrl="/assets/images/kelly_03.jpeg"
        linkUrl="https://example.com/artigo4"
      />
      <CardProd
        icon="science"
        researcherNames={['Dra. Laura Campos', 'Dr. Roberto Lima']}
        description="Pesquisa sobre tecnologias educacionais inovadoras."
        imageUrl="/assets/images/kelly_03.jpeg"
        linkUrl="https://example.com/artigo5"
      />
      <CardProd
        icon="art"
        researcherNames={['Prof. Carlos Moura', 'Prof. Ana Beatriz']}
        description="Conexões entre arte e cultura digital."
        imageUrl="/assets/images/kelly_03.jpeg"
        linkUrl="https://example.com/artigo6"
      />
      <CardProd
        icon="teacher"
        researcherNames={['Dra. Fernanda Souza']}
        description="Impacto da gamificação na educação."
        imageUrl="/assets/images/kelly_03.jpeg"
        linkUrl="https://example.com/artigo7"
      />
      <CardProd
        icon="science"
        researcherNames={['Dr. Rafael Mendes', 'Dra. Simone Pereira']}
        description="Estudo sobre inteligência artificial na sala de aula."
        imageUrl="/assets/images/kelly_03.jpeg"
        linkUrl="https://example.com/artigo8"
      />
      <CardProd
        icon="art"
        researcherNames={['Prof. Sofia Ribeiro', 'Dr. Lucas Martins']}
        description="Arte como ferramenta de inclusão educacional."
        imageUrl="/assets/images/kelly_03.jpeg"
        linkUrl="https://example.com/artigo9"
      />
    </div>
  </div>
);

export default ProdCardList;
