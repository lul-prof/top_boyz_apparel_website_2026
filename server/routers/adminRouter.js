import express from 'express'
import { addProduct, adminLogin, deleteOrder, deleteProduct, deleteUser, fetchOrders, fetchProducts, fetchUsers } from '../controllers/adminController.js';
import upload from '../middleware/multer.js';

const adminRouter=express.Router()

adminRouter.post('/add',upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:2}]),addProduct);
adminRouter.get('/products',fetchProducts);
adminRouter.post('/login',adminLogin)
adminRouter.post('/deleteUser/:userId',deleteUser);
adminRouter.get('/orders',fetchOrders);
adminRouter.get('/users',fetchUsers);
adminRouter.post('/deleteProduct/:productId',deleteProduct);
adminRouter.post('/deleteOrder/:orderId',deleteOrder);

export default adminRouter;