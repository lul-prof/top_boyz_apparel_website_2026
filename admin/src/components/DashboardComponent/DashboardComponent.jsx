import React, { useEffect, useState } from 'react'
import './DashboardComponent.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-hot-toast'

const DashboardComponent = () => {
    const navigate=useNavigate();
    const [products,setProducts]=useState([]);
    const [users,setUsers]=useState([]);
    const [orders,setOrders]=useState([])

    const backendUrl=import.meta.env.VITE_BACKEND_URL;

    const token=localStorage.getItem("admin-token");

    const deleteProduct=async(id)=>{
        try {
           const response=await axios.post(`${backendUrl}/api/admin/deleteProduct/${id}`,{},{headers:{token}});
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
        const fetchUsers=async()=>{
            try {
                const response=await axios.get(`${backendUrl}/api/admin/users`,{},{headers:{token}});
                console.log(response);
                if(response.data.success){
                    setUsers(response.data.users);
                }else{
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchUsers()
    },[backendUrl,users,token])


    useEffect(()=>{
        const fetchOrders=async()=>{
            try {
                const response=await axios.get(`${backendUrl}/api/admin/orders`,{},{headers:{token}});
                console.log("orders",response);
                if(response.data.success){
                    setOrders(response.data.orders);
                }else{
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchOrders()
    },[backendUrl,orders,token])

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
    const stats={
        totalRevenue:orders.reduce((sum,order)=>order.paymentStatus?sum+order.amount:sum,0)
  };
  return (
    <>
    <div className="dashboard">
        {/*------------------------*/}
        <h1>Welcome back, Admin</h1>
        <div className="dashboard-top">
            <div className="dashboard-top-left">
                <div className="dashboard-top-left-1">
                    <img src={assets.usersIcon} alt="" />
                </div>

                <div className="dashboard-top-left-2">
                    <p>Users</p>
                    <p>{users.length}</p>
                </div>  
            </div>
            <div className="dashboard-top-center">
                <div className="dashboard-top-center-1">
                    <img src={assets.ordersIcon} alt="" />
                </div>

                <div className="dashboard-top-center-2">
                    <p>Orders</p>
                    <p>{orders.length}</p>
                </div> 
            </div>
            <div className="dashboard-top-right">
                <div className="dashboard-top-right-1">
                    <img src={assets.revenueIcon} alt="" />
                </div>

                <div className="dashboard-top-right-2">
                    <p>Revenue</p>
                    <p>{"kes"} {stats.totalRevenue}</p>
                </div> 
            </div>

        </div>
        {/*------------------------*/}
        <div className="dashboard-center">
            <div className="dashboard-center-header">
                <h1>PRODUCTS</h1>
            </div>
            <div className="dashboard-center-center">
                <div className="dashboard-center-center-id">
                    <p>ID</p>
                </div>
                <div className="dashboard-center-center-image">
                    <p>Image</p>
                </div>
                <div className="dashboard-center-center-quantity">
                    <p>Quantity</p>
                </div>
                <div className="dashboard-center-center-date">
                    <p>Date</p>
                </div>
                <div className="dashboard-center-center-actions">
                    <p>Actions</p>
                </div>
            </div>

            <div className="dashboard-center-item">
                {
                    products.map((product,i)=>(
                       <>
                        <div key={product._id} className="product">
                            <div className="product-id">
                                <p>{i+1}</p>
                            </div>
                            <div className="product-image">
                                <img src={product.image[0]} alt="image"/>
                            </div>
                            <div className="product-quantity">
                                <p style={{color:product.quantity<100?"red":"green"}}>{product.quantity}</p>
                            </div>
                            <div className="product-date">
                                <p>
                                    {new Date(product.createdAt).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                            </div>
                            <div className="product-actions">
                                <img onClick={()=>(deleteProduct(product._id))} src={assets.deleteIcon} alt="image" />
                            </div>
                            
                        </div>
                        <hr />
                       </>
                    ))
                }
            </div>

        </div>
        {/*------------------------*/}
        <div className="dashboard-bottom">
           <div className="dashboard-bottom-header">
                <h1>QUICK ACTIONS</h1>
            </div> 
            <div className="dashboard-bottom-buttons">
                <div className="dashboard-bottom-button-1">
                    <button onClick={()=>(navigate('/add'))}>Add Product</button>
                </div>
                <div className="dashboard-bottom-button-2">
                    <button onClick={()=>(navigate('/users'))}>Manage Users</button>
                </div>
                <div className="dashboard-bottom-button-3">
                    <button onClick={()=>(navigate('/orders'))}>Manage Orders</button>
                </div>
            </div>        
        </div>
    </div>
    </>
  )
}

export default DashboardComponent