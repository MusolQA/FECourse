const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>")
    console.log(request)
})

app.get("/contact", (req, res) => {
    res.send("Contact me at: dasda@wp.pl")
})

app.get("/about", (req, res) => {
    res.send("Hi my name pawel i am learing fe new skills!")
})

app.get("/hobbies", (req, res) => {
    res.send("My hobbies")
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
});