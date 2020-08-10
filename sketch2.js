var form2;
var database;
var userNumber;

function setup() {
    database = firebase.database();
    user = new User();
    form2 = new Form2();
}

function draw() {
    form2.display();
}

Submit2=()=>{
    displayRadioValue2();
    user.userCount = userNumber;
    user.number();
    user.everything2();
    var stage3 = document.querySelector('.hide');
    stage3.classList.remove('hide');
};

function displayRadioValue2() {  
    var ele = document.getElementsByTagName('input'); 
      
    for(i = 0; i < ele.length; i++) { 
          
        if(ele[0].type="radio") { 
          
            if(ele[0].checked) 
                user.exercise = "Yes";  

            if(ele[1].checked)
                user.exercise = "No";
        } 
    } 
}