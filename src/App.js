import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Products from './components/products';
import Add from "./components/add";
import Details from "./components/details";
import Home from "./components/home";
import React from "react";
import { BrowserRouter ,Route } from "react-router-dom";
import Login from './components/login';
import Edit from './components/edit';


class App extends React.Component {
  constructor(props){
    super(props)
    this.pdts = [
    {id:1,name:"lap1",price:15000,qty:1,image:"images/p1.jpg",brand:"mac"},
    {id:2,name:"lap2",price:20000,qty:4,image:"images/p2.jpg",brand:"hp"},
    {id:3,name:"lap3",price:9000,qty:7,image:"images/p3.jpg",brand:"mac"},
    {id:4,name:"lap4",price:8000,qty:3,image:"images/p4.jpg",brand:"hp"},
    {id:5,name:"lap5",price:6000,qty:2,image:"images/p5.jpg",brand:"dell"},
    {id:6,name:"lap5",price:25000,qty:3,image:"images/p6.jpg",brand:"dell"},
  ]
  this.pdt = {id:1,name:"lap1",price:15000,qty:1,image:"images/p1.jpg",brand:""}
  this.state = {
    products : this.pdts,
    product : this.pdt,
    //control:0
    logout:false
  }
}


   addHandler = (pdt)=>{
     console.log(pdt)
    let newPdts = [...this.pdts,pdt]
    this.setState({
      //control: 0,
      products: newPdts,
    });
  }

  editHandler = (id,pdt)=>{
    console.log(pdt)
    let newPdts = this.state.products.filter((pdt)=>{ return pdt.id !== id})
    newPdts.push(pdt)
    this.setState({
      //control: 0,
      products: newPdts,
    });
  }

  removeHandler = (pdtId) =>{
    let newPdts = this.state.products.filter((pdt)=>{ return pdt.id !== pdtId})
    this.setState({
      products : newPdts
    })
  }

   showDetailsHandler = (pdt) =>{
    this.setState({
      //control : 2,
      product: pdt
    })
  }

  logout = ()=>{
    console.log("logout")
    this.setState({
      logout: true
    })
    sessionStorage.clear()
    // want to write url
    // window.location.pathname('/')
  }



  render(){
    if(this.state.logout === false){
    return(
    <BrowserRouter>
      {/* <Route component={() => <Login></Login> } path="/" exact></Route> */}
      <Header logoutRef={this.logout}></Header>
      <Route component={() => <Home></Home> } path="/" exact ></Route>
      <Route
        component={() => (
          <Products 
            pdts={this.state.products}
            details={this.showDetailsHandler}
            removeHandlerRef={this.removeHandler} 
            ></Products>
        )} path="/products" ></Route>
      <Route component={() => <Add addHandlerRef = {this.addHandler}></Add>} path="/add"></Route>
      <Route component={(props) => <Details {...props}></Details>} path="/details/:id"></Route>
      <Route component={(props) => <Edit editRef={this.editHandler} {...props}></Edit>} path="/edit/:id"></Route>
      <Footer></Footer>
    </BrowserRouter>
    )
  }else{
    return(
      <Login></Login>
    )
  }
    // if(this.state.control === 0){
    //   return (
    //     <div>
    //       <Header></Header>
          
          
    //       <Footer></Footer>
    //     </div>
    //   );
    // }else if(this.state.control === 1){
    //   return(
    //     <div>
    //       <Header></Header>
    //       <h1 className="text-center">HELLO</h1>
    //       <Add addHandlerRef = {this.addHandler}></Add>
    //       <Footer></Footer>
    //     </div>
    //   )
    // }else if(this.state.control === 2){
    //   return (
    //     <div>
    //       <Header></Header>
    //       <h1 className="text-center">HELLO</h1>
    //       <Details pdt={this.state.product} back={this.back}></Details>
    //       <Footer></Footer>
    //     </div>
    //   );
    // }
  }
}

export default App;
