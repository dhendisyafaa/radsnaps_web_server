import { Router } from "express";
import {
  createComment,
  deleteCommentById,
  getAllComments,
  getCommentById,
  getCommentByImageId,
  updateComment,
} from "../controllers/comment.controller.js";
import { authenticate } from "../middlewares/authenticate.js";

const commentRouter = Router();

commentRouter.get("/comment", getAllComments);
commentRouter.get("/comment/image/:id", getCommentByImageId);
commentRouter.get("/comment/:id", getCommentById);
commentRouter.post("/comment", authenticate, createComment);
commentRouter.patch("/comment/:id", authenticate, updateComment);
commentRouter.delete("/comment/:id", authenticate, deleteCommentById);

export default commentRouter;
