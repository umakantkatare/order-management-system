import ApiError from "../utils/ApiError.util.js";

const schedulerAuth = (req, res, next) => {
  const secretKey = req.headers["x-secret-key"];

if (!secretKey || secretKey !== process.env.SCHEDULER_SECRET) {
  return next(
    new ApiError(401, "Unauthorized access.")
  );
}

  next();
};

export default schedulerAuth;
