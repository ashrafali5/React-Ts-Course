const Button = ({
  label,
  onClick,
  isDisabled,
}: {
  label: string;
  onClick: () => void;
  isDisabled: boolean;
}) => {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
      <button onClick={onClick} disabled={isDisabled}>
        {label}
      </button>
    </div>
  );
};

export default Button;
