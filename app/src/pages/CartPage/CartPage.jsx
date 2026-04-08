import React from 'react'
import './CartPage.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const CartPage = () => {
    const navigate=useNavigate();
    const [cartData, setCartData] = useState([]);
    const [products,setProducts]=useState([]);
    const {currency,getCartAmount,delivery_fee,updateQuantity,cartItems,backendUrl}=useContext(ShopContext);

    useEffect(()=>{
    const fetchProducts=async()=>{
      try {
        const response=await axios.get(`${backendUrl}/api/user/products`);
        if(response.data.success){
          setProducts(response.data.products)
        }else{
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts()
  },[products,backendUrl])

  useEffect(() => {    
    if (products.length > 0) {
      const tempData = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
      console.log(tempData);   
    }

    
  }, [cartItems, products]);

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
                    cartData.map((item,index)=>{
                        const product=products.find((prod)=>prod._id===item._id);
                        
                        

                        if(!product) return null;
                        
                       return(
                         <>
                        <div key={index} className="cart-item">
                            <div className="cart-item-left">
                                <div className="cart-item-left-1">
                                    <img src={product.image[0]} alt="" />
                                </div>
                                <div className="cart-item-left-2">
                                    <h2>{product.title}</h2>
                                    <p>{currency} {product.price}</p>
                                    <span>{item.size}</span>
                                </div>
                            </div>
                    
                            <div className="cart-item-center-2">
                                <input type="number" defaultValue={item.quantity} onChange={(e)=>(e.target.value===""||e.target.value===0?null:updateQuantity(item._id,item.size,Number(e.target.value)))} />
                            </div>
                            <div className="cart-item-right">
                                <img  onClick={()=>(updateQuantity(item._id,item.size,0))} src={assets.closeIcon} alt="image" />
                            </div>
                        
                        </div>
                        <hr />
                        </>
                       )
                    })
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