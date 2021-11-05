class RolMiddleware {
  exec = async (req, res, next) => {
    next();
  };
}

export const rolMiddleware = new RolMiddleware();
