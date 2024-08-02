const express = require('express');
const expressLayouts = require("express-ejs-layouts")
const app = express();

// hook up the router folder to the module
const indexRouter = require("./routes/index")

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layouts", "layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))

// use the router folder in the server
app.use("/", indexRouter)


app.listen(process.env.PORT || 3000)
