const express = require("express")
const bodyParser = require("body-parser")
const app = express()


// app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html")
    
})


app.get("/bmiCalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})


app.post("/bmiCalculator", (req, res) => {
    
    var weight = Number(req.body.weight)
    var height = Number(req.body.height)

    console.log(weight)
    console.log(height)
    var BMI = Math.floor(weight / (height*height))

    res.send("Your BMI is: " + BMI)
})

app.post("/", (req,res) => {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2
    res.send("Result of calc " + result)

})




app.listen(3000, () => {
    console.log("server runned on port 3000 - string")
});