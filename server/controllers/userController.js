import express from "express";
import userModel from "../models/userModel.js";
import productModel from "../models/productModel.js"
import subscriberModel from "../models/subscriberModel.js"
import orderModel from "../models/orderModel.js"
import bcrypt from "bcryptjs";
import {v2 as cloudinary} from 'cloudinary'
import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken';



const generateToken=(id)=>{
  return jwt.sign({id},`${process.env.JWT_SECRET}`,{expiresIn:"90d"})
}

const registerUser = async (req, res) => {
  try {
    const { full_names, username, email, phone, password } = req.body;

    const exists = await userModel.findOne({ email });
    if (exists) {
      res.json({
        success: false,
        message: "User Already exists. Login",
      });
    }

    if (!req.files) {
      return res.json({
        success: false,
        message: "Please Upload your picture",
      });
    }

    const image = req.files.avatar && req.files.avatar[0];

    const result = await cloudinary.uploader.upload(image.path, {
      folder: "uploads/top_boyz_apparel/avatars",
      resource_type: "image",
    });

    const imageUrl = result.secure_url;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const new_user = await new userModel({
      avatar: imageUrl,
      full_names,
      username,
      email,
      phone,
      password: hash,
    });

    const user = await new_user.save();

    console.log("New User",user);
    
    res.json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const loginUser=async(req,res)=>{
  try {
    const {email,password}=req.body;
    
    const exists=await userModel.findOne({email});
    console.log("Login Attempt",exists);
    
    if(!exists){
      return res.json({
        success:false,
        message:"Please check email and try again"
      })
    }
    const isMatch=await bcrypt.compare(password,exists.password);
    if(!isMatch){
      return res.json({
        success:false,
        message:"Please check password and try again"
      })
    }

    const token=await generateToken(exists._id);

    res.json({
      success:true,
      message:`Welcome ${exists.username}`,
      exists,
      token
    })
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
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

const fetchProduct=async(req,res)=>{
  try {
    const {productId}=req.params;
    console.log("Fetch Product",productId);
    
    const product=await productModel.findById({ _id: productId });

    if(!product){
      return res.json({
        success:false,
        message:"Could not find Product"
      })
    }
    res.json({
      success:true,
      message:"Product fetched successfully",
      product
    })
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
}

const subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    const exists = await subscriberModel.findOne({ email });
    if (exists) {
      res.json({
        success: false,
        message: "You are already a subscriber.",
      });
    }
    const new_subscriber = await subscriberModel({
      email,
    });
    const subscriber = await new_subscriber.save();
    console.log("New Subscriber",subscriber);
    

    res.json({
      success: true,
      message: "Thank you for subscribing.",
      subscriber,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const addToCart=async(req,res)=>{
  try {
    const {userId,productId,size}=req.body;

    const user=await userModel.findById({_id:userId});
    if(!user){
      return res.json({
        success:false,
        message:"User not found"
      })
    }
    let cartData=user.cart;
    const product=await productModel.findById({_id:productId});
    console.log("Add to cart",product);
    if(!product){
      return res.json({
        success:false,
        message:"Product does not exists"
      })
    }
    if(cartData[productId]){
      if(cartData[productId][size]){
        cartData[productId][size]+=1
      }else{
        cartData[productId][size]=1
      }
    }else{
      cartData[productId]={}
      cartData[productId][size]=1;
    }
    const updateCart= await userModel.findByIdAndUpdate(userId,{cart:cartData});
    if(!updateCart){
      console.log("Could not add product to cart")
      return res.json({
        success:false,
        message:"Could not add product to cart"
      })
    }

    res.json({
      success: true,
      message: "Product added to cart.",
      cartData,
      user,
    });
    
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
}

const updateCart = async (req, res) => {
  try {
    const { userId, productId,size, quantity } = req.body;
    const user = await userModel.findById({ _id: userId });
    if (!user) {
      res.json({
        success: false,
        message: "Login and try again",
      });
    }
    let cartData = await user.cart;

    cartData[productId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cart: cartData });
    console.log(cartData);
    
    res.json({
      success: true,
      message: "Cart Updated",
      cartData,
    });
  } catch (error) {

    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const getCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await userModel.findById({ _id:userId });
    if (!user) {
      res.json({
        success: false,
        message: "You have been logged out.",
      });
    }
    const cartData = await user.cart;

    console.log(cartData);

    res.json({
      success: true,
      message: "Cart fetched successfully",
      cartData,
    });

  } catch (error) {
    console.log(error);
    
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address, reference,paymentStatus,paymentMethod } = req.body;

    const user=await userModel.findById({_id:userId});

    const new_order = await new orderModel({
      userId,
      user,
      items,
      amount,
      address,
      reference,
      paymentStatus:false,
      paymentMethod:"cash on delivery"
    });

    const order = await new_order.save();

    
    await userModel.findByIdAndUpdate(userId,{cart:{}});
    
    console.log("Order",order);
    
    res.json({
      success: true,
      message: "Order placed",
      order,
    });

  } catch (error) {
    console.log(error);
    
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const myOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });

    if (!orders) {
      return res.json({ success: false, message: "Could not fetch orders." });
    }

    console.log(`Orders for ${userId}`,orders);
    

    res.json({
      success: true,
      message: "Orders Fetched Successfully.",
      orders,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const contact = async (req, res) => {
  try {
    const { email, phone, message } = req.body;

    console.log("Email from",email,phone);
    
    //Create a transporter object using Gmail's SMTP
    const transporter = nodemailer.createTransport({
      secure: true,
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
      },
    });

    //Set up email options (who sends what to whom)
    let mailOptions = {
      from: email,
      to: `${process.env.GMAIL_EMAIL}`,
      subject: `Email Received from ${phone}`,
      html:
        `<b>${message}</b>
        <div style="width:100%;background-color:grey;padding:10px">
          <h3>This is a test email for your website.</h3>
          <p>From ${email} </p>
        </div>
      `
    };

    console.log(mailOptions);
    
    //Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.json({
          success: false,
          message: error.message
        })
      } else {
        console.log('Email sent:', info.response);
        res.json({
          success: true,
          message: "Email sent",
          info
        });
      }
    });
  } catch (error) {
    console.log(error);
    
    res.json({
      success: false,
      message: error.message,
    });
  }
}

export {
  registerUser,
  loginUser,
  fetchProducts,
  fetchProduct,
  subscribe,
  addToCart,
  updateCart,
  getCart,
  placeOrder,
  myOrders,
  contact
}