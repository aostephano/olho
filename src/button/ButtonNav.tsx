import className from 'classnames';

type IButtonNavProps = {
  xl?: boolean;
  children: string;
  bold?: boolean; // nova propriedade para definir o texto como negrito
};

const ButtonNav = (props: IButtonNavProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
    'font-bold': props.bold, // adiciona a classe font-bold se a prop bold for true
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
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
