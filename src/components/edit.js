import React from "react";
import { Link } from "react-router-dom";

class Edit extends React.Component {
  state = {
    id: this.props.location.selectedPdt.id,
    name: this.props.location.selectedPdt.name,
    price: this.props.location.selectedPdt.price,
    qty: this.props.location.selectedPdt.qty,
    img: this.props.location.selectedPdt.image,
    brand: this.props.location.selectedPdt.brand,
  };

  eventHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <h3 className="text-center">Add Product</h3>
        <label className="mt-2">ID:</label>
        <input
          type="number"
          name="id"
          value={this.state.id}
          className="form-control"
          onChange={this.eventHandler}
        ></input>

        <label className="mt-2">Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          className="form-control"
          onChange={this.eventHandler}
        ></input>

        <label className="mt-2">Price:</label>
        <input
          type="number"
          name="price"
          value={this.state.price}
          className="form-control"
          onChange={this.eventHandler}
        ></input>

        <label className="mt-2">Qty:</label>
        <input
          type="number"
          name="qty"
          value={this.state.qty}
          className="form-control"
          onChange={this.eventHandler}
        ></input>

        <label className="mt-2">product image:</label>
        <img src={this.state.image} alt='laptop'></img>

        <label className="mt-2">Select image:</label>
        <input
          type="file"
          id="img"
          name="img"
          className="form-control"
          value={this.state.image}
          accept="image/*"
          onBlur={this.eventHandler}
        ></input>

        <label className="mt-2">Brand:</label>
        <input
          type="text"
          name="brand"
          value={this.state.brand}
          className="form-control"
          onChange={this.eventHandler}
        ></input>

        <Link
          type="button"
          className="btn btn-primary my-3"
          to={"/products"}
          onClick={() => this.props.editRef(this.state.id, this.state)}
        >
          Edit Product
        </Link>
        <br></br>
        <Link type="button" className="btn btn-secondary mb-3" to={"/products"}>
          Back
        </Link>
      </div>
    );
  }
}

export default Edit;
