import {v2 as cloudinary} from "cloudinary";//aws s3 integration
import fs from "fs";//file system

cloudinary.config({ 
        cloud_name: 'process.env.CLOUDINARY_NAME',
        api_key: 'process.env.CLOUDINARY_API_KEY',
        api_secret: 'process.env.CLOUDINARY_API_SECRET',
});

const uploadOnCloudinary = async (localfilePath) => {
    try{
        if(!localfilePath) return null;
        //upload the file on cloudinary
        cloudinary.v2.uploader.upload(localfilePath,{
            resource_type: "auto",
        })
        //file has been uploaded on cloudinary
        console.log("File has been uploaded on cloudinary",response.url);
        return response;
    }
    catch(err){
        fs.unlinkSync(localfilePath);//remove the locally saved temp file as the upload has failed
        return null;
    }
}