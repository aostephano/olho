import Link from 'next/link';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';
import { Footer } from '@/templates/Footer';
import { Logo } from '@/templates/Logo';

import ProjetosCardList from './projetos/ProjetosCardList';

const ProjetosPage = () => {
  return (
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
            <Link href="/projetos">Projetos</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre nós</Link>
          </li>
          <li>
            <Link href="/milton">Milton</Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-5 pb-5">
        <div className="flex items-center justify-center p-8">
          <ProjetosCardList />
        </div>
      </Section>
      <Footer />
    </Background>
  );
};

export default ProjetosPage;