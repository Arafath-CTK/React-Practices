// import ListGroup from "./components/ListGroup";
// function App() {
//   const items = ["Starboy", "Baby", "Dandelions", "Levitating", "Blinding Lights", "Shape of You"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup items={items} heading="Songs" onSelectItem={handleSelectItem} />
//     </div>
//   );
// }

// import Alert from "./components/Alert";
// function App() {
//   return (
//     <div>
//       <Alert>
//         Hello <span>World</span>
//       </Alert>
//     </div>
//   );
// }

// import Button from "./components/Button";
// function App() {
//   return (
//     <div>
//       <Button onClick={() => console.log("Clicked")}>Click here</Button>
//     </div>
//   );
// }

import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      {display && (
        <Alert onClose={() => setDisplay(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button onClick={() => setDisplay(true)}>Click here</Button>
    </div>
  );
}

export default App;
