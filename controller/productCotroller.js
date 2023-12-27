import { Product } from "../models/Product.js";

export const newProduct = async (req, res) => {
  const { title, description, price, category, properties , images , quantity } = req.body;
  try {
    const newP = await Product.create({title, description, price, images, category, quantity , properties})
    res.status(200).json(newP)
  } catch (error) {
    res.status(500).json({message:"something went wrong"})
  }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('comments').populate('category')
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
};

export const getProduct = async (req, res) => {
     const id = req.params.id
    try {
        const product = await Product.findById(id).populate('category')
       res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
};

export const editProduct = async (req, res) => {
    const id = req.params.id
    try {
        const editP = await Product.findByIdAndUpdate(id, {$set:req.body})
        res.status(200).json(editP)
    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
};

export const deleteProduct = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findByIdAndDelete(id)
        res.status(200).json({success: true})
    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
};
