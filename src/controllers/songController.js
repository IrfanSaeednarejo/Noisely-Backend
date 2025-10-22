import {v2 as cloudinary} from 'cloudinary';
const addSong = async (req,res) => {
     try {
        
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const imageFile = req.files.imageUpload[0];
        const audioFile = req.files.audioUpload[0];

        const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
            resource_type: "auto"
        });
        
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image"
        });

        console.log("Upload successful:", {
            name, 
            desc, 
            album, 
            audioUrl: audioUpload,
            imageUrl: imageUpload
        });
        
     } catch (error) {
        console.error("Error in addSong:", error);
        return res.status(400).json({
            success: false,
            message: error.message
        });
     }
}

const listSong = async (req,res) => {


    
}

export {
    addSong,
    listSong
}