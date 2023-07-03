const mongoose = require("mongoose");

const CartSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    products: { type: [ mongoose.Schema.Types.ObjectId ], required: true }
  },
  { timestamps: true }
);
export default mongoose.models.Cart || mongoose.model("Cart", ProductSchema);
