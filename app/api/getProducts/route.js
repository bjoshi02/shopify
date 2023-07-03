import { NextResponse } from 'next/server';
import Product from "../../../models/Product";
import dbConnect from "../../../middlewares/connectDb";

var CryptoJS = require("crypto-js");

export async function POST(request){
    'use server'
    try{
        const { category } = await request.json();
        await dbConnect();
        let products = await Product.find({ category: category });
        return NextResponse.json({ products },{status: 200 });
    } 
    catch(err) {
        console.log('error', err);
    }
}
