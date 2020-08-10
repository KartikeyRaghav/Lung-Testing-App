function Form1() {

    this.title = createDiv("Please enter the details in the form.");
    this.title.elt.className = 'title1';
    this.name = createDiv("Name"), this.nameInput = createInput("");
    this.name.elt.className = 'stage1';
    this.age = createDiv("Age"), this.ageInput = createInput();
    this.age.elt.className = 'stage1';
    this.smoker = createDiv("Smoker or Non-Smoker"),
    this.smoker.elt.className = 'stage1';
    this.submit = document.getElementById('submit1');

    this.display = function(){
        this.title.position(20,10);
        this.name.position(220,100),this.nameInput.position(300,112),
        this.age.position(245,140),this.ageInput.position(300,152),
        this.smoker.position(5,180),
        
        user.getNumber();

        user.name = this.nameInput.elt.value;
        user.age = this.ageInput.elt.value;
    }
}