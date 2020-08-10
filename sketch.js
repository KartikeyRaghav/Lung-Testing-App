var form1;
var database;
var userNumber;

function setup() {
    database = firebase.database();
    user = new User();
    form1 = new Form1();
}

function draw() {
    form1.display();
}

Submit1 = () =>{
    displayRadioValue();
    userNumber++;
    user.userCount = userNumber;
    user.number();
    user.everything();
    var stage2 = document.querySelector('.hide');
    stage2.classList.remove('hide');
}

function displayRadioValue() {  
    var ele = document.getElementsByTagName('input'); 
      
    for(i = 0; i < ele.length; i++) { 
          
        if(ele[0].type="radio") { 
          
            if(ele[0].checked) 
                user.smoker = "Smoker";  

            if(ele[1].checked)
                user.smoker = "Non-Smoker";
        } 
    } 
}