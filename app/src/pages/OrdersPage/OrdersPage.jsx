import React from "react";
import "./OrdersPage.css";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import axios from "axios";
import { toast } from "react-hot-toast";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  const [loading,setLoading]=useState(false)

  const [products, setProducts] = useState([]);

  const { token, backendUrl } = useContext(ShopContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true)
        const response = await axios.post(
          `${backendUrl}/api/user/orders`,
          {},
          { headers: { token } },
        );
        console.log(response);
        if (response.data.success) {
          setLoading(false)
          toast.success(response.data.message);
          setOrders(response.data.orders);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    };
    fetchOrders();
  }, [backendUrl, token]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${backendUrl}/api/user/products`);
        console.log(response);

        if (response.data.success) {
          setLoading(false)
          setProducts(response.data.products);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    };
    fetchProducts();
  }, []);
  if(loading){
    return(
      <div id='loader-class' className="loader-class">
        <div id='loader' className="loader">

        </div>
        <div id='loader-text' className="loader-text">
          <h2>Please wait...</h2>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className="orders-container">
        <div className="orders-header">
          <h2>YOUR ORDERS</h2>
        </div>
        <div className="orders">
          {
          orders.map((order) => (
            <div key={order._id} className="order">
              <div className="order-item">
                {
                  order.items.map((item)=>{
                     let product=products.find((prod)=>prod._id===item.id);
                     if(!product) return null;
                     return(
                      <div className="order-item-image">
                        <img src={product.image[0]} alt="image" />
                        <p>{product.title}</p>
                      </div>
                      
                     )
                  })
                }
              </div>
              <div className="order-pay-method">
                <p>{order.paymentMethod}</p>
              </div>
              <div className="order-amt">
                <p>{order.amount}</p>
              </div>
              <div className="order-status">
                <p style={{color:order.status==="order placed"?"red":order.status==="order packaged"?"yellow":order.status==="order delivered"?"green":"blue"}}>{order.status}</p>
              </div>
              <div className="order-reference">
                <p>{order.reference}</p>
              </div>
              <div className="order-pay-status">
                <p style={{ color: order.paymentStatus ? "green" : "red" }}>
                  {order.paymentStatus ? "paid" : "pending"}
                </p>
              </div>
              <div className="order-date">
                <p></p>
                <p>
                  {new Date(order.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
