import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";

async function authUser(req, res, next) {
  try {
    console.log(req.headers, "req.headers");

    const { accesstoken } = req.headers;
    console.log(accesstoken);

    if (!accesstoken) {
      return res
        .status(401)
        .json(new ApiError(401, {}, "Access token is missing"));
    }

    const decoded = jwt.verify(accesstoken, process.env.ACCESS_TOKEN_SECRET);

    if (!decoded?._id) {
      return res
        .status(401)
        .json(new ApiError(401, {}, "Invalid or expired token"));
    }
    req.user = {
      userId: decoded._id,
      email: decoded.email,
      fullName: decoded.fullName,
    };

    next();
  } catch (error) {
    console.log(error);

    return res
      .status(401)
      .json(new ApiError(401, {}, "Unauthorized: Invalid token"));
  }
}

export { authUser };
