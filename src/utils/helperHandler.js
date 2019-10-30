/**
 * Try-catch asycn wrapper,
 * does not require function to be promise(async) to work
 */
asyncWrapper = fn => {
  return async (req, res, next) => {
    try {
      return await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

/**
 * Promise asycn wrapper,
 * require function to be promise(async) to work
 */
/*
function asyncWrapper(fn) {
  return (req, res, next) => {
    fn(req, res).catch(next);
  };
}
*/

module.exports = {
  asyncWrapper
};
