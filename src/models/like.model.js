import mongoose,{ Schema } from "mongoose";

const likeSchema = new Schema({
    video:{
        type:Schema.Types.ObjectId,//video to which the like is added
        ref:"Video",
    },
    comment:{
        type:Schema.Types.ObjectId,//comment to which the like is added
        ref:"Comment",
    },
    tweet:{
        type:Schema.Types.ObjectId,//tweet to which the like is added
        ref:"Tweet",
    },
    likedBy:{
        type:Schema.Types.ObjectId,//user who liked the video
        ref:"User",
    }
    
},{timestamps:true});


export const Like = mongoose.model("Like", likeSchema);