import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {type:String,required:true},
  properties: [{type:Object}]
});

export const Category = mongoose.model('Category', CategorySchema);