const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require("cookie-parser");
const flash = require('connect-flash');
const cors = require("cors");
const compression = require("compression");
const logger = require('morgan');
const path = require('path');
const routes = require('./backend/routes/Routes');

app.use(cors());
app.use(compression());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(logger("dev"));
app.use(express.static(path.resolve(__dirname, "client")));

app.set("views", __dirname + "/client/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

app.use(session({
  secret: "KonfinitySecretKey",
  resave: false,
  saveUninitialized: false,
  cookie: { path: "/", httpOnly: true, secure: false, maxAge: null}
}));

app.use(flash());

app.use("/", routes);



app.set("port", process.env.PORT || 1700);
app.listen(app.get("port"), () => {
  console.log("App listening on port ", app.get("port"));
});

module.exports = app;