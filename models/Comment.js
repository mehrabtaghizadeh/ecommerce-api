import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  userId: {type:mongoose.Types.ObjectId,ref:'User',default:[]},
  body:String,
  rating:Number,
  productId:{type:mongoose.Types.ObjectId,ref:'Product',default:[]}
},{timestamps:true});

export const Comment = mongoose.model('Comment', CommentSchema);