import Image from 'next/image'; // Importe o componente Image do Next.js

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? 109 : 31; // Use números para width e height
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <Image
        src="/assets/logos/logo_black_half.png" // Referenciando a imagem diretamente
        alt="Logo"
        width={size}
        height={size}
        className="mr-1" // Adicione outras classes se necessário
      />
    </span>
  );
};

export { Logo };
