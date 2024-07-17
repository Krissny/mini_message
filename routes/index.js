var express = require("express");
var router = express.Router();

/* GET home page. */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }),
  },
  {
    text: "Hello Everyone",
    user: "Champ",
    added: new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }),
  },
  {
    text: "Hey fellas",
    user: "Kathrin",
    added: new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }),
  },
];
router.get("/", function (req, res, next) {
  res.render("index", { messages: messages });
});
module.exports = { messages, router };
