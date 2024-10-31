import React, { useEffect, useState } from 'react';

interface TwoColumnLayoutProps {
  mainTitle: string;
  title: string;
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

  const handleOptionClick = (content: string) => {
    setCurrentContent(content);
    setIsAutoSwitching(false);
  };

  useEffect(() => {
    if (isAutoSwitching) {
      const options = ['video', 'image1', 'image2'];
      let index = 0;

      const intervalId = setInterval(() => {
        setCurrentContent(options[index] || 'video');
        index = (index + 1) % options.length;
      }, 3000);

      return () => clearInterval(intervalId);
    }
    return undefined;
  }, [isAutoSwitching]);

  const additionalImageUrl1 = '/assets/images/kelly_02.jpeg';
  const additionalImageUrl2 = '/assets/images/kelly_03.jpeg';

  return (
    <div className="grid h-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-5">
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

      <div className="col-span-5 flex h-full min-h-[200px] flex-col items-center justify-center md:col-span-3">
        <div className="relative aspect-video w-full">
          {currentContent === 'video' && (
            <iframe
              className="absolute inset-0 size-full rounded-lg"
              src="https://www.youtube.com/embed/2NL12JnNNVs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          {currentContent === 'image1' && (
            <img
              src={additionalImageUrl1}
              alt="Descrição da imagem 1"
              className="absolute inset-0 size-full rounded-lg object-cover shadow-lg"
            />
          )}
          {currentContent === 'image2' && (
            <img
              src={additionalImageUrl2}
              alt="Descrição da imagem 2"
              className="absolute inset-0 size-full rounded-lg object-cover shadow-lg"
            />
          )}
        </div>

        <p className="mt-4 text-center text-sm italic text-gray-700">
          Explorando imagens, ampliando saberes
        </p>

        <div className="mt-4 flex justify-center space-x-4">
          <button
            className={`flex size-4 items-center justify-center rounded-full text-xs font-bold text-white ${
              currentContent === 'video' ? 'bg-yellow-500' : 'bg-yellow-200'
            } hover:bg-yellow-600`}
            onClick={() => handleOptionClick('video')}
          ></button>
          <button
            className={`flex size-4 items-center justify-center rounded-full text-xs font-bold text-white ${
              currentContent === 'image1' ? 'bg-yellow-500' : 'bg-yellow-200'
            } hover:bg-yellow-600`}
            onClick={() => handleOptionClick('image1')}
          ></button>
          <button
            className={`flex size-4 items-center justify-center rounded-full text-xs font-bold text-white ${
              currentContent === 'image2' ? 'bg-yellow-500' : 'bg-yellow-200'
            } hover:bg-yellow-600`}
            onClick={() => handleOptionClick('image2')}
          ></button>
        </div>
      </div>

      <div className="col-span-5 flex h-full flex-col items-center justify-center md:col-span-2">
        <img
          src={imageUrl}
          alt="Descrição da imagem"
          className="max-h-48 w-auto rounded-lg object-cover shadow-lg md:max-h-full md:w-full"
        />
        <p className="mt-2 text-right text-sm text-gray-900">{credits}</p>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
