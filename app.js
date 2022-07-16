const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static'))
app.use(express.urlencoded());

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))
 
// Our pug demo endpoint
app.get("/", (req, res) => {
    const con = "PUBG is one of the best game";
    const params = {'title': "PUBG Game","content":con};
    res.status(200).render('index.pug' , params);
})
app.post('/', (req, res) => {
    name = req.body.name
    Phone_number = req.body.Phone_number
    age = req.body.age
    complaint = req.body.complaint
    const OutputWrite=`The name of client is ${name},${age} years old,and thier phone number is ${Phone_number}.
Here the complaint of client- ${complaint} `
    fs.writeFileSync('output.txt',OutputWrite);
    const params = {'message': "The form has been submitted sucessfully"};
    res.status(200).render('index.pug' , params);
})
app.listen(port, () => {
    console.log(`This is my website at ${port} port`);
})

