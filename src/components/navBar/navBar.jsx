import React, { Component } from "react";
import "./navBar.css"

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component{
  render() {
  return(
  
      
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

    <Link className="navbar-brand" to="/">
      Organika
    </Link>
   
   <button
   className="navbar-toggler"
   type="button"
   data-toggle="collapse"
   data-taret="#navbarSupportedContent"
   aria-controls="navbarSupportedContent"
   aria-expanded="false"
   aria-label="Toggle naviation"></button>

  <ul className="navbar-nav mr-auto">
  <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span> </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/catalog">Catalog </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/todo">TodoList </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/about">About </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/cart">Carts </Link>
              </li>
  </ul>
    
   <div className="form-inline my-2 my-lg-0">
   <Link className="btn btn-outline-info my-2 my-sm-0" to="/cart">
     <i className="fa fa-shooping-cart cart-icon" aria-hidden="true"></i>
     View Cart
     <span className="badge badge-primary cart-badge">{this.props.count}</span>
     </Link>
     </div>    
    </nav>
      
    );
  }
}


const mapStateToProps = (state) => {
  return{
    test: 'this is a test',
    count: state.cart.length,
  };

};

// pass a fn that maps the state to an obj

export default connect(mapStateToProps,null) (NavBar);

