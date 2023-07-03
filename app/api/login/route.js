import { NextResponse } from 'next/server';
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

import User from "../../../models/User";
import dbConnect from "../../../middlewares/connectDb";

export async function POST(request){
    'use server'
    try{
        const { email, password } = await request.json();
        dbConnect();
        if (
            email === "" ||
            password === ""
        ) {
            return NextResponse.json({
                error: "Provide all details!",
            }, { status: 400 });
        } 
        else {
            let user = await User.findOne({
                email: email,
            });
            if (user) {
                if (
                    JSON.parse(
                        CryptoJS.AES.decrypt(
                        user.password,
                        process.env.SECRETPASSWORDKEY
                        ).toString(CryptoJS.enc.Utf8)
                    ) === password
                ) {
                    var token = jwt.sign(
                        {
                        success: "Login successful.",
                        name: user.name,
                        email: user.email,
                        },
                        `${process.env.JSONWEBTOKEN}`,
                        {
                            expiresIn: "1d",
                        }
                    );
                    return NextResponse.json({
                        token
                    },{status: 200 });
                } else
                    return NextResponse.json({
                        error: "Please login with correct credentials",
                    }, { status: 400 });
            } else {
                return NextResponse.json({
                    error: "Please login with correct credentials",
                }, { status: 400 });
            }
        }
    } catch(err) {
        console.log('error', err);
    }
} 