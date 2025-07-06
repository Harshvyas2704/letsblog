import { User } from "../models/user.model.js";

async function isUserExist({ email }) {
  return await User.findOne({
    email,
  });
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
    return null;
  }
}

async function getUserData(_id) {
  try {
    return await User.findById(_id).select("-password -refreshToken");
  } catch (error) {
    return null;
  }
}

export { registerUserService, isUserExist, getUserData };
