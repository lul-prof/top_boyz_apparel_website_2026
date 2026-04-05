import React from 'react'
import './DashboardComponent.css'
import { assets, products } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const DashboardComponent = () => {
    const navigate=useNavigate();
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
                    <p>1000</p>
                </div>  
            </div>
            <div className="dashboard-top-center">
                <div className="dashboard-top-center-1">
                    <img src={assets.ordersIcon} alt="" />
                </div>

                <div className="dashboard-top-center-2">
                    <p>Orders</p>
                    <p>40</p>
                </div> 
            </div>
            <div className="dashboard-top-right">
                <div className="dashboard-top-right-1">
                    <img src={assets.revenueIcon} alt="" />
                </div>

                <div className="dashboard-top-right-2">
                    <p>Revenue</p>
                    <p>100,000</p>
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
                    products.map((product)=>(
                       <>
                        <div key={product._id} className="product">
                            <div className="product-id">
                                <p>{product._id}</p>
                            </div>
                            <div className="product-image">
                                <img src={product.image[0]} alt="image"/>
                            </div>
                            <div className="product-quantity">
                                <p>{product.quantity}</p>
                            </div>
                            <div className="product-date">
                                <p>{product.date}</p>
                            </div>
                            <div className="product-actions">
                                <img src={assets.deleteIcon} alt="image" />
                                <img src={assets.editIcon} alt="image2" />
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