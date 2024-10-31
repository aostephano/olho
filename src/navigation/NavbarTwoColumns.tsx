import Link from 'next/link';
import { type ReactNode, useState } from 'react';

import { ButtonNav } from '@/button/ButtonNav';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-wrap items-center justify-between">
      <div>
        <Link href="/">{props.logo}</Link>
      </div>

      <div className="flex items-center lg:hidden">
        <button
          className="text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="size-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            ></path>
          </svg>
        </button>
      </div>

      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full items-center text-xl font-medium text-gray-800 lg:flex lg:w-auto`}
      >
        <ul className="navbar flex flex-col items-center lg:flex-row">
          {props.children}
        </ul>
      </nav>

      <div
        className={`flex ${isOpen ? 'mt-4 w-full justify-center' : 'lg:ml-4 lg:mt-0'}`}
      >
        <ButtonNav to="/producao" xl={false}>
          Produção
        </ButtonNav>
      </div>

      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply lg:mr-5;
          }

          @media (max-width: 1024px) {
            .navbar :global(li) {
              @apply mb-2 lg:mb-0;
            }
          }
        `}
      </style>
    </div>
  );
};

export { NavbarTwoColumns };
