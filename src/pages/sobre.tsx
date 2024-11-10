import Link from 'next/link';
import React from 'react';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';
import { Footer } from '@/templates/Footer';
import { Logo } from '@/templates/Logo';

const Sobre: React.FC = () => {
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
          <div className="mx-auto max-w-4xl p-6">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
              Sobre o OLHO - Laboratório de Estudos Audiovisuais
            </h2>

            <p className="mb-8 text-center text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod, nisi vel consectetur venenatis, nisl nunc lacinia mi, eu
              pulvinar nisl lorem quis odio. Aliquam erat volutpat. Sed
              tincidunt, nisl ut cursus luctus, quam arcu fermentum ligula, non
              malesuada lorem nunc non ante.
            </p>

            <div className="space-y-8">
              <section>
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                  Nossa História
                </h3>
                <p className="text-lg text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam. Eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                  O Que Fazemos
                </h3>
                <p className="text-lg text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus lacinia suscipit urna, et fermentum enim vulputate id.
                  Sed ut turpis nunc. Cras facilisis tincidunt est, sit amet
                  auctor nisi suscipit id.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                  Nossa Missão
                </h3>
                <p className="text-lg text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus non quam at ante tincidunt aliquet. Nulla facilisi.
                  Curabitur ac erat ligula. Nam sit amet erat vel urna tincidunt
                  auctor.
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                  Nossos Valores
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-lg text-gray-600">
                  <li>Inovation et creativity in audiovisual production.</li>
                  <li>Commitment to education and continuous training.</li>
                  <li>
                    Development of collaborative and interdisciplinary
                    practices.
                  </li>
                  <li>Respect for diverse perspectives and experiences.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </Background>
  );
};

export default Sobre;
