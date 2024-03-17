import mongoose from "mongoose";
import validator from "validator";

const reservationSchema= new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
        minLength:[3,"First name should be greater than 3 characters"],
        maxLength:[3,"First name should be less than 30 characters"]
    },
    lastName: {
      type:String,
      required:true,
      minLength:[3,"Last name must contain atleast 3 characters"],
      maxLength:[30,"Last name must contain atmost 30 characters"]
    },
    email: {
        type:String,
        required:true,
       validate:[validator.isEmail,"Please enter a valid email address"]
      },
      phone:{
        type:String,
        minLength:[11,"Phone number must contain 10 digits"],
        maxLength:[11,"Phone number must contain 10 digits"]
      },
      time:{
        type:String,
        required:true,
      },
      date:{
        type:String,
        required:true,
      },
    });

    export const Reservation=mongoose.model("Reservation",reservationSchema);