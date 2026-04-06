import mongoose from 'mongoose'


const userSchema=new mongoose.Schema({
    avatar:{type:String,required:true},
    full_names:{type:String,required:true},
    username:{type:String,required:true,unique:true,validate:{
        validator:(value)=>{
            return value.length<=15;
        },
        message:"Length should be less than 15 characters"
    }},
    phone:{type:String,required:[true,'phone is required'],unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cart:{type:Object,default:{}}
},{minimize:false,timestamps:true})

const userModel=mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;