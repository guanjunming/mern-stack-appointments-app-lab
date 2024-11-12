const { body, param } = require("express-validator");

const validateIdInBody = [body("id", "id is invalid").notEmpty().isMongoId()];

const validateIdInParam = [param("id", "id is invalid").isMongoId()];

const validateApptData = [
  body("title", "Title is required").notEmpty(),
  body("title", "Title can only have maximum 50 characters").isLength({
    min: 1,
    max: 50,
  }),
  body("type", "Type is required").notEmpty(),
  body("type", "Type can only have maximum 50 characters").isLength({
    min: 1,
    max: 50,
  }),
  body("purpose", "Purpose is required").notEmpty(),
  body("date", "Date is required").notEmpty(),
];

module.exports = {
  validateIdInBody,
  validateIdInParam,
  validateApptData,
};
