import Link from 'next/link';

import { ButtonNav } from '@/button/ButtonNav';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Conheça nosso corpo docente."
      subtitle="Start your Free Trial."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <ButtonNav>Pesquisadores</ButtonNav>
        </Link>
      }
    />
  </Section>
);

export { Banner };
