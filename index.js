import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from "/Users/rupalisalgare/Desktop/ReactApp/Booking-app/api/routes/auth.js"
import hotelsRoute from "/Users/rupalisalgare/Desktop/ReactApp/Booking-app/api/routes/hotels.js"
import roomsRoute from "/Users/rupalisalgare/Desktop/ReactApp/Booking-app/api/routes/rooms.js"
import usersRoute from "/Users/rupalisalgare/Desktop/ReactApp/Booking-app/api/routes/users.js"

const app = express();
dotenv.config()



const connect= async()=>{
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Connected to MongoDB!");
    } catch (error) {
        throw error
    }
}
mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB disconnected!");
    
})
mongoose.connection.on("connected",()=>{
    console.log("MongoDB connected!");
})

app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)




app.listen(8800, () => {
    connect()
    console.log("Connected to backend!");
})