const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middleWare/Authentication");

const data = [{ username: "user", password: "password" }];
router.route("/login").post((req, res) => {
  const { username, password } = req.body;

  data.map((rel) => {
    if (rel.username === username && rel.password === password) {
      req.session.isAuthenticated = true;
      res.send("successfull");
    } else {
      res.send("Invalid username or password");
    }
  });
});

router.route("/logout").get((req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("logout");
    }
  });
});

router.route("/home").get(isAuthenticated, (req, res) => {
  res.send("Welcome to coding");
});

module.exports = router;
