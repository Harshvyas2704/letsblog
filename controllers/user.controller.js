import {
  getUserData,
  isUserExist,
  registerUserService,
} from "../services/user.service.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

async function registerUserController(req, res) {
  try {
    const user = await isUserExist(req.body);
    if (user) {
      return res
        .status(401)
        .json(
          new ApiResponse(
            401,
            {},
            `User with email, ${req.body.email} already exist`
          )
        );
    }
    const registeredUser = await registerUserService(req.body);

    if (!registeredUser) {
      return res
        .status(500)
        .json(
          new ApiError(500, {}, "Something went wrong while registering user")
        );
    }

    const accessToken = await registeredUser.generateAccessToken();

    const userData = await getUserData(registeredUser._id);
    const newUserData = {
      ...userData.toObject?.(),
      accessToken,
    };

    return res
      .status(201)
      .json(new ApiResponse(201, newUserData, "User registered successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(
        new ApiError(500, {}, "Something went wrong while registering user")
      );
  }
}

async function getUserInfo(req, res) {
  try {
    const userData = await getUserData(req.user.userId);

    return res.status(201).json(new ApiResponse(201, userData, "User info"));
  } catch (error) {
    return res
      .status(500)
      .json(
        new ApiError(500, {}, "Something went wrong while getting user data")
      );
  }
}

async function editUserController(req, res) {
  try {
  } catch (error) {}
}

async function getToken(req, res) {
  try {
    console.log('222');
    
    const userData = await getUserData(req.body.userId);
    console.log(userData, '---');
    
    const accessToken = await userData.generateAccessToken();

    if (!accessToken) {
      throw new ApiError(500, error, "Access token not generated");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, { accessToken }, "Access token"));
  } catch (error) {
    throw new ApiError(
      500,
      error,
      "Something went wrong while generating access token"
    );
  }
}
export { registerUserController, getUserInfo, editUserController, getToken };
