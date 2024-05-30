import mongoose from "mongoose";


let isConnected = false;

export default async function connectToDB(){
  mongoose.set('strictQuery',true);
  if(!process.env.DB_URL){
    return console.log("Mongodb URL is missing");
  }
  if(isConnected){
    return console.log("Mongodb Connected Successfully");
  }

  try{
    await mongoose.connect(process.env.DB_URL);
    isConnected = true;
    console.log("mongodb is connected");
  }catch(error){
    console.log("error with connect to db",error);
  }
}