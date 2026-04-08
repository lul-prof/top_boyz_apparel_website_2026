import React, { useState } from 'react'
import './AddPage.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AddPage = () => {
    const [loading,setLoading]=useState(false)
    const [image1,setImage1]=useState(false);
    const [image2,setImage2]=useState(false);
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [price,setPrice]=useState("")
    const [category,setCategory]=useState("")
    const [subCategory,setSubCategory]=useState("")
    const [quantity,setQuantity]=useState("")
    const [bestseller,setBestseller]=useState(false)
    const backendUrl=import.meta.env.VITE_BACKEND_URL;
    const formData=new FormData()
    image1 && formData.append("image1",image1)
    image2 && formData.append("image2",image2)
    formData.append("title",title)
    formData.append("description",description)
    formData.append("price",price)
    formData.append("category",category)
    formData.append("subCategory",subCategory)
    formData.append("quantity",quantity)
    formData.append("bestseller",bestseller)
    const token=localStorage.getItem("admin-token");
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            setLoading(true)
           const response=await axios.post(`${backendUrl}/api/admin/add`,formData,{headers:{token}});
           console.log(response);
           if(response.data.success){
            setLoading(false)
            toast.success(response.data.message);
            navigate('/add')
           }else{
            toast.error(response.data.message)
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
            <h2>Adding Product...</h2>
            </div>
        </div>
        )
  }
  return (
    <>
    <div className="add-container">
        <Toaster/>
        {/*-----------------------*/}
        <div className="add-form">
            <form onSubmit={handleSubmit}>
                <h3 style={{color:"#FFFFFF",marginBottom:"10px"}}>Upload Image</h3>
                <div className="add-form-upload">
                    <label htmlFor="image1">
                        <img src={image1?URL.createObjectURL(image1):assets.uploadArea} alt="image" />
                        <input type="file" id='image1' onChange={(e)=>(setImage1(e.target.files[0]))} hidden/>
                    </label>

                    <label htmlFor="image2">
                        <img src={image2?URL.createObjectURL(image2):assets.uploadArea} alt="image" />
                        <input type="file" id='image2' onChange={(e)=>(setImage2(e.target.files[0]))} hidden/>
                    </label>
                </div>

                <div className="add-form-class">
                    <label htmlFor="title">Product Name</label>
                    <br />
                    <input type="text" placeholder='e.g. T-shirt' value={title} onChange={(e)=>(setTitle(e.target.value))} required/>
                </div>

                <div className="add-form-class">
                    <label htmlFor="description">Product Description</label>
                    <br />
                    <input type="text" placeholder='e.g. Long sleeve,white,cotton,unisex' value={description} onChange={(e)=>(setDescription(e.target.value))} required/>
                </div>

                    <div className="add-form-class-select">
                        <div className="add-form-class-select-1">
                            <label htmlFor="category">Product Category</label>
                            <br />
                            <select defaultValue={category} value={category} onChange={(e)=>(setCategory(e.target.value))} required>
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="unisex">Unisex</option>
                                <option value="kids">Kids</option>
                            </select>
                        </div>

                        <div className="add-form-class-select-2">
                            <label htmlFor="category">Product Sub Category</label>
                            <br />
                            <select defaultValue={subCategory} value={subCategory} onChange={(e)=>(setSubCategory(e.target.value))} required>
                                <option value="topwear">Topwear</option>
                                <option value="bottomwear">Bottomwear</option>
                                <option value="footwear">Footwear</option>
                            </select>
                        </div>
                    </div>

                <div className="add-form-class">
                    <label htmlFor="price">Price</label>
                    <br />
                    <input type="text" placeholder='1500' value={price} onChange={(e)=>(setPrice(e.target.value))} required />
                </div>
                <div className="add-form-class">
                    <label htmlFor="quantity">Quantity</label>
                    <br />
                    <input type="text" placeholder='100' value={quantity} onChange={(e)=>(setQuantity(e.target.value))} required/>
                </div>

                <div className="add-form-checkbox">
                    <label htmlFor="bestseller">Bestseller</label>
                    <input type="checkbox" value={bestseller} onChange={()=>(setBestseller(!bestseller))}/>
                    
                </div>

                <div className="add-form-class">
                    <button type='submit'>ADD</button>
                </div>
            </form>
        </div>
         
    </div>
    </>
  )
}

export default AddPage