import {v2 as cloudinary} from 'cloudinary';
import fs from  "fs";

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key:process.env.CLOUDINARY_API_KEY, 
  api_secret:process.env.CLOUDINARY_API_SECRET 
});

const uploadCloudinary = async(loaclPath) =>{
    try {
        if (!loaclPath) return null
        
        const result = await cloudinary.uploader.upload(loaclPath, {
            resource_type: "auto"
        });
        fs.unlinkSync(loaclPath) // delete local file after uploading to clodinary server
        return result;
    } catch (error) {
        fs.unlinkSync(loaclPath); // delete local file after fail in uploading to clodinary server
        return null;
    }
}

export {uploadCloudinary} 

