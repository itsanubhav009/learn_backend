import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
descrpition : {
    required: true , 
    type : String
},
name : {
    required : true , 
    type :String
} , 
productImage : {
    type : String , 

} , 
price : {
type : Number , 
default : 0
},
stock: {
    default : 0 , 
    type : NUmber
} ,
category : {
    type : mongoose.Schema.Types.ObjectId , 
    ref : "Category ",
    required : true,
}
,
owner : {
    type  : mongoose.Schema.Types.ObjectId , 
    ref : "Category" , 
    required : true , 
},

} , {timestamps : true}) 

export const Product = mongoose.model("Product" , productSchema)