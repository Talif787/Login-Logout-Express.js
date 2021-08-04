const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const {v4: uuidv4} = require("uuid");
const router = require('./router');
const PORT = process.env.PORT || 9000;
app.set("view engine", "ejs");
app.use('/static',express.static(path.join(__dirname,'public')));
// console.log(path.join(__dirname,'public'));
app.use(express.urlencoded({extended: true}));
app.use(session({secret: uuidv4(), resave: false, saveUninitialized: true}));
app.use('/route',router);

app.get("/", (req, res) => {
  res.render("base", { title: "Login System" });
});

app.listen(PORT, () => {
    console.log("Listening at the port:",PORT);
});
