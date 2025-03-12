interface ButtonProps {
  text: string;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}

function Button({ text, color = "primary", onClick }: ButtonProps) {
  return (
    <button className={`btn btn-${color}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
