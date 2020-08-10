function Form3() {

    this.title = createDiv("Please enter the details in the form.");
    this.title.elt.className = 'title1';
    this.breadth = createDiv("For how much time can you hold your breadth?"), this.breadthInput = createInput();
    this.breadth.elt.className = 'stage2';
    this.submit = createButton("Submit");

    this.display = function(){
        this.title.position(20,10);
        this.breadth.position(20,100),this.breadthInput.position(580,112);
        
        user.getNumber();

        user.seconds = this.breadthInput.elt.value;
        // user.hours = this.hoursInput.elt.value;
        // user.water = this.waterInput.elt.value;

        this.submit.mousePressed(function(){
            user.userCount = userNumber;
            user.number();
            user.everything3();
            var over = document.querySelector('.hide');
            over.classList.remove('hide');
        });
    }
}