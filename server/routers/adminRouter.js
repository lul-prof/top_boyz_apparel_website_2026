import express from 'express'
import { addProduct, adminLogin, deleteOrder, deleteProduct, deleteUser, fetchOrders, fetchProducts, fetchUsers, updateStatus, verifyPayment } from '../controllers/adminController.js';
import upload from '../middleware/multer.js';
import {adminAuth} from '../middleware/adminAuth.js'

const adminRouter=express.Router()

adminRouter.post('/add',upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:2}]),adminAuth,addProduct);
adminRouter.get('/products',fetchProducts);
adminRouter.post('/login',adminLogin)
adminRouter.post('/deleteUser/:userId',adminAuth,deleteUser);
adminRouter.get('/orders',fetchOrders);
adminRouter.get('/users',fetchUsers);
adminRouter.post('/deleteProduct/:productId',adminAuth,deleteProduct);
adminRouter.post('/deleteOrder/:orderId',adminAuth,deleteOrder);
adminRouter.post('/paid/:orderId',adminAuth,verifyPayment);
adminRouter.post('/updateStatus/:orderId',adminAuth,updateStatus);

export default adminRouter;