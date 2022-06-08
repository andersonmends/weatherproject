const express = require("express");
const https = require("https");
const app = express();



app.get("/", function (req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=2d1b465deb0dcf3a7cb48649891a1095"



    https.get(url, function (r) {

        r.on("data", function (data) {


            const obj = JSON.parse(data);
            const temp = obj.main.temp;
            res.send("temp" + temp);

            console.log(temp);

        });

    })




})






app.listen(3000, function () {
    console.log("Server statup on port 3000")
})