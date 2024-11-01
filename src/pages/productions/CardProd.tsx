import React from 'react';
import { FaChalkboardTeacher, FaFlask, FaPalette } from 'react-icons/fa';

interface CardProdProps {
  icon: 'teacher' | 'science' | 'art';
  researcherNames: string[];
  description: string;
  imageUrl: string;
  linkUrl: string;
}

const CardProd: React.FC<CardProdProps> = ({
  icon,
  researcherNames,
  description,
  imageUrl,
  linkUrl,
}) => {
  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-sm rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105"
    >
      <img
        src={imageUrl}
        alt="Thumbnail"
        className="h-40 w-full rounded-t-lg object-cover"
      />
      <div className="flex flex-col items-center p-4">
        <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-primary-700 text-white">
          {icon === 'teacher' && <FaChalkboardTeacher className="text-xl" />}
          {icon === 'science' && <FaFlask className="text-xl" />}
          {icon === 'art' && <FaPalette className="text-xl" />}
        </div>
        <h3 className="text-center text-lg font-semibold text-gray-800">
          {researcherNames.join(', ')}
        </h3>
        <div
          className="mb-4 grow text-center text-sm text-gray-600"
          style={{ minHeight: '60px' }}
        >
          {description}
        </div>
      </div>
    </a>
  );
};

export default CardProd;
