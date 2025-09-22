 import { connect } from "http2";
import mongoose from "mongoose";
import connectMongo from "../../../utils/connectMongo";
import PostModel from "../../../models/postModel";

export async function GET(request) {    
    try {
        await connectMongo();
  const postData =await PostModel.find({});
  return Response.json(postData);
    } catch (error) {
        return Response.json({message:error.message});
        
    }
 
}