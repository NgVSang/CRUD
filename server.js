const express = require("express");
const dotenv = require(`dotenv`);
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const { connect } = require("./server/database/connection");
const method = require("method-override");

const app = express();

//conect db
connect();
//
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//
app.use(morgan("tiny"));
//
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(method("_method"));
// app.set("view",path.resolve());

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//load router
app.use("/", require("./server/routes/router"));

app.listen(3000, () => {
	console.log(`server is running on ${PORT}`);
});
