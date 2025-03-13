import { useState } from "react";
import styled from "styled-components";

interface ListItemProps {
  selected?: boolean;
}

const ListGroupItem = styled.li<ListItemProps>`
  background-color: ${(props) => (props.selected ? "red" : "white")};
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 23;
  margin: 0;
`;

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <StyledList>
        {items.length === 0 && <p>No item found</p>}
        {items.map((item, index) => (
          <ListGroupItem
            selected={selectedIndex === index}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListGroupItem>
        ))}
      </StyledList>
    </>
  );
}

export default ListGroup;
