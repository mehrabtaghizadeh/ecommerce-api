import  mongoose  from "mongoose";
import { Comment } from "../models/Comment.js";
import { User } from "../models/User.js";
import { Product } from "../models/Product.js";

export const newComments = async (req, res) => {
  const { userId ,  productId, body, rating } = req.body;
  try {
    const newComments = await Comment.create({ userId , body, rating , productId});
    const session = await mongoose.startSession();
    await newComments.save({ session });
    
    const user = await User.findById(req.body.userId);
    user.comments.push(newComments);
    await user.save({ session });

    const product = await Product.findById(req.body.productId);
    product.comments.push(newComments);
    await product.save({ session });
    
    await session.commitTransaction();
    
    res.status(200).json(newComments);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteComment = async (req, res) => {
      const id = req.params.id;
      try {
        let deleteComment = await Comment.findByIdAndRemove(id).populate('name').populate('productId');

         await deleteComment.name.comments.pull(deleteComment)
         await deleteComment.name.save()

         await deleteComment.productId.comments.pull(deleteComment)
         await deleteComment.productId.save()
        res.status(200).json({ message: "delete is successfuly"});
      } catch (error) {
        res.status(500).json({ message: "error in delete " });
      }
    };

// comment for showing in admin dashboard    
export const CFAdminPanel = async (req,res) => {
      try { 
            // comment for admin panel
            const cfap = await Comment.find({}).populate('name').populate('productId').sort({createAt: -1})
            res.status(200).json(cfap)
      } catch (error) {
            res.status(500).json({error})
      }
} 