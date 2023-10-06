"user-strict";

const express = require("express");
const contacts = requrie("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .get(contact.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router.route("/favorite")
    .get(contact.findAllFavorite);

router.route("/:id")
    .get(contact.findOne)
    .post(contacts.update)
    .delete(contacts.delete);

module.exports = router;