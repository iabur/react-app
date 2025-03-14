interface NavbarProps {
  itemsCount: number;
}

const Navbar = ({ itemsCount }: NavbarProps) => {
  return (
    <div>
      <h1>Navbar</h1>
      <p>Items: {itemsCount}</p>
    </div>
  );
};

export default Navbar;
