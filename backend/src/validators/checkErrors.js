const { validationResult } = require("express-validator");

const checkErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array() });
  } else {
    next();
  }
};

module.exports = checkErrors;
