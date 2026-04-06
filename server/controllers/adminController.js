import productModel from "../models/productModel.js";
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'
import orderModel from '../models/orderModel.js'
import {v2 as cloudinary} from 'cloudinary'

const generateToken=(email)=>{
    return jwt.sign({email},`${process.env.JWT_SECRET}`,{expiresIn:"6h"})
}

const adminLogin=async(req,res)=>{
    try {
        const {email,password}=req.body;

        const admin_email=process.env.ADMIN_EMAIL;
        const admin_password=process.env.ADMIN_PASSWORD; 

         if(email==admin_email){
            if(password==admin_password){
                const token=await generateToken(email);
                res.json({
                    success:true,
                    message:"login successful",
                    token
                })
            }
            res.json({
                success:false,
                message:"Invalid password"
            })
        }
        res.json({
            success:false,
            message:"Check email"
        })
    
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
}


const addProduct=async(req,res)=>{
    try {
        const {title,description,image,price,quantity,category,subCategory,bestseller}=req.body;

        if(!req.files){
            res.json({
                success:false,
                message:"No files uploaded"
            })
        }

        const image1=req.files.image1 && req.files.image1[0];
        const image2=req.files.image2 && req.files.image2[0];
       
        const images=[image1,image2].filter((item)=>item !==undefined);

        let imagesUrl=await Promise.all(
            images.map(async(item)=>{
                let result=await cloudinary.uploader.upload(
                    item.path,{
                        folder:"uploads/the_don/merchandise",
                        resource_type:"image"
                    }
                )
                return result.secure_url
            })
        )

        const new_product=await new productModel({
            title,
            description,
            image:imagesUrl,
            price,
            quantity, 
            category,
            subCategory,
            bestseller
        })
        const product=await new_product.save();
        if(!product){
            console.log("Could not save product");
            return res.json({
                success:false,
                message:"Could not save product"
            })   
        }
        console.log(product);
        
        res.json({
            success:true,
            message:"Product Added successfully",
            product
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
        
    }
}

const fetchProducts=async(req,res)=>{
  try {
    const products=await productModel.find({});
    if(!products){
      return res.json({
        success:false,
        message:"Could not fetch Products"
      })
    }

    res.json({
      success:true,
      message:"Products fetched successfully",
      products
    })
    
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
}

const deleteProduct=async (req,res) => {
    try {
        const {productId}=req.params;
        const product=await productModel.findByIdAndDelete(productId);
        if(!product){
            res.json({
                success:false,
                message:"Could not delete product"
            });
        }
        res.json({
            success:true,
            message:"Product deleted Successfully.",
            product
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
}

const deleteUser=async(req,res)=>{
    try {
        const {userId}=req.params;
        const user=await userModel.findByIdAndDelete(userId);
        if(!user){
            res.json({
                success:false,
                message:"Could not delete user"
            });
        }
        res.json({
            success:true,
            message:"User deleted Successfully.",
            user
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}

const fetchOrders=async(req,res)=>{
    try {
        const orders=await orderModel.find({});
        if(!orders){
            return res.json({
                success:false,
                message:"Could not fetch orders"
            })
        }        
        res.json({
            success:true,
            message:"Orders Fetched Successfully",
            orders
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}

const deleteOrder=async(req,res)=>{
    try {
        const {orderId}=req.params;
        const order=await orderModel.findByIdAndDelete(orderId);
        if(!order){
            return res.json({
                success:false,
                message:"Could not delete order"
            })
        }
        res.json({
            success:true,
            message:"Order deleted successfully",
            order
        })
    } catch (error) {
        console.log(error);
       res.json({
            success:false,
            message:error.message
        }) 
    }
}

const fetchUsers=async(req,res)=>{
    try {
        const users=await userModel.find({});
        if(!users){
            console.log("Could not fetch users");
            return res.json({
                success:false,
                message:"Could not fetch users"
            })  
        }
        res.json({
            success:true,
            message:"Users fetched successfully",
            users,
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        }) 
    }
}


export {
    addProduct,
    adminLogin,
    deleteUser,
    fetchUsers,
    fetchOrders,
    deleteProduct,
    deleteOrder,
    fetchProducts
}