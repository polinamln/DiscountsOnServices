import express from "express";
import {
  getCurrentUser,
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/usersControllers";
import { authMiddleware } from "../middlewares/authMiddleware";

const userRouter = express.Router();

userRouter.post("/register", userRegister);

userRouter.post("/login", userLogin);

userRouter.post("/logout", authMiddleware, userLogout);

userRouter.get("/current", authMiddleware, getCurrentUser);

export default userRouter;
