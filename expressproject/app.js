const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

//Import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
    res.send("Home");
});

var db = require("./db");
mongoose.connect(db.urlbuilder(),
{ useNewUrlParser: true }, () =>
    function(err) {
        if (err) {
        console.log("Unable to connect to Mongo.");
        process.exit(1);
        }
    },
    console.log("connected to db")
  );

  app.listen(3001);