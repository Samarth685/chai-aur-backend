import mongoose,{ Schema } from "mongoose";

const playlistSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    videos:[{
        type:Schema.Types.ObjectId,
        ref:"Video",
    }],
    owner:{
        type:Schema.Types.ObjectId,//user to which the playlist belongs
        ref:"User",
    },
},{timestamps:true});


export const Playlist = mongoose.model("Playlist", playlistSchema);