import express from 'express'
import upload from '../middleware/multer.js'
import { addToCart, contact, fetchProduct, fetchProducts, getCart, loginUser, myOrders, placeOrder, registerUser, subscribe, updateCart } from '../controllers/userController.js';
import generateToken from '../middleware/mpesa.js'
import { callbackMpesa, handleSTKPush } from '../controllers/mpesaController.js';
import {authUser} from '../middleware/auth.js'

const userRouter=express.Router();


userRouter.post('/register',upload.fields([{name:'avatar',maxCount:1}]),registerUser)
userRouter.post('/login',loginUser);
userRouter.get('/products',fetchProducts);
userRouter.post('/product/:productId',fetchProduct);
userRouter.post('/subscribe',subscribe);
userRouter.post('/addToCart',authUser,addToCart)
userRouter.post('/updateCart',authUser,updateCart);
userRouter.post('/cart',authUser,getCart);
userRouter.post('/order',authUser,placeOrder);
userRouter.post('/orders',authUser,myOrders);
userRouter.post('/contact',authUser,contact);
userRouter.post('/lipa',generateToken,authUser,handleSTKPush)
userRouter.post('/callback-mpesa',callbackMpesa)

export default userRouter;