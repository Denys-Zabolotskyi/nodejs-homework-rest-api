const express = require("express");

const ctrl = require("../../controllers/contacts-controllers");
const { isValidId, authenticate } = require("../../midllewares");

const { validateBody } = require("../../utils");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.getAllcontacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContactById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContactById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavoriteById
);

module.exports = router;
