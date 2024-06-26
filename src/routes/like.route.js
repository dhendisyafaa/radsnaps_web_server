import { Router } from "express";
import {
  createLike,
  deleteLikeById,
  getLikeByImageId,
  getLikeByUser,
} from "../controllers/like.controller.js";
import { authenticate } from "../middlewares/authenticate.js";

const likeRouter = Router();

// likeRouter.get("/like", authenticate, getAllLikes);
likeRouter.get("/like/user", authenticate, getLikeByUser);
likeRouter.get("/like/:id", authenticate, getLikeByImageId);
likeRouter.post("/like", authenticate, createLike);
likeRouter.delete("/like/:id", authenticate, deleteLikeById);

export default likeRouter;
