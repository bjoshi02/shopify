import { NextResponse } from 'next/server';
import Product from "../../../models/Product";
import dbConnect from "../../../middlewares/connectDb";

var CryptoJS = require("crypto-js");

export async function POST(request){
    'use server'
    try{
        const { id } = await request.json();
        await dbConnect();
        let product = await Product.findOne({ _id : id });
        return NextResponse.json({ product },{status: 200 });
    } 
    catch(err) {
        console.log('error', err);
    }
}

