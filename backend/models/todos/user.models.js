import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    username: { 
        type : String,
        required : true,
        unique: true,
        lowercase  :true
    }, 

    email : {
       type :  String,
       required : true,
       unique  :true,
       lowercase : true
    } ,
    
    password:{
      type : String ,
      required : true
    }
   
} , {timestamps : true}) // timestamps batata hai ki kab user ne
                          // file kom update kiya hai

export const User  =  mongoose.model("User") // kya model banau or kiske basis pe banau


// upar ke ten steps hamesa likhne hai sabse pahele 
// import phisr schema banao or phir model ko export kar do


//mongodb me prular me store kar deta hai


