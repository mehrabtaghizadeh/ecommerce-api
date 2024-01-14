import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  lineItems:Array,
  city:String,
  fullName:String,
  amount:Number,
  phoneNumber:Number,
  postalCode:String,
  email:String,
  streetAddress:String,
  userId:[{type:mongoose.Schema.Types.ObjectId , ref: 'User'}],
  paid:{type:Boolean,default:false}, 
}, {
  timestamps: true,
});

export const Order = mongoose.model('Order', OrderSchema);