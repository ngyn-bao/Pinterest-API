import express from "express";
import imageRouter from "./imageRouter.js";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";

const rootRouter = express.Router();

rootRouter.use("/image", imageRouter);

rootRouter.use("/auth", authRouter);

rootRouter.use("/user", userRouter);

export default rootRouter;
