import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const heading = "Cities";
  return (
    <div>
      <ListGroup items={items} heading={heading} />
    </div>
  );
}

export default App;
