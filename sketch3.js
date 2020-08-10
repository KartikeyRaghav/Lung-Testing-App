var form2;
var database;
var userNumber;

function setup() {
    database = firebase.database();
    user = new User();
    form3 = new Form3();
}

function draw() {
    form3.display();
}