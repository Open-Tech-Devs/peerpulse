import express from "express";
import { userController } from "../../controllers";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/current-user", auth("currentUser"), userController.getCurrentUser);
router.put("/update", auth("updateUser"), userController.updateUserById);
router.get(
  "/get-peers",
  auth("getPeersFromCollege"),
  userController.getPeersFromCollege
);

export default router;
