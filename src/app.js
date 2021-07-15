var express = require('express');
var app = express();
const session = require('express-session');
var path = require('path');
const routes = require('./backend/routes/Routes');


app.use(express.static(path.resolve(__dirname, "client")));

app.set("views", __dirname + "/client/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

app.use("/", routes);

app.set("port", process.env.PORT || 2000);
app.listen(app.get("port"), () => {
  console.log("App listening on port ", app.get("port"));
});

module.exports = app;