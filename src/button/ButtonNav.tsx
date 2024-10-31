import className from 'classnames';
import { useRouter } from 'next/router';

type IButtonNavProps = {
  xl?: boolean;
  children: string;
  bold?: boolean;
  to?: string;
  onClick?: () => void;
};

const ButtonNav = (props: IButtonNavProps) => {
  const router = useRouter();

  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
    'font-bold': props.bold,
  });

  const handleClick = () => {
    if (props.to) {
      router.push(props.to);
    }
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div className={btnClass} onClick={handleClick}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center cursor-pointer;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-black bg-primary-700;
          }

          .btn-primary:hover {
            @apply bg-primary-900;
          }
        `}
      </style>
    </div>
  );
};

export { ButtonNav };
