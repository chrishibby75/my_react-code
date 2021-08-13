class Human {
    constructor(gender) {
        this.gender = gender;
    }
    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor(name) {
        super();
        this.gender = "male";
        this.name = name;
    }
    printMyName() {
        console.log(this.name);
    }
}

const person = new Person("Chris");
person.printGender();
person.printMyName();

