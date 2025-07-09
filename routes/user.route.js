import Router from "express";
import { authUser } from "../middlewares/authUser.middleware.js";
import {
  getUserInfo,
  registerUserController,
  editUserController,
  getToken,
} from "../controllers/user.controller.js";
import { validateUserRegister } from "../middlewares/user.middleware.js";
import ApiError from "../utils/ApiError.js";

const router = Router();

router.route("/getUserData").post(authUser, getUserInfo);
router
  .route("/registerUser")
  .post(validateUserRegister, registerUserController);
router.route("/editUser").post(authUser, editUserController);
router.route("/getToken").get(function (req, res, next) {
  console.log('1111');
  
  if (!req.body) {
    throw new ApiError(401, {}, "Empty request");
  }

  const { userId } = req.body;
  if (!userId) {
    throw new ApiError(401, {}, "User id is required to get access token");
  }

  next();
}, getToken);

export default router;
