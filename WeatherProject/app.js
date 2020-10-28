const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {

    res.sendFile(__dirname + "/index.html")

})

app.post("/", (req, res) => {

  
    const query = req.body.cityName
    const apiKey = "db3a8e465835b66cf97bf772b92a2ea0"
    const unit = "metric"

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units="+ unit + ""
    console.log(url)
    https.get(url, (response) => {
        

        response.on("data", (data) => {
        const weatherData = JSON.parse(data)
        const temp = weatherData.main.temp
        const weatherDesc = weatherData.weather[0].description
        const icon = weatherData.weather[0].icon
        imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
       
         
        res.write("<p>The weather is currently: " + weatherDesc + "</p>")
        res.write("<h1>the temp in "+ query +" is: " + temp + " degress Celcius</h1>")
        res.write("<img src=" + imageURL + ">")
        res.send()
    
    })
    })


})


app.listen(3000, () => {
    console.log("Server working on port 3000")
})


