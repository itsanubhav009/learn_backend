import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
    productId  :{
        type : mongoose.Schema.Types.ObjectId,
        ref  : "Products"
    },
   quantity : {
    type : Number ,
    required  :true
   }
})


const orderSchema = new mongoose.Schema({
  orderPrice : 
  {
    type : Number , 
    required : true
  } , 
  customer : {

    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  } ,
  orderItems :{
    type :  [orderItemSchema]
  }
 , 
 address : {
    type : String , 
    required : true
 } ,
 status  :
{
    type  :String , 
    enum : ["Pending" , "Cancelled" , "Dilivered"],
    default  : "PENDING"
}

} , {timestamps: true})

export const Order =mongoose.model("" , orderSchema)