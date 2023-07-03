const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true},
    images: { type: [ {
        src: String,
        alt: String
    } ]},
    colors: { type: [ {
        name: String,
        class: String,
        selectedClass: String
    }] },
    sizes: { type: [{
        name: String,
        inStock: Number
    }] }, 
    description: { type: String, required: true},
    highlights: { type: [ String ] },
    details: { type: String },
  },
  { timestamps: true }
);
export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
