import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {type:String},
  description: String,
  price: {type: Number},
  images: [{type:Array,default:[]}],
  category: {type:mongoose.Types.ObjectId, ref:'Category'},
  properties: {type:Object, default:{}},
  quantity:{type:Number}, 
  comments:[{
    type:mongoose.Types.ObjectId,
    ref:'Comment',
    default:[]
  }]
}, {
  timestamps: true,
});

export const Product = mongoose.model('Product', ProductSchema);