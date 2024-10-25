import express from "express";

import { protectRoute } from "../lib/middleware/protectRoute.js";
import { dashboardController } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/dashboard", protectRoute, dashboardController);
export default router;
