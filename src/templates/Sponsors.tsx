import Image from 'next/image';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Background color="bg-gray-100">
    <Section
      title="Nossos parceiros"
      description="Instituições que contribuem para a existência da rede."
    >
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="https://www.unicamp.br"
          target="_blank"
          rel="noopener noreferrer"
          className="h-20 w-40 overflow-hidden"
        >
          <Image
            src="/assets/sponsors/unicamp.png"
            alt="Unicamp"
            width={256}
            height={270}
            className="size-full object-contain"
          />
        </a>
        <a
          href="https://www.fe.unicamp.br"
          target="_blank"
          rel="noopener noreferrer"
          className="h-20 w-40 overflow-hidden"
        >
          <Image
            src="/assets/sponsors/fe_logo.png"
            alt="Faculdade de Educação"
            width={256}
            height={330}
            className="size-full object-contain"
          />
        </a>
        <a
          href="https://www.instagram.com/educacao.campinas/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="h-20 w-40 overflow-hidden"
        >
          <Image
            src="/assets/sponsors/secretaria_edu.png"
            alt="Secretaria de Educação"
            width={256}
            height={140}
            className="size-full object-contain"
          />
        </a>
        <a
          href="https://www.fapesp.br"
          target="_blank"
          rel="noopener noreferrer"
          className="h-20 w-40 overflow-hidden"
        >
          <Image
            src="/assets/sponsors/fapesp_logo.png"
            alt="FAPESP"
            width={200}
            height={60}
            className="size-full object-contain"
          />
        </a>
        <a
          href="https://www.capes.gov.br"
          target="_blank"
          rel="noopener noreferrer"
          className="h-20 w-40 overflow-hidden"
        >
          <Image
            src="/assets/sponsors/capes_logo.png"
            alt="CAPES"
            width={180}
            height={163}
            className="size-full object-contain"
          />
        </a>
        <a
          href="https://www.geoimagens.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="h-20 w-40 overflow-hidden"
        >
          <Image
            src="/assets/sponsors/geoimagens_logo.png"
            alt="Geoimagens"
            width={256}
            height={130}
            className="size-full object-contain"
          />
        </a>
        <a
          href="https://www.redekino.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="h-20 w-40 overflow-hidden"
        >
          <Image
            src="/assets/sponsors/rede_kino_black.png"
            alt="Rede Kino Black"
            width={256}
            height={180}
            className="size-full object-contain"
          />
        </a>
      </div>
    </Section>
  </Background>
);

export { Sponsors };
