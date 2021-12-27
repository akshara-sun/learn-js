//The Cat - https://github.com/gSchool/JS-Intro-OOP-Exercises#the-cat

//Creating cat class with certain characteristics 
class Cat {
    constructor(tiredness, hunger, loneliness, happiness) {
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.loneliness = loneliness;
        this.happiness = happiness;
    }

    sleep() {
        if (this.tiredness == "tired" && this.hungry !== "hungry" && this.loneliness !== "lonely" && this.happiness == "content") {
            return "Nap time!"
        }
        return "No sleeping!"
    }
    eat() {
        if (this.hunger == "hungry") {
            return 'Time to eat!'
        }
        return 'Hydrate!'
    }

    play() {
        if (this.loneliness == "lonely" && this.tiredness !== "tired") {
            return "Time to play with friends!"
        } 
        if (this.loneliness == "lonely" && this.tiredness == "tired") {
          return "Nap time!";
        }
        if (this.loneliness !== "lonely" && this.tiredness !== "tired") {
          return 'Cuddle time!'
        }
        if (this.loneliness !== "lonely" && this.tiredness == "tired") {
          return "Nap time!"
        }
    }

    pet() {
        if (this.happiness == "content") {
          if (this.loneliness == "lonely") {
            return "Cuddle time!"
          }
          return "No pets! Leave the cat alone!"
        }
    }
}

//creating a specific cat object out of the cat class by passing in specific characteristics
const Twix = new Cat("tired", "full", "independent", "content");



