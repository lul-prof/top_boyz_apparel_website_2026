import React, { useState } from 'react'
import './CheckoutPage.css'
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../../context/shopContext';
import axios from "axios"

const CheckoutPage = () => {
    const [mpesa,setMpesa]=useState(false);
    const [cod,setCod]=useState(true);
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [county,setCounty]=useState("");
    const [subCounty,setSubCounty]=useState("");
    const [constituency,setConstituency]=useState("");
    const [ward,setWard]=useState("");
    const [location,setLocation]=useState("");
    const [phone,setPhone]=useState("");
    const [loading,setLoading]=useState(false)
    const {currency,getCartAmount,delivery_fee,backendUrl,cartItems,token}=useContext(ShopContext);
    const navigate=useNavigate()

    const getTimestamp = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        return `TBA${year}${month}${day}${hours}${minutes}${seconds}`;
    };
    const handleCartZero=()=>{
        try {
          toast.error('Add Items to cart to Checkout');
          navigate('/cart')
        } catch (error) {
            console.log(error);
            
        }
    }
  const reference=getTimestamp();
  const address={fname,lname,email,county,subCounty,constituency,ward,location,phone}
  const amount=getCartAmount()+delivery_fee;

    const placeOrder=async()=>{
        try {
            setLoading(true)
            const response=await axios.post(`${backendUrl}/api/user/order`,{items:cartItems,amount:amount, address:address, reference:reference,paymentStatus:false,paymentMethod:"cash on delivery"},{headers:{token}});
            console.log(response);
            if(response.data.success){
                setLoading(false)
                toast.success(response.data.message);
                navigate('/orders');
            }else{
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);   
        }finally{
            setLoading(false)
        }
    }

    const placeOrderMpesa=async(e)=>{
        e.preventDefault();
        try {
            setLoading(true)
          const response=await axios.post(`${backendUrl}/api/user/lipa`,{phone,items:cartItems,amount:amount, address:address},{headers:{token}});  
          if(response.data.success){
                setLoading(false)
                navigate('/orders');
                toast.success(response.data.message);
            }else{
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);   
        }finally{
            setLoading(false)
        }
    }
    if(loading){
    return(
      <div id='loader-class' className="loader-class">
        <div id='loader' className="loader">

        </div>
        <div id='loader-text' className="loader-text">
          <h2>Please wait(Check phone for mpesa prompt)...</h2>
        </div>
      </div>
    )
  }
  return (
    <>
    {
        getCartAmount()>0
        ?
        <div className="checkout-container">
        {/*--------------------------*/}
        <div className="checkout-left">
            <div className="checkout-left-header">
                <h1>DELIVERY INFORMATION</h1>
            </div>
            <div className="checkout-left-form">
                <form>
                    <div className="form-class-small">
                        <input type="text" placeholder='First Name' value={fname} onChange={(e)=>(setFname(e.target.value))} required/>
                        <input type="text" placeholder='Last Name' value={lname} onChange={(e)=>(setLname(e.target.value))} required/>
                    </div>
                     <div className="form-class-large">
                        <input type="text" placeholder='Email Address' value={email} onChange={(e)=>(setEmail(e.target.value))} required/>
                    </div>
                    <div className="form-class-large">
                        <input type="text" placeholder='County' value={county} onChange={(e)=>(setCounty(e.target.value))} required/>
                    </div>
                     <div className="form-class-small">
                        <input type="text" placeholder='Sub County' value={subCounty} onChange={(e)=>(setSubCounty(e.target.value))} required/>
                        <input type="text" placeholder='Constituency' value={constituency} onChange={(e)=>(setConstituency(e.target.value))} required/>
                    </div>
                     <div className="form-class-small">
                        <input type="text" placeholder='Ward' value={ward} onChange={(e)=>(setWard(e.target.value))} required/>
                        <input type="text" placeholder='Location' value={location} onChange={(e)=>(setLocation(e.target.value))} required/>
                    </div>
                    <div className="form-class-large">
                        <input type="text" placeholder='Phone' value={phone} onChange={(e)=>(setPhone(e.target.value))} required/>
                    </div>
                </form>
            </div>
        </div>
       
        {/*--------------------------*/}
        <div className="checkout-right">
            <div className="checkout-right-header">
                <h1>CART TOTAL</h1>
            </div>
            <div className="checkout-right-content">
                <div className="checkout-right-content-subtotal">
                    <p>Subtotal</p>
                    <p>{currency} {getCartAmount()}</p>
                </div>
                <hr />
                <div className="checkout-right-content-delivery">
                    <p>Delivery Fee</p>
                    <p>{currency} {delivery_fee}</p>
                </div>
                <hr />
                <div className="checkout-right-content-total">
                    <b>TOTAL</b>
                    <p>{currency} {getCartAmount()+delivery_fee}</p>
                </div>
                <div className="checkout-right-payment">
                    <h2>PAYMENT METHOD</h2>
                    {/*---------------------*/}
                    <div className="checkout-right-cod">
                        <div style={{backgroundColor:cod?'#FFEA00':""}} onClick={()=>(setCod(!cod),setMpesa(false))}  className="cod-circle">

                        </div>
                        <div className="cod-text">
                            <p>Cash On Delivery</p>
                        </div>
                    </div>
                    {/*----------------------*/}
                    <div className="checkout-right-mpesa">
                        <div style={{backgroundColor:mpesa?'#4CBB17':""}} onClick={()=>(setMpesa(!mpesa),setCod(false))} className="mpesa-circle">

                        </div>
                        <div className="mpesa-text">
                            <p>M-Pesa</p>
                        </div>
                    </div>
                    {/*----------------------*/}
                    <div className="checkout-payment-btn">
                        {
                            cod
                            ?
                            <button onClick={()=>(placeOrder())} className='cod-btn'>Place Order</button>
                            :mpesa
                            ?
                            <button onClick={()=>(document.getElementById("mpesa-details").style.display="block")} className='mpesa-btn'>Lipa na Mpesa</button>
                            :
                            <></>
                            } 
                    </div>
                     {/*-------------------------------*/}
                    <div id='mpesa-details' className="mpesa-details">
                        <form onSubmit={placeOrderMpesa}>
                            <input type="text" placeholder='Use format 254700000000' value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
                            <button type='submit'>LIPA</button>
                            <p onClick={()=>(document.getElementById("mpesa-details").style.display="none")} style={{textAlign:"center",color:"red",fontWeight:"600",marginTop:"10px",cursor:"pointer"}}>Close</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    :
    handleCartZero()
    }
    </>
  )
}

export default CheckoutPage