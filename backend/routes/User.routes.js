
import express from "express"
import { getCurrentUser, updateAssistant } from "../controllers/User.controller.js"
import isAuth from "../middlewares/isAuth.js"
import upload from "../middlewares/multer.js"


const userRouter = express.Router()

userRouter.get("/current",isAuth,getCurrentUser)
userRouter.post("/update",isAuth,upload.single("file"),updateAssistant)

export default userRouter