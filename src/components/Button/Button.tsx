interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
  ariaLabel?: string;
}

const Button = ({ children, onClick, disabled, ariaLabel }: ButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className="px-4 py-3 leading-5 bg-primary rounded font-semibold text-white"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const IconButton = ({ children, onClick, disabled, ariaLabel }) => {
  return (
    <button
      className={`p-2 ${disabled ? "cursor-not-allowed opacity-30" : ""} `}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
