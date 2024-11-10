import React, { useState } from 'react';

interface CardResearchProps {
  researcherName: string;
  summary: string;
  imageUrl: string;
  biography: string;
  researchAreas: string;
  projects: string;
  contact: string;
}

const CardResearch: React.FC<CardResearchProps> = ({
  researcherName,
  summary,
  imageUrl,
  biography,
  researchAreas,
  projects,
  contact,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div
      className="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg"
      onClick={toggleModal}
    >
      <img
        src={imageUrl}
        alt={`Foto de ${researcherName}`}
        className="mb-4 size-20 rounded-full"
      />
      <h3 className="text-xl font-semibold text-gray-800">{researcherName}</h3>
      <p className="text-center text-gray-600">{summary}</p>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative max-h-[90vh] w-11/12 overflow-y-auto rounded-lg bg-white p-8 sm:w-3/4 md:w-1/2 lg:w-1/3">
            <div className="mb-4 flex items-center">
              <img
                src={imageUrl}
                alt={`Foto de ${researcherName}`}
                className="mr-4 size-20 rounded-full"
              />
              <h3 className="w-full text-center text-2xl font-semibold text-gray-800">
                {researcherName}
              </h3>
            </div>

            <p className="mt-4 text-lg text-gray-700">{biography}</p>
            <h4 className="mt-4 text-xl font-bold text-gray-800">
              Áreas de Pesquisa:
            </h4>
            <p className="text-lg text-gray-700">{researchAreas}</p>

            <h4 className="mt-4 text-xl font-bold text-gray-800">
              Projetos Relevantes:
            </h4>
            <p className="text-lg text-gray-700">{projects}</p>

            <h4 className="mt-4 text-xl font-bold text-gray-800">
              Contatos e Redes:
            </h4>
            <p className="text-lg text-gray-700">{contact}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardResearch;
