import mongoose, { mongo } from "mongoose";

const settingsSchema = new mongoose.Schema({
  minBookingLength:{
    type:Number,
    required:[true,"please insert min booking length"]
  },
  maxBookingLength:{
    type:Number,
    required:[true,"please insert max booking length"]
  },
  maxGuestsPerBooking:{
    type:Number,
    required:[true,"please insert max booking length"]
  },
  breakfastPrice:{
    type:Number,
    required:[true,"please insert max booking length"]
  }
})

const Settings = mongoose?.models?.Settings || mongoose?.model("Settings",settingsSchema);

export default Settings;