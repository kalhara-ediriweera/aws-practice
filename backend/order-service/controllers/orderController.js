const Order = require("../models/orderModel");

const { getProduct } = require("../services/productService");
const { getUser } = require("../services/userService");
const { sendNotification } = require("../services/notificationService");

exports.createOrder = async (req, res) => {
  try {

    const { userId, productId, quantity } = req.body;

    let productPrice = 100; // fallback price

    try {

      const user = await getUser(userId);

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

    } catch (err) {
      console.log("User service unavailable, skipping validation");
    }

    try {

      const product = await getProduct(productId);

      if (product && product.price) {
        productPrice = product.price;
      }

    } catch (err) {
      console.log("Product service unavailable, using default price");
    }

    const totalPrice = productPrice * quantity;

    const order = new Order({
      userId,
      productId,
      quantity,
      totalPrice,
    });

    await order.save();

    try {

      await sendNotification({
        userId,
        message: "Order placed successfully",
      });

    } catch (err) {
      console.log("Notification service unavailable");
    }

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


exports.getOrders = async (req, res) => {

  try {

    const orders = await Order.find();

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};