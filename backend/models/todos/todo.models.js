import mongoose from "mongoose"


const todoSchema = new mongoose.Schema({
   content : {
    type : String , 
    required : true , 

   }, 
   complete : {
    type : Boolean , 
    default : false
   } ,
    createdBy : {
        type  : mongoose.Schema.Types.OjectId , 
        ref : "User"
    },//is wale me user ke schema ka refrence le rahe hai
    subTodos : [
          {
            type : mongoose.Schema.Types.ObjectId , 
            ref : "SubTodo"
          }
    ]//array of subtodos 
    // in subtodos me hum subtodo wale files ka refrence bna rahe hai

} , {timestamps : true})


export const Todo = mongoose.model('Todo' , todoSchema);