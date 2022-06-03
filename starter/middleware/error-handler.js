const { CustomAPIError } = require('../errors/custom-error');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ err: err.message });
  }
  return res
    .status(500)
    .json({ msg: `Something went wrong, Please try again (:` });
};

module.exports = errorHandlerMiddleware;
