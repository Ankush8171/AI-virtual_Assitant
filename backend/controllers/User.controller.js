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