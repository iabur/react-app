import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleClick = (event: MouseEvent): void => console.log(event);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No item found</p>}
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
