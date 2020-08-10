function Form2() {

    this.title = createDiv("Please enter the details in the form.");
    this.title.elt.className = 'title1';
    this.exercise = createDiv("Do you exercise daily?"), 
    this.exercise.elt.className = 'stage2';
    this.hours = createDiv("For how many hours do you exercise?"), this.hoursInput = createInput();
    this.hours.elt.className = 'stage2';
    this.water = createDiv("How many glasses of water do you drink daily?"), this.waterInput = createInput("");
    this.water.elt.className = 'stage2';
    
    this.display = function(){
        this.title.position(20,10);
        this.exercise.position(300,100),
        this.hours.position(130,140),this.hoursInput.position(580,152),
        this.water.position(5,180),this.waterInput.position(580,192);
    
        user.getNumber();

        user.hours = this.hoursInput.elt.value;
        user.water = this.waterInput.elt.value;
   }
}