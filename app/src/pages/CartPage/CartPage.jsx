import React from 'react'
import './CartPage.css'
import { assets, cart } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'

const CartPage = () => {
    const navigate=useNavigate();
    const {currency,getCartAmount,delivery_fee}=useContext(ShopContext);
  return (
    <>
    <div className="cart-container">
            <div className="cart-header">
                <h1>YOUR CART</h1>
            </div>
            {/*---------------------------*/}
            
            <div className="cart-top">
                <hr/>
                {
                    cart.map((item,index)=>(
                        <>
                        <div key={index} className="cart-item">
                            <div className="cart-item-left">
                                <div className="cart-item-left-1">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="cart-item-left-2">
                                    <h2>{item.title}</h2>
                                    <p>{"kes"} {item.price}</p>
                                    <span>{item.size}</span>
                                </div>
                            </div>
                    
                            <div className="cart-item-center-2">
                                <input type="number" value={item.quantity} />
                            </div>
                            <div className="cart-item-right">
                                <img src={assets.closeIcon} alt="" />
                            </div>
                        
                        </div>
                        <hr />
                        </>
                    ))
                }
            </div>
            {/*---------------------------*/}
            <div className="cart-bottom">
                <div className="cart-bottom-header">
                    <h2>CART TOTAL</h2>
                </div>
                <div className="cart-bottom-items">
                    <div className="cart-bottom-item-1">
                        <p>Subtotal</p>
                        <p>{currency} {getCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-bottom-item-2">
                        <p>Delivery Fee</p>
                        <p>{currency} {delivery_fee}</p>
                        
                    </div>
                    <hr />
                    <div className="cart-bottom-item-3">
                        <b>Total</b>
                        <p>{currency} {getCartAmount() + delivery_fee}</p>
                    </div>
                    
                    <div className="cart-bottom-item-btn">
                        <button onClick={()=>(navigate("/checkout"))}>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        
    </div>
    </>
  )
}

export default CartPage