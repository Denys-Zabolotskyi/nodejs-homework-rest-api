const { ctrlwrapper } = require("../utils");
const { HttpError } = require("../../helpers");
const contacts = require("../models/contacts");

const getAllcontacts = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404, `Contact with contactId: '${contactId}' not found`);
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404, `Contact with contactId: '${contactId}' not found`);
  }
  res.json({ message: "contact deleted" });
};

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, `Contact with contactId: '${contactId}' not found`);
  }
  res.json(result);
};

module.exports = {
  getAllcontacts: ctrlwrapper(getAllcontacts),
  getContactById: ctrlwrapper(getContactById),
  addContact: ctrlwrapper(addContact),
  deleteContactById: ctrlwrapper(deleteContactById),
  updateContactById: ctrlwrapper(updateContactById),
};
