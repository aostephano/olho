import Link from 'next/link';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';
import { Footer } from '@/templates/Footer';
import { Logo } from '@/templates/Logo';

const Custom404 = () => {
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
            <Link href="/historia">História</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      {/* Alterações feitas aqui */}
      <div className="flex min-h-screen grow flex-col items-center justify-center py-20 text-center">
        <h1 className="text-4xl font-bold">404 - Página Não Encontrada</h1>
        <p className="mt-4 text-lg">
          Desculpe, mas a página que você está procurando não existe.
        </p>
        <Link href="/">
          <span className="mt-4 text-blue-500 hover:underline">
            Voltar para a Página Inicial
          </span>
        </Link>
      </div>

      <Footer />
      <style jsx>
        {`
          h1 {
            @apply text-4xl font-bold;
          }
          p {
            @apply mt-4 text-lg;
          }
        `}
      </style>
    </Background>
  );
};

export default Custom404;
