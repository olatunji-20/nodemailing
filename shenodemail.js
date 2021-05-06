

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));




app.get("/", (req, res) => {
    res.sendFile(__dirname + "/shenodemail.html");
});

app.post("/", (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "kmolafeadeleke1@gmail.com",
            pass: "chelseaniger"
        }
    });

    const mailOptions = {
        from: "kmolafeadeleke1@gmail.com",
        to: "falanasheriffdeen@gmail.com",
        subject: "testing Nodemailer",
        text: "the following datas were inputted: " + req.body.names + " "+"  and   "+"  " + req.body.email+" "+" and "+" "+ req.body.message +". "
    }


    transporter.sendMail(mailOptions, (error, info) => {
        if(error) throw error;
        console.log(info.response);
        res.send("<h1>Your message has been submitted.</h1>");
    });


});






app.listen(3000, () => {
    console.log("port running...");
});