
var helper = require('./helper');
const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');



var app = express();

app.use(bodyParser.json());


app.get("/api/employees", (request, response) => {
    helper.getall(request, response);
});


app.get("/api/employees/:id", (request, response) => {
    helper.getbyid(request, response);
});


app.post("/api/employees", (request, response) => {
    helper.insert(request, response);
});

app.put("/api/employees/:id", (request, response) => {
    helper.update(request, response);
});

app.delete("/api/employees/:id", (request, response) => {
    helper.delete(request, response);
})

app.listen(9000, () => {
    console.log("running on 9000");
});