import ApiError from "../utils/ApiError.util.js";

const schedulerAuth = (req, res, next) => {
  const secretKey = req.headers["x-secret-key"];

  if (!secretKey) {
    return next(new ApiError(401, "Scheduler secret key is required."));
  }

  if (secretKey !== process.env.SCHEDULER_SECRET) {
    return next(new ApiError(401, "Invalid scheduler secret key."));
  }

  next();
};

export default schedulerAuth;
