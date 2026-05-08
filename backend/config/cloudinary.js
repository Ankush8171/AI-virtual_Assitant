

import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"

const uploadOnCloudinary = async (filepath)=>{

    cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET,
    secure_distribution: 'mydomain.com',
    upload_prefix: 'https://api-eu.cloudinary.com'
});

try {
      // Upload the image
      const uploadResult = await cloudinary.uploader
      .upload(filePath);
      fs.unlinkSync(filepath)
      return uploadResult.secure_url;
    } catch (error) {
         fs.unlinkSync(filepath)
          return resizeBy.status(500).json({
            message:"cloudinary error"
          })
    }
  
}

export default uploadOnCloudinary;