//declaration
const express = require("express");
const path = require("path");

//initialization
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static("public"));

//Routing

app.get("/notes" , (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
})

app.get("*" , (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

//Running
app.listen(PORT, (err) => {
    if(err) throw err;
    console.log("yo")
})