const mysql = require('mysql');

const constring = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "transflower"
}

const connection = mysql.createConnection(constring);
connection.connect((err) => {
    if (!err)
        console.log("connected to database succesfully");
    else
        console.log("error while connecting to database" + err);
});

exports.getall = function (request, response) {
    var command = "select * from employees";
    connection.query(command, (err, rows, fields) => {
        if (!err)
            response.send(rows);
        else
            console.log("error whilw fetching data" + err);
    });
}

exports.getbyid = function (request, response) {
    var command = "select * from employees where id=?";

    var id = request.params.id;
    connection.query(command, id, (err, row, fields) => {
        if (!err)
            response.send(row);
        else
            console.log("error whilw fetching data" + err);
    });
}

exports.insert = function (request, response) {
    let data = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        address: request.body.address,
        password: request.body.password,
        deptid: request.body.deptid,
        managerid: request.body.managerid
    }

    var command = "insert into employees set ?";

    connection.query(command, data, (err) => {
        if (!err)
            response.send("data inserted successfully");
        else
            console.log("error" + err);
    });
};

exports.update = function (request, response) {

    let id = request.params.id;

    let FirstName = request.body.firstName;
    let LastName = request.body.lastName;
    let Email = request.body.email;
    let Address = request.body.address;
    let Password = request.body.password;
    let Deptid = request.body.deptid;
    let Managerid = request.body.managerid

    let command = "update employees set firstName='" + FirstName + "',lastname='"
        + LastName + "',email='" + Email +
        "',address='"
        + Address + "',password='"
        + Password + "',deptid='"
        + Deptid + "',managerid='"
        + Managerid + "' where id=" + id;


    connection.query(command, (err) => {
        if (!err)
            response.send("data updated successfully");
        else
            console.log("error" + err);
    });
};

exports.delete = function (request, response) {
    command = "delete from employees where id=" + request.params.id;


    connection.query(command, (err) => {
        if (!err)
            response.send("record deleted successfully");
        else
            console.log("error" + err);
    });
}
