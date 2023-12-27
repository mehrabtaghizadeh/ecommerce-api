import { Order } from "../models/Order.js";
import { User } from "../models/User.js";
import  mongoose  from "mongoose";
export const newOrder = async (req, res) => {
  const {
    name,phoneNumber,line_items,city,postalCode,streetAddres,paid,userId} = req.body;
  try {
    const order = await Order.create({name,phoneNumber,line_items,city,postalCode,streetAddres,userId,paid});

    const session = await mongoose.startSession();
    await order.save({ session });
    const user = await User.findById(req.body.userId);
    user.orders.push(order);
    await user.save({ session });
    await session.commitTransaction();

    res.status(200).json(order);

  } catch (error) {
    res.status(500).json(error);
  }
};
export const orders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const order = async (req, res) => {
      const id = req.params.id;
      try {
        const order = await Order.findById(id);
        res.status(200).json(order);
      } catch (error) {
        res.status(500).json(error);
      }
    };