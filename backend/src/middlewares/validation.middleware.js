const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (error) {
    return next(
      new ApiError(
        400,
        "Validation failed.",
        error.details.map((detail) => detail.message),
      ),
    );
  }

  next();
};

export default validate;
