import ApiError from "../utils/ApiError.js";

async function validateUserRegister(req, res, next) {
  try {
    // check if data is empty
    if (!req.body) {
      return res.status(401).json(new ApiError(500, {}, "Data is missing"));
    }
    const { fullName, email, password } = req.body;

    // data validation
    if (!fullName?.trim()) {
      return res
        .status(401)
        .json(new ApiError(500, {}, "Full name is missing"));
    }
    if (!email?.trim()) {
      return res.status(401).json(new ApiError(500, {}, "Email is missing"));
    }
    if (!password?.trim()) {
      return res.status(401).json(new ApiError(500, {}, "Password is missing"));
    }

    // going next if data is valid
    next();
  } catch (error) {
    return res
      .status(500)
      .json(
        new ApiError(500, {}, "Something went wrong while registering user")
      );
  }
}

export {
    validateUserRegister
}