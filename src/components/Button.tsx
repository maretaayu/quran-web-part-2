type ButtonProps = {
  text: string;
  onClick?: () => void;
};

function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="bg-accent-light-purple text-light font-bold py-2 px-4 rounded-sm w-fit disabled:bg-subtle disabled:text-light disabled:cursor-not-allowed"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
