import { useState } from 'react';

interface CopyEmailButtonProps {
  email: string;
}

const CopyEmailButton = ({ email }: CopyEmailButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reseta após 2 segundos
  };

  return (
    <div className="flex items-center space-x-2 rounded-md bg-gray-900 p-2">
      <p className="text-left">{email}</p>
      <button
        onClick={handleCopy}
        className="flex items-center justify-center rounded-md bg-gray-700 px-2 py-1 text-white hover:bg-gray-500 focus:outline-none"
      >
        {copied ? '✅' : '📋'}
      </button>
    </div>
  );
};

export default CopyEmailButton;
