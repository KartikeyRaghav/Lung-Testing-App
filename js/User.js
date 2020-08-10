class User {
    constructor() {
        this.userCount = null;
        this.name = 0;
        this.age = 0;
        this.smoker = 0;
        this.exercise = 0;
        this.hours = 0;
        this.water = 0;
        this.seconds = 0;
    }

    getNumber() {
        database.ref('UserCount').on('value', function(data){
            userNumber = data.val();
        });
    }

    number() {
        database.ref('/').update({
            UserCount: this.userCount
        });
    }

    everything() {
        var userRef = "Users/User" + userNumber;
        database.ref(userRef).set({
            Name: this.name,
            Age: this.age,
            Smoker: this.smoker
        });
    }

    everything2() {
        var userRef = "Users/User" + userNumber;
        database.ref(userRef).set({
            Name: this.name,
            Age: this.age,
            Smoker: this.smoker,
            Exercise: this.exercise,
            HoursofExercise: this.hours,
            GlassesofWater: this.water
        });
    }

    everything3() {
        var userRef = "Users/User" + userNumber;
        database.ref(userRef).set({
            Name: this.name,
            Age: this.age,
            Smoker: this.smoker,
            Exercise: this.exercise,
            HoursofExercise: this.hours,
            GlassesofWater: this.water,
            Seconds: this.seconds
        });
    }
}