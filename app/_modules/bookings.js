import mongoose, { mongo } from "mongoose";

const bookingSchema = new mongoose.Schema({
  startDate:{
    type:Date,
    required:[true,"please insert start date for booking"]
  },
  endDate:{
    type:Date,
    required:[true,"please insert end date for booking"]
  },
  numNights:{
    type:Number,
    required:[true,"please insert num nights"]
  },
  numGuests:{
    type:Number,
    required:[true,"please insert num guests"]
  },
  cabinPrice:{
    type:Number,
    required:[true,"please insert num guests"]
  },
  extraPrice:{
    type:Number,
    required:[true,"please insert num guests"]
  },
  totalPrice:{
    type:Number,
    required:[true,"please insert num guests"]
  },
  status:{
    type:String,
    required:[true,'status is required']
  },
  hasBreakfast:{
    type:Boolean,
    default:false
  },
  isPaid:{
    type:Boolean,
    default:false
  },
  observations:{
    type:String,
    required:[true,'observations are required']
  },
  cabinId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Cabins'
  },
  guestId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Guests'
  }
})

const Bookings = mongoose?.models?.Bookings || mongoose?.model("Bookings",bookingSchema);

export default Bookings;