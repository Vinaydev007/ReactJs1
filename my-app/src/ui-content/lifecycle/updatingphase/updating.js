import React, { Component } from 'react'
import axios from 'axios'
import { Product } from '../../cart/profileCard'
import  Spinner  from '../updatingphase/spinners'

export default class Updating extends Component {
    constructor(){
        super()
        this.state={count:1,product:null}
        // console.log(this.state.product)
    }
   
componentDidUpdate(prevprops,prevstate){
        console.log(prevstate.count,this.state.count)
        axios.get(`https://fakestoreapi.com/products/${this.state.count}`)
        .then((res)=>{this.setState({product:res.data})})
        
}

shouldComponentUpdate(prevprops,prevstate){
       if(prevstate.count===10){
        return false;
       }
       else{
        return true;
       }
}
getSnapshotBeforeUpdate(prevsprops,prevstate){
     console.log(prevstate.count,"snapshot")
     return null;
}
increment=()=>{
   this.setState({count:this.state.count+1})
}
decrement=()=>{
    this.setState({count:this.state.count-1})
}
  render() {
    const {count,product}=this.state
    return (
      <div>
        {count}
        <button onClick={this.increment} disabled={count<=0}>+</button>
        <button onClick={this.decrement}>-</button>
        {product?<Product title={product.title} img={product.image} price={product.price}/>:<h1><Spinner/></h1>}
      </div>
    )
  }
}
