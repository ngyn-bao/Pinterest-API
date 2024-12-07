import express from "express";
import { imageController } from "../controllers/image.controller.js";
import protect from "../common/middleware/protect.middleware.js";

const imageRouter = express.Router();

imageRouter.use(protect);
// Tạo route CRUD

imageRouter.get("/", imageController.findAll);

imageRouter.get("/search", imageController.findByName);

imageRouter.get("/item/:id", imageController.findDetailById);

imageRouter.get("/item/:id/comments", imageController.getComment);

imageRouter.get("/item/:id/saved", imageController.checkSave);

imageRouter.post("/item/:id/comment", imageController.createComment);
export default imageRouter;

imageRouter.delete("/delete/:id", imageController.deleteImage);

imageRouter.post("/add", imageController.createImage);
