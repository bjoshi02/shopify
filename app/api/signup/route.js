import { NextResponse } from 'next/server';
var CryptoJS = require("crypto-js");

import User from "../../../models/User";
import dbConnect from "../../../middlewares/connectDb";

export async function POST(request){
    'use server'
    try{
        const { name, email, password } = await request.json();
        dbConnect();
        if (
            name === "" ||
            email === "" ||
            password === ""
        ) {
            return NextResponse.json({
                error: "Provide all details!",
            }, { status: 400 });
        } else if (await User.findOne({ email: email })){
            return NextResponse.json({
                error: "User with this email already exists! Try login instead",
            }, { status: 400 });
        }
        else {
            let p = new User({
            name,
            email,
            password: CryptoJS.AES.encrypt(
                JSON.stringify(password),
                process.env.SECRETPASSWORDKEY
            ).toString(),
            });
            await p.save();
            return NextResponse.json({
                success: "User created",
            }, { status: 200 });
        }
    } catch(err) {
        console.log('error', err);
    }
} 
