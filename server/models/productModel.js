import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    title:{type:String, required:[true,'Title is required']},
    description:{type:String,required:true,validator:{
        validate:(value)=>{
            return value.length<=150;
        },
        message:"Description should be less than 150 characters"
    }},
    image:{type:Array,default:[],required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true},
    category:{type:String,required:true},
    subCategory:{type:String,required:true},
    bestseller:{type:Boolean,default:false,required:true}
},{minimize:false,timestamps:true});


const productModel=mongoose.models.product || mongoose.model("product",productSchema);

export default productModel;