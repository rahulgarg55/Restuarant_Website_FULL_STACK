import mongoose from "mongoose";

export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"RESTAURANT"
    }).then(()=>{   
 console.log("COnnected to database Successfully");

    }).catch((err)=>{
        console.log(`kuch error haiii`, err);
    })
};
