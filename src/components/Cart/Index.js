import React,{Component,useEffect,useState} from 'react'
import {BrowserRouter as Router,Route,Link,Redirect, Switch} from 'react-router-dom';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import {addToCart,IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../../actions/CartActions'




class Cart extends Component{

    // let ListCart = [];
    // let TotalCart=0;
    // Object.keys(items.Carts).forEach(function(item){
    //     TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
    //     ListCart.push(items.Carts[item]);
    // });
    // function TotalPrice(price,tonggia){
    //     return Number(price * tonggia).toLocaleString('en-US');
    // }
    render(){

    var {children} = this.props
        return (
        <>
            {children}
        </>
        );
    
    }
}


// export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Cart)

export default Cart