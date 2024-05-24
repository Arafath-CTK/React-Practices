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

// import Button from "./components/Button";
// import Alert from "./components/Alert";
// import { useState } from "react";

// function App() {
//   const [display, setDisplay] = useState(false);
//   return (
//     <div>
//       {display && (
//         <Alert onClose={() => setDisplay(false)}>
//           Hello <span>World</span>
//         </Alert>
//       )}
//       <Button onClick={() => setDisplay(true)}>Click here</Button>
//     </div>
//   );
// }

// import { FaCalendarDays } from "react-icons/fa6";
// function App() {
//   return (
//     <div>
//       <FaCalendarDays color="teal" size="40" />
//     </div>
//   )
// }

// import LikeButton from "./components/LikeButton";
// function App() {
//   return (
//     <div>
//       <LikeButton onClick={() => console.log("Clicked")} />
//     </div>
//   );
// }

// function App() {
//   const [cart, setCart] = useState({
//     discount: 0.1,
//     items: [
//       { id: 1, title: "Product1", quantity: 1 },
//       { id: 2, title: "Product2", quantity: 1 },
//     ],
//   });

//   const handleClick = () => {
//     setCart({
//       ...cart,
//       items: cart.items.map((item) =>
//         item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     });
//   };

//   return (
//     <div>
//       <>
//         <div>{cart.items[0].quantity}</div>
//         <button onClick={handleClick}></button>
//       </>
//     </div>
//   );
// }

import ExpandableText from "./components/ExpandableText";
function App() {
  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste
        et blanditiis explicabo quas, dolorem sapiente at, aspernatur mollitia
        minus distinctio pariatur dolor, dicta magni ad cupiditate. Repudiandae
        distinctio ut vero libero nobis enim tempore consectetur dicta, minus,
        eveniet odit adipisci quisquam mollitia dolorum, ad vel aliquid fugit
        magni neque harum quo dignissimos expedita nam? Voluptas totam ab
        molestiae ad ipsam iure dolor officiis placeat deleniti sapiente quaerat
        ullam omnis nesciunt itaque obcaecati exercitationem quam hic minus,
        distinctio doloribus blanditiis ducimus error voluptatum. Nisi molestias
        laborum quia dicta odio laudantium doloribus ipsum, dolore in saepe
        magni, quam, soluta a omnis!
      </ExpandableText>
    </div>
  );
}

export default App;
