import {v2 as cloudinary} from 'cloudinary';
const addSong = async (req,res) => {
     try {
        const name=req.body.name;
        const desc=req.body.desc;
        const album=req.body.album;
        const imageFile = req.files.image[0];
        const audioFile = req.files.audio[0];

        const audioUpload = await cloudinary.uploader.upload(audioFile.path,{
            resource_type:"audio"
        })
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{
            resource_type:"image"
        })

        console.log(name,desc,album,audioUpload,imageUpload);
        
        
     } catch (error) {
        res.status(400).json({
            message:error.message
        })
     }


}

const listSong = async (req,res) => {


    
}

export {
    addSong,
    listSong
}