import Link from 'next/link';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';
import { Footer } from '@/templates/Footer';
import { Logo } from '@/templates/Logo';

const MiltonPage = () => {
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
        <div className="p-8 text-center">
          <h1 className="mb-4 text-3xl font-bold">
            Milton de Almeida: A Arte da Crítica
          </h1>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <img
              src="/assets/images/milton_almeida_foto.jpeg"
              alt="Foto de Milton de Almeida"
              className="mb-4 size-32 rounded-full object-cover sm:mb-0 sm:size-48"
            />
            <p className="mb-6 text-lg text-gray-700 sm:max-w-2xl">
              Lorem ipsum dddolor sit amet, consectetur adipiscing elit. Nulla
              convallis urna eu vulputate dictum. Quisque sollicitudin augue id
              metus faucibus, in tincidunt metus pharetra. Sed a efficitur
              velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla convallis urna eu vulputate dictum. Quisque sollicitudin
              augue id metus faucibus, in tincidunt metus pharetra. Sed a
              efficitur velit.
            </p>
          </div>

          {/* <p className="text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat turpis eu libero condimentum, ac pretium neque volutpat.
          </p> */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-lg">
              <img
                src="/assets/images/kelly_03.jpeg"
                alt="Imagem do Milton"
                className="mb-4 rounded-lg"
              />
              <h2 className="mb-2 text-xl font-semibold">
                A Educação através da Arte
              </h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vehicula elit eu dolor fermentum, sit amet egestas lorem
                euismod. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus vehicula elit eu dolor fermentum, sit amet egestas
                lorem euismod.
              </p>
            </div>

            <div className="rounded-lg bg-white p-4 shadow-lg">
              <img
                src="/assets/images/kelly_03.jpeg"
                alt="Imagem do Milton"
                className="mb-4 rounded-lg"
              />
              <h2 className="mb-2 text-xl font-semibold">
                Pensamentos Críticos e Criativos
              </h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vehicula elit eu dolor fermentum, sit amet egestas lorem
                euismod. Milton desafia os limites do pensamento tradicional e
                incentiva uma análise crítica de como a arte pode impactar nossa
                visão de mundo.
              </p>
            </div>

            <div className="rounded-lg bg-white p-4 shadow-lg">
              <img
                src="/assets/images/kelly_03.jpeg"
                alt="Imagem do Milton"
                className="mb-4 rounded-lg"
              />
              <h2 className="mb-2 text-xl font-semibold">
                Reflexões sobre a Produção Cultural
              </h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vehicula elit eu dolor fermentum, sit amet egestas lorem
                euismod. A produção cultural, segundo Milton, deve ser
                constantemente analisada e reavaliada para que possamos entender
                seu impacto nas estruturas sociais e culturais.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-semibold">
              A Visão de Milton sobre o Papel da Educação na Sociedade
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              magna id odio fermentum hendrerit non ac turpis.
            </p>

            <h3 className="mb-4 text-xl font-semibold">
              A Arte como Ferramenta de Crítica Social
            </h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
              enim sed purus malesuada auctor. Etiam vitae nisi eget erat
              fringilla iaculis a at purus.
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </Background>
  );
};

export default MiltonPage;
