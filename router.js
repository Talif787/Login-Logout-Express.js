const express = require("express");
const router = express.Router();

const credentials = {
  email: "talifpathan13@gmail.com",
  password: "talifrgit",
};

router.post("/login", (req, res) => {
  if (
    req.body.email === credentials.email &&
    req.body.password === credentials.password
  ) {
    req.session.user = req.body.email;
    res.redirect("/route/dashboard");
  } else {
    res.send("Invalid Credentials");
  }
});

router.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", { title: "Dashboard", user: req.session.user });
  } else {
    res.send("Unauthorized user");
  }
});

router.get("/logout", (req, res) => {
  if (req.session.user) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        res.send("Error while logging out..");
      } else {
        res.render("base", { title: "Login System" });
      }
    });
  } else {
    res.send("No Session is present..");
  }
});

module.exports = router;
