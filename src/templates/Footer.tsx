import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import CopyEmailButton from './CopyEmailButton';
import { LogoWhite } from './LogoWhite';

const Footer = () => (
  <Background color="bg-black">
    <Section>
      <div className="grid grid-cols-1 gap-4 py-0 text-white sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col items-center">
          <div className="size-32 sm:size-40">
            <LogoWhite />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="mb-2 text-center font-bold">Home</h4>
          <ul className="space-y-1 text-center">
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
          <h4 className="mb-2 text-center font-bold">Parceiros</h4>
          <ul className="space-y-1 text-center">
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
          <h4 className="mb-2 text-center font-bold">Contate-nos!</h4>
          <div className="flex flex-col items-center">
            <CopyEmailButton email="olho@unicamp.br" />
          </div>
          <div className="mt-2">
            <Link
              href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template"
              target="_blank"
            >
              <div className="mt-2 flex flex-col items-center text-sm text-gray-500">
                <Link
                  href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template"
                  target="_blank"
                >
                  <span className="hover:text-gray-700">
                    Template NextJS utilizado na confecção do portal
                  </span>
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  </Background>
);

export { Footer };
