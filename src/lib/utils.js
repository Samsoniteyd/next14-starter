import mongoose from "mongoose"

const connection = {};

export const connectDb = async () => {

    try {
        if (connection.isConnected) {
            console.log("Already connected to db");
            return;
        }
        const db =  await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
      } catch (error) {
        console.log(error);
        throw new Error (error)
      }
}