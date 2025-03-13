import ListGroup from "./components/ListGroup";
function App() {
  return (
    <div>
      <ListGroup
        items={["New York", "San Francisco", "Tokyo"]}
        heading="Cities"
        onSelectItem={(item: any) => console.log(item)}
      />
    </div>
  );
}

export default App;
