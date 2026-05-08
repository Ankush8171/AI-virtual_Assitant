
import user from "../models/User.model.js"

export const getCurrentUser = async(req,user)=>{
    try{

        const userId = req.userId
        const user = await user.findById(userId).select("-password")
        if(!user){
            return res.status(500).json({message:" user not found"})
        }

        return res.status(200).json(user)

    }catch(err){
        console.log(err);
        return res.status(400).json({message:"get current user error"})
    }
}