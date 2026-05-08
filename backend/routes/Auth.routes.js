
import express from "express"
import { signup,login,logout } from "../controllers/Auth.controller.js"


const AuthRouter = express.Router()
AuthRouter.post("/signup",signup);
AuthRouter.post("/login",login);
AuthRouter.get("/logout",logout);

export default AuthRouter