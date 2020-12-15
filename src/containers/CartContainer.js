import React,{Component,useEffect,useState} from 'react'
import {BrowserRouter as Router,Route,Link,Redirect, Switch} from 'react-router-dom';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import {addToCart,IncreaseQuantity,DecreaseQuantity,DeleteCart, UpdateCart} from '../actions/CartActions'
import Cart from '../components/Cart/Index'
import CartItem from '../components/Cart/CartItem'
import CartTotal from '../components/Cart/CartTotal'

class CartContainer extends Component{

    // let ListCart = [];
    // let TotalCart=0;
    // Object.keys(items.Carts).forEach(function(item){
    //     TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
    //     ListCart.push(items.Carts[item]);
    // });
    // function TotalPrice(price,tonggia){
    //     return Number(price * tonggia).toLocaleString('en-US');
    // }
    
    showCartItem = (products)=>{
        var result = 'Chưa có sản phẩm nào ở giỏ hàng !';
        var {onDeleteProductInCart,onUpdateCart} = this.props
        if(products.length >0){
            result = products.map((item,idx)=>{
                return (
                    <CartItem 
                    key={idx}
                    item={item}
                    index={idx}
                    onDeleteProductInCart={onDeleteProductInCart}
                    onUpdateCart={onUpdateCart}
                    />
                )
            })
        }
        return result;
    }

    showTotalAmount = (products)=>{
        var result = null;
        if(products.length > 0){
                return(
                    <CartTotal items={products} />
                )
        }
        return result;
    }

    
    render(){

    var {products} = this.props

        return (
        <>
            <div className="bg-light py-3">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Cart</strong></div>
                        </div>
                        </div>
                    </div>
                    <div className="site-section">
                        <div className="container">
                        <div className="row mb-5">
                            <form className="col-md-12" method="post">
                            <div className="site-blocks-table">
                                <table className="table table-bordered">
                                <thead>
                                    <tr>
                                    <th className="product-thumbnail">Tên sản phẩm</th>
                                    <th className="product-thumbnail">Hình ảnh</th>
                                    <th className="product-price">Giá</th>
                                    <th className="product-quantity">Số lượng</th>
                                    <th className="product-total">Tổng cộng</th>
                                    <th className="product-remove"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                       <Cart>
                                         {this.showCartItem(products)}
                                       </Cart>
                                </tbody>
                                </table>
                            </div>
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="row mb-5">
                                <div className="col-md-6 mb-3 mb-md-0">
                                <button className="btn btn-primary btn-sm btn-block">Update Cart</button>
                                </div>
                                <div className="col-md-6">
                                <Button className="btn btn-outline-primary btn-sm btn-block"><Link to="/product/">Continue Shopping</Link></Button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                <label className="text-black h4" htmlFor="coupon">Coupon</label>
                                <p>Enter your coupon code if you have one.</p>
                                </div>
                                <div className="col-md-8 mb-3 mb-md-0">
                                <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                                </div>
                                <div className="col-md-4">
                                <button className="btn btn-primary btn-sm">Apply Coupon</button>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6 pl-5">
                            <div className="row justify-content-end">
                                <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-12 text-right border-bottom mb-5">
                                    <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                    </div>
                                </div>
                                    {this.showTotalAmount(products)}
                                <div className="row">
                                    <div className="col-md-12">
                                    <button className="btn btn-primary btn-lg py-3 btn-block" onclick="window.location='checkout.html'">Proceed To Checkout</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
        </>
        );
    
    }
}



const mapStateToProps = (state)=>{
    return{
        products : state.cartReducer
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return{
        onDeleteProductInCart : (item)=>{
            dispatch(DeleteCart(item))
        },
        onUpdateCart : (item,quantity)=>{
            dispatch(UpdateCart(item,quantity))
        }
    }
}


// export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Cart)

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)