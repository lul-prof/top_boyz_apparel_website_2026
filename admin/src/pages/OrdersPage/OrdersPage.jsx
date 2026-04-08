import React, { useEffect, useState } from "react";
import "./OrdersPage.css";
import axios from "axios";
import toast from "react-hot-toast";
import { assets } from "../../assets/assets";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [products,setProducts]=useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [status,setStatus]=useState("");
  
  const token=localStorage.getItem("admin-token");

  const deleteOrder=async(id)=>{
    try {
      const response=await axios.post(`${backendUrl}/api/admin/deleteOrder/${id}`,{},{headers:{token}});
      if(response.data.success){
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const updateOrderStatus=async(id)=>{
    try {
      if(status!==""){
        const response=await axios.post(`${backendUrl}/api/admin/updateStatus/${id}`,{status:status},{headers:{token}});
      if(response.data.success){
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message);
      }
      }else{
        toast.error("Failed. Try Again!!!")
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  const updateStatus=async(id)=>{
    try {
      const response=await axios.post(`${backendUrl}/api/admin/paid/${id}`,{},{headers:{token}});
      if(response.data.success){
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
        const fetchProducts=async()=>{
            try {
                const response=await axios.get(`${backendUrl}/api/user/products`,{},{headers:{token}});
                console.log(response);
                if(response.data.success){
                    setProducts(response.data.products);
                }else{
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts()
    },[backendUrl,products,token])


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/admin/orders`,{},{headers:{token}});
        console.log("orders", response);
        if (response.data.success) {
          setOrders(response.data.orders);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, [backendUrl, orders,token]);
  return (
    <>
    <div className="orders-container">
      <div className="order-header">
        <h1>Orders</h1>
      </div>
      <div className="orders">
        {
          orders.map((order,i)=>(
            <div className="order">
              <div className="order-id">
                <p>{i+1}</p>
              </div>
              <div className="order-address">
                <p>
                  {
                  order.address.county
                  }
                </p>
                <p>
                  {
                    order.address.subCounty
                  }
                </p>
                <p>
                  {
                    order.address.constituency
                  }
                </p>
                <p>
                  {
                    order.address.ward
                  }
                </p>
                <p>
                  {
                    order.address.location
                  }
                </p>
              </div>
              <div className="order-reference">
                <p>{order.reference}</p>
              </div>
              <div className="order-payment-amt">
                <p>{order.amount}</p>
              </div>
              <div className="order-pay-method">
                <p>{order.paymentMethod}</p>
              </div>
              <div className="order-pay-status">
                <p style={{color:order.paymentStatus?"green":"red"}}>{order.paymentStatus?"paid":"pending"}</p>
                {
                  order.paymentStatus
                  ?
                  ""
                  :
                  <img onClick={()=>updateStatus(order._id)} src={assets.payVerify} alt="image" />
                }
              </div>
              <div className="order-user">
                <p>{order.user.full_names}</p>
              </div>
              <div className="order-email">
                <p>{order.user.email}</p>
              </div>
              <div className="order-phone">
                <p>{order.user.phone}</p>
              </div>
              <div className="order-status">
                <select  value={status} onChange={(e)=>(setStatus(e.target.value),updateOrderStatus(order._id))}>
                  <option value={order.status}>{order.status}</option>
                  <option value="order received">Order Received</option>
                  <option value="order packaged">Order Packaged</option>
                  <option value="order delivered">Order Delivered</option>
                </select>
              </div>
              <div className="order-items">
                {
                  order.items.map((item)=>{
                    const i=products.find(prod=>prod._id===item.id);
                    if(i){
                      return(
                        <div className="order-items-item">
                          <p>{i.title}</p>
                          <img src={i.image[0]} alt="image" />
                          <p>{i.price}</p>
                        </div>
                       
                      )
                    }
                  })    
              }
              </div>
              <div className="order-actions">
                <img onClick={()=>deleteOrder(order._id)} src={assets.deleteIcon} alt="image"/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </>
  );
};

export default OrdersPage;
