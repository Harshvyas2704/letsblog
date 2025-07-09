import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";

async function isUserExist({ email }) {
  try {
    return await User.findOne({
      email,
    });
  } catch (error) {
    throw new ApiError(
      500,
      { error },
      "Something went wrong while checking user exist"
    );
  }
}

async function registerUserService({ fullName, email, bio, password }) {
  try {
    return await User.create({
      fullName,
      email,
      bio,
      password,
    });
  } catch (error) {
    throw new ApiError(
      500,
      { error },
      "Something went wrong while registing user"
    );
  }
}

async function getUserData(_id) {
  try {
    return await User.findById(_id).select("-password -refreshToken");
  } catch (error) {
    throw new ApiError(
      500,
      { error },
      "Something went wrong while getting user"
    );
  }
}

export { registerUserService, isUserExist, getUserData };
