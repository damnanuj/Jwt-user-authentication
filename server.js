import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";
import dashboardRoutes from "./routes/dashboardRoute.js"

import { connectMongoDb } from "./db/connectMongoDb.js";
import cookieParser from "cookie-parser";


dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json()); //json body parser
app.use(cookieParser()); //cookie parser
app.use(express.urlencoded({extended:true})) //to parse data url encoded (form)

app.use("/api/auth", authRoutes);
app.use("/api/user",dashboardRoutes);

app.listen(PORT, () => {
  console.log(`Server is Running on PORT : ${PORT}`);
  connectMongoDb();
});
