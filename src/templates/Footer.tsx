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
          <h4 className="mb-4 text-center font-bold">Links</h4>
          <ul className="text-center">
            <li>
              <Link href="/link1">Link 1</Link>
            </li>
            <li>
              <Link href="/link2">Link 2</Link>
            </li>
            <li>
              <Link href="/link3">Link 3</Link>
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
