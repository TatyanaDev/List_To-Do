module.exports = async (req, res, next) => {
  try {
    const { limit, offset } = req.query;

    req.pagination = {
      limit: !limit || limit > 10 || limit <= 0 ? 10 : limit,
      offset: !offset || offset <= 0 ? 0 : offset,
    };

    next();
  } catch (err) {
    next(err);
  }
};
