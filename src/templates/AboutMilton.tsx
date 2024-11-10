import Image from 'next/image';
import Link from 'next/link';

import { Section } from '@/layout/Section';

const AboutMilton = () => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center p-6 text-black md:flex-row">
        <div className="mb-4 shrink-0 text-center md:mb-0 md:mr-6">
          <Link href="/milton/">
            <Image
              src="/assets/images/milton_almeida_foto.jpeg"
              alt="Milton Almeida"
              className="rounded-lg"
              width={300}
              height={230}
            />
          </Link>
          <p className="mt-2 text-center text-sm">
            Milton de Almeida - Criador do OLHO
          </p>
        </div>

        <div className="text-center md:text-justify">
          <h2 className="text-2xl font-semibold">
            Olhares críticos e criativos com educação e arte.
          </h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
            cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
            imperdiet.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutMilton;
