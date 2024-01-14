import { Order } from "../models/Order.js";

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