import { NextResponse } from 'next/server';
// var CryptoJS = require("crypto-js");

// import User from "../../../models/User";
// import connectDb from "../../../middlewares/connectDb";

export async function GET(req, res) {
    return new NextResponse('Hello !!', {
        status: 201,
    });
}