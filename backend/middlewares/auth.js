const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  const { id } = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(id);
  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    const role = req.user.role;

    if (!roles.includes(role)) {
      return next(
        new ErrorHandler(
          `Role: ${role} is not allowed to access this resource`,
          403
        )
      );
    }

    next();
  };
};
