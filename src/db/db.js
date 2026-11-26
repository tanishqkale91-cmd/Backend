import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

      console.log(`\n MongoDB connected DB Host : ${connectionInstance.connection.host}`) // which host we are connected on 
    } catch (error) {
        console.log("Mongo Connection Errror",error)
        process.exit(1)
    }
}

export default connectDB