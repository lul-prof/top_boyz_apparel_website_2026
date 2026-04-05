import React from 'react'
import './AddPage.css'
import { assets } from '../../assets/assets'

const AddPage = () => {
  return (
    <>
    <div className="add-container">
        {/*-----------------------*/}
        <div className="add-form">
            <form>
                <h3 style={{color:"#FFFFFF",marginBottom:"10px"}}>Upload Image</h3>
                <div className="add-form-upload">
                    <label htmlFor="image1">
                        <img src={assets.uploadArea} alt="image" />
                        <input type="file" id='image1' hidden/>
                    </label>

                    <label htmlFor="image2">
                        <img src={assets.uploadArea} alt="image" />
                        <input type="file" id='image2' hidden/>
                    </label>
                </div>

                <div className="add-form-class">
                    <label htmlFor="title">Product Name</label>
                    <br />
                    <input type="text" placeholder='e.g. T-shirt' />
                </div>

                <div className="add-form-class">
                    <label htmlFor="description">Product Description</label>
                    <br />
                    <input type="text" placeholder='e.g. Long sleeve,white,cotton,unisex' />
                </div>

                    <div className="add-form-class-select">
                        <div className="add-form-class-select-1">
                            <label htmlFor="category">Product Category</label>
                            <br />
                            <select>
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="unisex">Unisex</option>
                                <option value="kids">Kids</option>
                            </select>
                        </div>

                        <div className="add-form-class-select-2">
                            <label htmlFor="category">Product Sub Category</label>
                            <br />
                            <select>
                                <option value="topwear">Topwear</option>
                                <option value="bottomwear">Bottomwear</option>
                                <option value="footwear">Footwear</option>
                            </select>
                        </div>
                    </div>

                <div className="add-form-class">
                    <label htmlFor="price">Price</label>
                    <br />
                    <input type="text" placeholder='ksh 1500' />
                </div>
                <div className="add-form-class">
                    <label htmlFor="quantity">Quantity</label>
                    <br />
                    <input type="text" placeholder='100' />
                </div>

                <div className="add-form-checkbox">
                    <label htmlFor="bestseller">Bestseller</label>
                    <input type="checkbox"/>
                </div>

                <div className="add-form-class">
                    <button>ADD</button>
                </div>
            </form>
        </div>
         
    </div>
    </>
  )
}

export default AddPage