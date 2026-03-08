const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    productId: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    totalPrice: {
      type: Number,
    },

    status: {
      type: String,
      default: "CREATED",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);