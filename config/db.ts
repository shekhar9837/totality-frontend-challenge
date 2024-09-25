
import mongoose from 'mongoose';

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL as string)
        console.log("db connected successfully!");
    }catch(error){
        console.error("Error connecting to db", error);
        
    }
}

export default connectDB