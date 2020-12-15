import React, { Component } from 'react'
import { Button } from 'reactstrap';

class CartItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            quantity : 1
        }
        
    }



    render(){
        var { item } = this.props;
        var {quantity} = item.quantity > 0 ? item : this.state.quantity;
        return(
            <tr >
                <td className="product-name">
                    <h2 className="h5 text-black">{item.item.name}</h2>
                </td>
                <td className="product-thumbnail">
                    <img src={item.item.image} alt="Image" style={{width:'100px',height:'100px'}} className="img-fluid" />
                </td>
                <td>{ item.item.price}</td> 
                <td>
                    <div className="input-group mb-3" style={{maxWidth: '120px'}}>
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={()=>this.onUpdateQuantity(item.item,item.quantity - 1)} >−</button>
                    </div>
                    {/* <input type="text" className="form-control text-center" defaultValue={1} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" /> */}
                    <span className='btn btn-light'>{quantity}</span>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={()=>this.onUpdateQuantity(item.item,item.quantity + 1)} >+</button>
                    </div>
                    </div>
                </td>
                <td>{this.onShowTotal(item.item.price,item.quantity)}</td>
                <td>
                    {/* <a  className="btn btn-danger btn-sm" style={{color:'#fff'}} onClick={()=>DeleteCart(idx)} >X</a> */}
                    <Button color="danger" onClick={()=>this.onDelete(item.item)}>X</Button>
                </td>
            </tr>
        )
    }


    onDelete = (item)=>{
        console.log(item);
        this.props.onDeleteProductInCart(item)
    }

    onUpdateQuantity = (item,quantity)=>{
        if(quantity > 0){
            this.setState({
                quantity:quantity
            })
            this.props.onUpdateCart(item,quantity);
        }
    }

    onShowTotal = (price,quantity)=>{
        return price *quantity;
    }




}




export default CartItem;


