import {
  getUserData,
  isUserExist,
  registerUserService,
} from "../services/user.service.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

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
    
  } catch (error) {
    
  }
}
export { registerUserController, getUserInfo, editUserController };
