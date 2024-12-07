import express from "express";
import { userController } from "../controllers/user.controller.js";
import protect from "../common/middleware/protect.middleware.js";

const userRouter = express.Router();

userRouter.use(protect);

// Tạo route CRUD
userRouter.get("/", userController.findOne);

userRouter.get("/saved", userController.findSaved);

userRouter.get("/created", userController.findCreated);

userRouter.put("/config", userController.put);

export default userRouter;
