import User from "../models/User.model.js";

export const getCurrentUser = async (req, res) => {
  try {

    const userId = req.userId;

    const currentUser = await User.findById(userId).select("-password");

    if (!currentUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json(currentUser);

  } catch (err) {

    console.log(err);

    return res.status(500).json({
      message: "Get current user error",
    });
  }
};


export const updateAssistant = async (req,res)=>{
   try{

    const {assistantName,imageUrl} = req.body;
    const assistantImage;

    if(req.file){
      assistantImage = await uploadOnCloudinary(req.file.path);
    }else{
      assistantImage = imageUrl
    }

    const user = await User.findByIdAndUpdate(req.userId,{
      assistantName,assistantImage
    },{new:true}).select("-password")

    return res.status(200).json(user);

   }catch (err) {

    console.log(err);

    return res.status(500).json({
      message: "update assistance error",
    });
  }
}