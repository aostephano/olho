import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import TwoColumnLayout from './TwoColumnLayout';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/Home">Home</Link>
        </li>
        <li>
          <Link href="/Pesquisadores">Pesquisadores</Link>
        </li>
        <li>
          <Link href="/História">História</Link>
        </li>
        <li>
          <Link href="/contact">Contato</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-5 pb-5">
      <div className="flex items-center justify-center p-8">
        <TwoColumnLayout
          mainTitle="Laboratório de Estudos Audiovisuais"
          title="Faculdade de Educação da Unicamp"
          imageUrl="/assets/images/img_kelly.jpeg"
          credits="Imagem por Autor - Link para a referência"
        />
      </div>
    </Section>
  </Background>
);

export { Hero };
