import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to mongoDB");

    } catch(error){
        console.log("Error connecting to mongoDB", error.message);

    }
};
export default connectToMongoDB;