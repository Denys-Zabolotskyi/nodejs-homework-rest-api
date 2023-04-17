const express = require("express");
// const Joi = require("joi");
// const contacts = require("../../models/contacts");
const ctrl = require("../../controllers/contacts-controllers");
// const { HttpError } = require("../../helpers");
const { validateBody } = require("../../utils");
const schemas = require("../../schemas/contacts");
const router = express.Router();

// const addSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// });

router.get("/", ctrl.getAllcontacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.deleteContactById);

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  ctrl.updateContactById
);

module.exports = router;
