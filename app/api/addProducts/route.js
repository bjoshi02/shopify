import { NextResponse } from 'next/server';
import Product from "../../../models/Product";
import dbConnect from "../../../middlewares/connectDb";

var CryptoJS = require("crypto-js");

export async function POST(request){
    'use server'
    try{
        const req = await request.json();
        dbConnect();
        for (let i = 0; i < req.length; ++i) {
            let p = new Product({
                name: req[i].name,
                price: req[i].price,
                category: req[i].category,
                images: req[i].images,
                colors: req[i].colors,
                sizes: req[i].sizes,
                description: req[i].description,
                highlights: req[i].highlights,
                details: req[i].details
            });
            await p.save();
        }
        return NextResponse.json({
                success: "Added the products"
            },{status: 200 });
    } 
    catch(err) {
        console.log('error', err);
    }
}
// const handler = async (req, res) => {
//   if (req.method == "POST") {
//     for (let i = 0; i < req.body.length; ++i) {
//       let p = new Product({
//         title: req.body[i].title,
//         slug: req.body[i].slug,
//         description: req.body[i].description,
//         image: req.body[i].image,
//         category: req.body[i].category,
//         size: req.body[i].size,
//         color: req.body[i].color,
//         price: req.body[i].price,
//         availableQty: req.body[i].availableQty,
//       });
//       await p.save();
//     }
//     res.status(200).json({ success: "Added the products" });
//   } else {
//     res.status(400).json({ error: "Bad Request" });
//   }
// };

// export default connectDb(handler);
