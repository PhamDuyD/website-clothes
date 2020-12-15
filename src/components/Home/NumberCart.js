
import React, { Component } from 'react'

class NumberCart extends Component{
    render(){
        var {items}= this.props;
        return(
            <>
                <span className="count">{this.showNumberCart(items)}</span>
                
            </>
        )
    }
    showNumberCart= (items)=>{
        
        var numberCart = 0;
        if(items.length > 0){
            for(var i = 0 ; i < items.length;i++){
                numberCart += items[i].quantity;
            }
        }
        return numberCart;
    }

}

export default NumberCart;