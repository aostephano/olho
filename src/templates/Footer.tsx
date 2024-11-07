import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import CopyEmailButton from './CopyEmailButton';
import { LogoWhite } from './LogoWhite';

const Footer = () => (
  <Background color="bg-black">
    <Section>
      <div className="grid grid-cols-1 gap-8 py-10 text-white sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col items-center">
          <div className="size-40 sm:size-48">
            <LogoWhite />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="mb-4 text-center font-bold">Home</h4>
          <ul className="text-center">
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
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="mb-4 text-center font-bold">Parceiros</h4>
          <ul className="text-center">
            <li>
              <Link href="https://unicamp.br">UNICAMP</Link>
            </li>
            <li>
              <Link href="/link2">Faculdade de Educação</Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/educacao.campinas/?hl=en">
                Secretaria de Educação
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="mb-4 text-center font-bold">Contate-nos!</h4>
          <div className="flex flex-col items-center">
            <CopyEmailButton email="olho@unicamp.br" />
          </div>
        </div>
      </div>
    </Section>
  </Background>
);

export { Footer };
