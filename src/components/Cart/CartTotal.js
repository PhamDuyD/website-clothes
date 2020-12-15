import React, { Component } from 'react'

class CartTotal extends Component{
    render(){
        var {items} = this.props;
        console.log(items);
        return(
            <>
                <div className="row mb-3">
                    <div className="col-md-6">
                    <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                    <strong className="text-black">{this.showTotalAmount(items)}</strong>
                    {/* {Number(TotalCart).toLocaleString('en-US')} */}
                    
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-6">
                    <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                    <strong className="text-black">total</strong>
                    </div>
                </div>
            </>
        )
    }
    showTotalAmount = (items)=>{
        var total = 0;
        if(items.length > 0){
            for(var i = 0 ; i < items.length;i++){
                total += items[i].item.price * items[i].quantity;
            }
        }
        return total;
    }

}

export default CartTotal;
