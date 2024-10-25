import User from "../models/userModel.js";

export const dashboardController = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users); 
  } catch (error) {
    console.log("Error fetching users:", error.message);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
