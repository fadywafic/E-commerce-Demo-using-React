import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";
import NotFound from "./notFound";

class Products extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  state={
    selectedItems:[],
    filterFlag:false,
  }
  search = (e)=>{
    console.log("dropdown", e.target.value);
    let filteredItem = this.props.pdts.filter((pdt)=>{return pdt.brand === e.target.value})
    this.setState({
      selectedItems: filteredItem,
      filterFlag: true,
    });
  }

  render() {
    // console.log('state',this.state,'         props',this.props)
    if(sessionStorage.getItem('role') === 'admin'){
      if(this.state.filterFlag){
    return (
      <div className="container">
        <div className='container'>
            <Link className="btn btn-warning my-3 container" to={"/add"}>+ New Product</Link>
          </div>
          <div className="container row">
            <span className="my-2 col-2 ">Filter by name:</span>
            <select className=" my-2 col-10" onChange={this.search}>
              <option selected disabled>select a brand</option>
              <option>mac</option>
              <option>hp</option>
              <option>dell</option>
            </select>
          </div>
        <table className="table  table-bordered table-hover table-responsive text-center">
          <thead className="thead-inverse">
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>qty</th>
              <th>image</th>
              <th>brand</th>
              <th>operations</th>
            </tr>
          </thead>
          <tbody>
                {this.state.selectedItems.map((pdt, i) => {
              return (
                <tr key={i}>
                  <td>{pdt.id}</td>
                  <td>{pdt.name}</td>
                  <td>{pdt.price}</td>
                  <td>{pdt.qty}</td>
                  <td>
                    <img src={pdt.image} alt="laptop"></img>
                  </td>
                  <td>{pdt.brand}</td>
                  <td>
                    <Link className="btn btn-warning m-1" to={{pathname:`/edit/${pdt.id}`, selectedPdt: pdt}} > Edit</Link>
                    <Link className="btn btn-success m-1" to={{pathname:`/details/${pdt.id}`, selectedPdt: pdt}} > Details</Link>
                    <button className="btn btn-danger m-1" onClick={() => this.props.removeHandlerRef(pdt.id)}>Remove</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    ) 
  }else{
    return(
      <div className="container">
        <div className='container'>
            <Link className="btn btn-warning my-3 container" to={"/add"}>+ New Product</Link>
          </div>
          <div className="container row">
            <span className="my-2 col-2 ">Filter by name:</span>
            <select className=" my-2 col-10" onChange={this.search}>
              <option selected disabled>select a brand</option>
              <option>mac</option>
              <option>hp</option>
              <option>dell</option>
            </select>
          </div>
        <table className="table  table-bordered table-hover table-responsive text-center">
          <thead className="thead-inverse">
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>qty</th>
              <th>image</th>
              <th>brand</th>
              <th>operations</th>
            </tr>
          </thead>
          <tbody>
            {this.props.pdts.map((pdt, i) => {
              return (
                <tr key={i}>
                  <td>{pdt.id}</td>
                  <td>{pdt.name}</td>
                  <td>{pdt.price}</td>
                  <td>{pdt.qty}</td>
                  <td>
                    <img src={pdt.image} alt="laptop"></img>
                  </td>
                  <td>{pdt.brand}</td>
                  <td>
                    <Link className="btn btn-warning m-1" to={{pathname:`/edit/${pdt.id}`, selectedPdt: pdt}} > Edit</Link>
                    <Link className="btn btn-success m-1" to={{pathname:`/details/${pdt.id}`, selectedPdt: pdt}} > Details</Link>
                    <button className="btn btn-danger m-1" onClick={() => this.props.removeHandlerRef(pdt.id)}>Remove</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  }
  } else{
    return(
      <NotFound></NotFound>
    )
  }
  }
}

export default Products