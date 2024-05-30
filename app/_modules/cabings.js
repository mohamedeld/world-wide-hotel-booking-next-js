import mongoose, { mongo } from "mongoose";

const cabinsSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"please enter cabin name"]
  },
  maxCapcity:{
    type:Number,
    required:[true,"please enter cabin maxCapcity"]
  },
  regularPrice:{
    type:Number,
    required:[true,"please enter cabin regularPrice"]
  },
  discount:{
    type:Number,
  },
  description:{
    type:String,
    required:[true,"please enter cabin description"]
  },
  image:String
},{timestamps:true})

const Cabins = mongoose?.models?.Cabins || mongoose?.model("Cabins",cabinsSchema);

export default Cabins;