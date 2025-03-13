import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}

function Button({ text, color = "primary", onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
