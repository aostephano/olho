import Image from 'next/image'; // Importe o componente Image do Next.js

type ILogoWhiteProps = {
  xl?: boolean;
};

const LogoWhite = (props: ILogoWhiteProps) => {
  // const size = props.xl ? 109 : 31; // Use números para width e height
  const size = props.xl ? 1500 : 400; // Use números para width e height
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-100 ${fontStyle}`}>
      <Image
        src="/assets/logos/logo_white_complete.png" // Referenciando a imagem diretamente
        alt="Logo"
        width={size}
        height={size}
        className="mr-1"
      />
    </span>
  );
};

export { LogoWhite };
