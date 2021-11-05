class ErrorHandlerMiddleware {
  exec = async (error, req, res, next) => {
    next();
  };
}

export const errorHandler = new ErrorHandlerMiddleware();
