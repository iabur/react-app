interface CardProps {
  items: string[];
}

const Card = ({ items }: CardProps) => {
  return (
    <div>
      <h1>Card</h1>
      <p>{items.map((item) => item)}</p>
    </div>
  );
};

export default Card;
