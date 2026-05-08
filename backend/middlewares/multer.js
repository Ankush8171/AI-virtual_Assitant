
import multer from "multer";

const stroage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public")
    },
    filename:(req,res,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage})
export default upload