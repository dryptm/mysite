const express = require("express");
const bodyparser = require("body-parser");
const compression=require("compression");

const app = express();
app.use(compression());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.static("public"));



app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})







app.listen(process.env.PORT || 3000, function () {
    console.log("server started at 3000");
});