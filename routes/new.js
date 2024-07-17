var express = require("express");
var router = express.Router();
const index = require("./index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("form");
});

router.post("/", function (req, res, next) {
  const name = req.body.username;
  const message = req.body.messageText;
  index.messages.push({
    text: message,
    user: name,
    added: new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }),
  });
  console.log(index.messages);
  res.redirect("/");
  next;
});

module.exports = router;
