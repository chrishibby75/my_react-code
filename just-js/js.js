//===================================================old syntax================================
// class Human {
//     constructor(gender) {
//         this.gender = gender;
//     }
//     printGender() {
//         console.log(this.gender);
//     }
// }

// class Person extends Human {
//     constructor(name) {
//         super();
//         this.gender = "male";
//         this.name = name;
//     }
//     printMyName() {
//         console.log(this.name);
//     }
// }

// const person = new Person("Chris");
// person.printGender();
// person.printMyName();



//==========================================ES6=============================================

// class Human {
//     gender = "female";

//     printGender = () => console.log(this.gender);
// }

// class Person extends Human {
//     //don't need to call super() as there is no constructor
//     name = "Chris";
//     gender = "male"

//     printMyName = () => console.log(this.name);
// }

// const person = new Person();
// person.printGender();
// person.printMyName();


//=============================spread/rest operator=======================
// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = [...numbers, 6];

// console.log(newNumbers);

// const person = {
//     name: "Chris",
//     married: true
// }

// const newPerson = {
//     ...person,
//     age: 46
// }

// console.log(newPerson);

// const myFunction = (...args) => {
//     return args.filter( el => el === 1);
// }

// console.log(myFunction(0, 1, 2, 3));

//============================destructuring==================================
//**Array Destructuring**
// const nameArray = ["Chris", "Heather", "Kade", "Kieran"];

// const [name1, name2, name3, name4] = nameArray; //can name variables whatever you want

// console.log(name2, name4);

// //**object destructuring**
// const person = {
//     name: "Chris",
//     age: 46,
//     married: true,
//     children: ["Kade", "Kieran"]
// }

// const {name, age, married, children} = person; //variables must be the keys in the object
// console.log(married, children);

// const newPerson = {...person, gender: "male"}
// console.log(newPerson);

//==================================Reference and Primitive types=========================================
// const number = 1 //primitive type
// const num2 = number; //copied number variable

// const person = {   //reference type (assigns pointer in memory)
//     name: "Chris"
// }
// const newPerson = person; //just copies the pointer
// console.log(newPerson);
// person.name = "Heather";
// console.log(person);
// console.log(newPerson);  //changes name for newPerson as it changed the name for the person object it pointed to.

// //to prevent the object values from changing, you must copy the object itself, not just the pointer.  We do that with the spread operator.

// const kid = {
//     name: "Kieran"
// };

// const newKid = {
//     ...kid
// }

// kid.name = "Kade";

// console.log(kid);
// console.log(newKid);

//================================Array Functions===============================
// const numbers = [1, 2, 3];
// const doubleNum = numbers.map(number => {
//     return number * 2
// });
// console.log(numbers);
// console.log(doubleNum);

// const filterNum = numbers.filter(number => number < 3);
// console.log(filterNum);

// const findNum = numbers.find(number => number < 3);
// console.log(findNum);

// const reducedNum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(reducedNum);