import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  line_items:Object,
  city:String,
  name:String,
  phoneNumber:Number,
  postalCode:String,
  streetAddress:String,
  userId:{type:mongoose.Schema.Types.ObjectId , ref: 'User'},
  paid:Boolean, 
}, {
  timestamps: true,
});

export const Order = mongoose.model('Order', OrderSchema);