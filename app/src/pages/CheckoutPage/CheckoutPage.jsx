import React, { useState } from 'react'
import './CheckoutPage.css'
import toast from 'react-hot-toast';

const CheckoutPage = () => {
    const [mpesa,setMpesa]=useState(false);
    const [cod,setCod]=useState(true);
  return (
    <>
    <div className="checkout-container">
        {/*--------------------------*/}
        <div className="checkout-left">
            <div className="checkout-left-header">
                <h1>DELIVERY INFORMATION</h1>
            </div>
            <div className="checkout-left-form">
                <form>
                    <div className="form-class-small">
                        <input type="text" placeholder='First Name'/>
                        <input type="text" placeholder='Last Name'/>
                    </div>
                     <div className="form-class-large">
                        <input type="text" placeholder='Email Address'/>
                    </div>
                    <div className="form-class-large">
                        <input type="text" placeholder='County'/>
                    </div>
                     <div className="form-class-small">
                        <input type="text" placeholder='Sub County'/>
                        <input type="text" placeholder='Constituency'/>
                    </div>
                     <div className="form-class-small">
                        <input type="text" placeholder='Ward'/>
                        <input type="text" placeholder='Location'/>
                    </div>
                    <div className="form-class-large">
                        <input type="text" placeholder='Phone'/>
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
                    <p>{"ksh"} 2500</p>
                </div>
                <hr />
                <div className="checkout-right-content-delivery">
                    <p>Delivery Fee</p>
                    <p>{"ksh"} 100</p>
                </div>
                <hr />
                <div className="checkout-right-content-total">
                    <b>Subtotal</b>
                    <p>{"ksh"} 2500</p>
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
                            <button onClick={()=>(toast.success('Feature Under Development'))} className='cod-btn'>Place Order</button>
                            :mpesa
                            ?
                            <button onClick={()=>(toast.success('Feature Under Development'))} className='mpesa-btn'>Lipa na Mpesa</button>
                            :
                            <></>
                            }
                            
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CheckoutPage