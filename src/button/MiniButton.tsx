import classnames from 'classnames';
import { useEffect, useState } from 'react';

type IMiniButtonProps = {
  xl?: boolean;
  small?: boolean;
  children: string;
  bold?: boolean;
  onClick?: () => void;
  className?: string;
};

const MiniButton = (props: IMiniButtonProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const btnClass = classnames(
    {
      btn: true,
      'btn-xl': props.xl,
      'btn-base': !props.xl && !props.small,
      'btn-small': props.small,
      'btn-primary': true,
      'font-bold': props.bold,
    },
    props.className,
  );

  return (
    <div className={btnClass} onClick={props.onClick}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center cursor-pointer;
          }

          .btn-base {
            @apply text-lg font-semibold py-0 px-1;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-small {
            @apply text-sm font-medium py-0 px-0;
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

export { MiniButton };
