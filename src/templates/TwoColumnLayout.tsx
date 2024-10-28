import React, { useEffect, useState } from 'react';

interface TwoColumnLayoutProps {
  mainTitle: string; // Título principal em preto
  title: string; // Subtítulo em amarelo
  imageUrl: string;
  credits: string;
}

const TwoColumnLayout = ({
  mainTitle,
  title,
  imageUrl,
  credits,
}: TwoColumnLayoutProps) => {
  const [currentContent, setCurrentContent] = useState('video');
  const [isAutoSwitching, setIsAutoSwitching] = useState(true);

  // Função para alternar entre vídeo, imagem1 e imagem2
  const handleOptionClick = (content: string) => {
    setCurrentContent(content);
    setIsAutoSwitching(false); // Parar a alternância automática ao clicar em um botão
  };

  // Alternância automática
  useEffect(() => {
    if (isAutoSwitching) {
      const options = ['video', 'image1', 'image2'];
      let index = 0;

      const intervalId = setInterval(() => {
        setCurrentContent(options[index] || 'video');
        index = (index + 1) % options.length;
      }, 3000);

      return () => clearInterval(intervalId); // Limpar intervalo ao desmontar o componente
    }
    return undefined;
  }, [isAutoSwitching]);

  // URLs das imagens adicionais
  const additionalImageUrl1 = '/assets/images/crowdin-white.png'; // URL da primeira imagem
  const additionalImageUrl2 = '/assets/images/nextlessjs.png'; // URL da segunda imagem

  return (
    <div className="grid h-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-5">
      {/* Título principal e subtítulo */}
      <div className="col-span-5">
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-3xl font-bold text-black md:text-4xl">
            {mainTitle}
          </h2>
          <h3 className="mt-2 text-xl font-semibold text-yellow-500 md:text-2xl">
            {title}
          </h3>
        </div>
      </div>

      {/* Primeira coluna: Conteúdo alternável (Vídeo ou Imagem) */}
      <div className="col-span-5 flex h-full min-h-[200px] flex-col items-center justify-center md:col-span-3">
        {currentContent === 'video' && (
          <div className="aspect-video w-full">
            <iframe
              className="size-full rounded-lg"
              src="https://www.youtube.com/embed/2NL12JnNNVs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        {currentContent === 'image1' && (
          <div className="aspect-video w-full">
            <img
              src={additionalImageUrl1}
              alt="Descrição da imagem 1"
              className="size-full rounded-lg object-cover shadow-lg"
            />
          </div>
        )}
        {currentContent === 'image2' && (
          <div className="aspect-video w-full">
            <img
              src={additionalImageUrl2}
              alt="Descrição da imagem 2"
              className="size-full rounded-lg object-cover shadow-lg"
            />
          </div>
        )}
      </div>

      {/* Segunda coluna: Imagem JPEG centralizada */}
      <div className="col-span-5 flex h-full flex-col items-center justify-center md:col-span-2">
        <img
          src={imageUrl}
          alt="Descrição da imagem"
          className="max-h-48 w-auto rounded-lg object-cover shadow-lg md:max-h-full md:w-full"
        />
        {/* Texto para créditos */}
        <p className="mt-2 text-right text-sm text-gray-900">{credits}</p>
      </div>

      {/* Botões de Opções (Círculos com números) */}
      <div className="col-span-5 flex justify-center space-x-4">
        <button
          className="flex size-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-white hover:bg-yellow-600"
          onClick={() => handleOptionClick('video')}
        >
          ·
        </button>
        <button
          className="flex size-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-white hover:bg-yellow-600"
          onClick={() => handleOptionClick('image1')}
        >
          ·
        </button>
        <button
          className="flex size-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-white hover:bg-yellow-600"
          onClick={() => handleOptionClick('image2')}
        >
          ·
        </button>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
