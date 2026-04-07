import mongoose from 'mongoose'

const orderSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    user:{type:Object,default:{},required:true},
    items:{type:Array,default:[],required:true},
    reference:{type:String,unique:true,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,default:{},required:true},
    paymentStatus:{type:Boolean,default:false,required:true},
    status:{type:String,default:"order placed",required:true},
    paymentMethod:{type:String,required:true}
},{minimize:false,timestamps:true});

const orderModel=mongoose.models.order || mongoose.model("order",orderSchema);

export default orderModel;