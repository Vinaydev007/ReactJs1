import React from "react";
import { Product } from "../cart/profileCard";

class List extends React.Component {
  constructor() {
    super();
    this.state = { product: [] };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => this.setState({ product: json }));
  }

  render() {
    return (
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",height:"200px"}}>
        {this.state.product.map((a) => (
          <Product key={a.id} title={a.title} image={a.image} price={a.price} desc={a.description}/>
        ))}
      </div>
    );
  }
}

export default List;
