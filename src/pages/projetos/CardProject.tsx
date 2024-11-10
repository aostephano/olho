import React, { useState } from 'react';

interface CardProjectProps {
  projectName: string;
  summary: string;
  imageUrl: string;
  projectDetails: string;
  contact: string;
}

const CardProject: React.FC<CardProjectProps> = ({
  projectName,
  summary,
  imageUrl,
  projectDetails,
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
        alt={`Imagem do projeto ${projectName}`}
        className="mb-4 size-32 rounded-md object-cover"
      />
      <h3 className="w-full text-center text-xl font-semibold text-gray-800">
        {projectName}
      </h3>
      <p className="text-center text-gray-600">{summary}</p>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative max-h-[90vh] w-11/12 overflow-y-auto rounded-lg bg-white p-8 sm:w-3/4 md:w-1/2 lg:w-1/3">
            <div className="mb-4 flex items-center">
              <img
                src={imageUrl}
                alt={`Imagem do projeto ${projectName}`}
                className="mr-4 size-32 rounded-md object-cover"
              />
              <h3 className="w-full text-center text-2xl font-semibold text-gray-800">
                {projectName}
              </h3>
            </div>

            <p className="mt-4 text-lg text-gray-700">{projectDetails}</p>

            <h4 className="mt-4 text-xl font-bold text-gray-800">
              Contato e Redes:
            </h4>
            <p className="text-lg text-gray-700">{contact}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardProject;
