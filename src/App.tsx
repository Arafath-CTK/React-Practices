import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Starboy", "Baby", "Dandelions", "Levitating", "Blinding Lights", "Shape of You"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading="Songs" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
