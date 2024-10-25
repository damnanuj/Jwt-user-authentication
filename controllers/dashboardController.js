import User from "../models/userModel.js";

export const dashboardController = async (req, res) => {
  try {
    //>>====== fetch details of the logged-in user ========>>
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log("Error fetching user details:", error.message);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
