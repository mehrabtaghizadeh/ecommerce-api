import { Category } from "../models/Category.js";

export const newCategory = async (req, res) => { 
    const { name , images , properties  } = req.body;
    try {
      const newC = await Category.create({name , images ,properties})
      res.status(200).json(newC)
    } catch (error) {
      res.status(500).json({message:"something went wrong"})
    }
  };
  
  export const getCategoryes = async (req, res) => {
      try {
          const cats = await Category.find({})
          res.status(200).json(cats)
      } catch (error) {
          res.status(500).json({message:"something went wrong"})
      }
  };
  
  export const getCategory = async (req, res) => {
       const id = req.params.id
      try {
          const cat = await Category.findById(id).populate('products')
          res.status(200).json(cat)
      } catch (error) {
          res.status(500).json({message:"something went wrong"})
      }
  };
  export const getProductAsCategory = async (req,res) => {
     const category = RegExp(req.query.category, 'i')
    try {
        const cat = await Category.find({name:category}).populate('products')
        res.status(200).json(cat)
    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
  }
  export const editCategory = async (req, res) => {
      const id = req.params.id
      try {
          const editC = await Category.findByIdAndUpdate(id,{})
          res.status(200).json(editC)
      } catch (error) {
          res.status(500).json({message:"something went wrong"})
      }
  };
  export const categoryPage = async (req,res) => {
  const category = RegExp(req.query.category, "i");
    try {
        const cat = await Category.find({ name : category }).populate('products')
        res.status(200).json(cat)
    } catch (error) {
        res.status(500).json({message:"دسته بندی پیدا نشد"})
    }
  }

  export const deleteCategory = async (req, res) => {
      const id = req.params.id
      try {
         await Category.findByIdAndDelete(id)
          res.status(200).json("deleted")
      } catch (error) {
          res.status(500).json({message:"something went wrong"})
      }
  };
  