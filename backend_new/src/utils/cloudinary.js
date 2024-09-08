import {v2 as cloudinary} from "cloudinary"

import { v2 as cloudinary } from 'cloudinary';



    // Configuration
    cloudinary.config({ 
        cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
        api_key: 'process.env.CLOUDINARY_API_KEY', 
        api_secret: 'process.env.CLOUDINARY_API_SECRET' // Click 'View API Keys' above to copy your API secret
    });
    
    
    const uploadOnCloudinary = async (localFilePath) => {
try {
    if(!localFilePath) return null
    const response = await cloudinary.uploader.upload(localFilePath , {
        resource_type  :"auto"
    })
    //console.log("file is uploaded on cloudinary" , response.url);
    fs.unlinkSync(localFilePath);
    return response;
    
} catch (error) {

    fs.uninkSync(localFilePath) //remove the temporary locally saved temporary file as th upload operation got failed

    return null;

}

    }