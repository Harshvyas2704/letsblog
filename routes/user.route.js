import Router from "express";
import { authUser } from "../middlewares/authUser.middleware.js";
import {
  getUserInfo,
  registerUserController,
  editUserController
} from "../controllers/user.controller.js";
import { validateUserRegister } from "../middlewares/user.middleware.js";

const router = Router();

router.route("/getUserData").post(authUser, getUserInfo);
router
  .route("/registerUser")
  .post(validateUserRegister, registerUserController);
router.route("/editUser").post(authUser, editUserController)

export default router;
