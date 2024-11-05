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
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pesquisadores">Pesquisadores</Link>
        </li>
        <li>
          <Link href="/historia">História</Link>
        </li>
        <li>
          <Link href="/contato">Contato</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-5 pb-5  ">
      <div className="flex items-center justify-center p-8">
        <TwoColumnLayout
          mainTitle="Laboratório de Estudos Audiovisuais"
          title="Faculdade de Educação da Unicamp"
          imageUrl="/assets/images/kelly_02.jpeg"
          credits="Aves - Kelly Sabino"
        />
      </div>
    </Section>
  </Background>
);

export { Hero };
