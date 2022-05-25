import { Link } from "react-router-dom";

let Details = (props)=>{
  console.log(props)
    return (
      <div className="d-flex flex-column align-items-center justify-content-center text-center m-3">
        <h2 className="my-2">product details</h2>
        <div className="card p-4" style={{width: 300}}>
            <img src={`./../../public/${props.location.selectedPdt.image}`} alt="laptop" className="rounded mx-auto d-block card-img-top"></img>
            <div className="card-body">
                <h4 className="card-text">id:{props.location.selectedPdt.id}</h4>
                <h4>name:{props.location.selectedPdt.name}</h4>
                <h4>price:{props.location.selectedPdt.price}$</h4>
                <h4>qty:{props.location.selectedPdt.qty}</h4>
                <h4>brand:{props.location.selectedPdt.brand}</h4>
            </div>
        </div>
        <Link className="btn btn-secondary my-3" to={"/products"}>back</Link>
      </div>
    );
}

export default Details