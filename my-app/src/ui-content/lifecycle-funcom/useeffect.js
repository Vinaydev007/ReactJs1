// import React from "react";
// import { useEffect, useState } from "react";

// export default function Useeffect() {
//   const [count, setcount] = useState(0);
//   const [display, setdiaplay] = useState("VINAY");
//   const[product,setproduct]=useState([])
//   //  useEffect(()=>{setcount(count+1)},[display])
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((json) =>setproduct(json)) ;
//       if(json.length>0){
//       setdisplay(json[0].title)}
//   },[]);
//   const handlechange = () => {
//     // setdisplay(display + "HELLO");
//   };
//   return (
//     <div>
//       <h1>{count}</h1>
//       <h1>{display}</h1>
//       <button onClick={handlechange}>click me</button>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";

export default function Useeffect() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState("VINAY");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json); // Update the product state with fetched data
        if (json.length > 0) {
          setDisplay(json[0].title); // Update display with the title of the first product
        }
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []); // The empty dependency array ensures this runs only once on component mount

  const handleChange = () => {
    setDisplay(display + " HELLO");
  };

  return (
    <div>
      <h1>{count}</h1>
      <h1>{display}</h1>
      <button onClick={handleChange}>Click me</button>
    </div>
  );
}

