import mongoose, { mongo } from "mongoose";

const guestsSchema = new mongoose.Schema({
  full_name:{
    type:String,
    required:[true,"please enter booking name"]
  },
  email:{
    type:String,
    required:[true,"please enter booking email"]
  },
  nationalyID:{
    type:String,
    required:[true,"please enter booking nationalyID"]
  },
  nationality:{
    type:String,
    required:[true,"please enter booking nationality"]
  },
  countryFlag:{
    type:String,
    required:[true,"please enter booking countryFlag"]
  }
},{timestamps:true})

const Guests = mongoose?.models?.Guests || mongoose?.model("Guests",guestsSchema);

export default Guests;