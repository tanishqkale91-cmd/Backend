//require('dotenv').config({path:'./env'}) // no Consistency
import { configDotenv } from "dotenv"
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
 import connectDB from "./db/db.js"





connectDB()
// First Approach
/*import express from "express"
const app =  express()
(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error) => {
        console.log("Error:",error)
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on ${process.env.PORT}`);
       })
    } catch (error) {
        console.error("ERROR",error)
    }
})() // Iffies*/