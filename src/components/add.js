import React from "react";
import { Link } from "react-router-dom";

class Add extends React.Component {
  state = {
    id: 0,
    name: "",
    price: 0,
    qty: 0,
    img: "",
    brand: "",
  };

  eventHandler = (e)=>{
    this.setState({
        [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="container">
          <h3 className="text-center">Add Product</h3>
          <label className="mt-2">ID:</label>
          <input type="number" name="id" value={this.state.id} className="form-control" onChange={this.eventHandler} ></input>

          <label className="mt-2">Name:</label>
          <input type="text" name="name" value={this.state.name} className="form-control" onChange={this.eventHandler} ></input>

          <label className="mt-2">Price:</label>
          <input type="number" name="price" value={this.state.price} className="form-control" onChange={this.eventHandler} ></input>

          <label className="mt-2">Qty:</label>
          <input type="number" name="qty" value={this.state.qty} className="form-control" onChange={this.eventHandler} ></input>

            <label className="mt-2">Select image:</label>
            <input  type="file" id="img" name="img" className="form-control" value={this.state.image} accept="image/*" onBlur={this.eventHandler}></input>

          <label className="mt-2">Brand:</label>
          <input type="text" name="brand" value={this.state.brand} className="form-control" onChange={this.eventHandler} ></input>

          <Link type="button"  className="btn btn-primary my-3" to={"/products"} onClick={()=>this.props.addHandlerRef(this.state)}>Add Product</Link>
          <br></br>
          <Link type="button"  className="btn btn-secondary mb-3" to={"/products"} >Back</Link>

      </div>
    );
  }
}

export default Add
