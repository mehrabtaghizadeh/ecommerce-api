import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {type:String,required:true},
  properties: [{type:Object}],
  products:[{type:mongoose.Types.ObjectId,ref:'Product',default:[]}],
  images: [{type:Array,default:[]}],
});

export const Category = mongoose.model('Category', CategorySchema);