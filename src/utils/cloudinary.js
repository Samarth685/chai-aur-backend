import {v2 as cloudinary} from "cloudinary";//aws s3 integration
import fs from "fs";//file system
import dotenv from "dotenv";
dotenv.config();
cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localfilePath) => {
    try{
        if(!localfilePath) return null;
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localfilePath,{
            resource_type: "auto",
        })
        //file has been uploaded on cloudinary
        // console.log("File has been uploaded on cloudinary",response.url);
        fs.unlinkSync(localfilePath);//remove the locally saved temp file
        return response;
    }
    catch(err){
        console.error("Cloudinary upload failed:",err);
        fs.unlinkSync(localfilePath);//remove the locally saved temp file as the upload has failed
        return null;
    }
}

export {uploadOnCloudinary};