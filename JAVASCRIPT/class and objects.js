// OBJECTS and PROTOTYPES

// const employee = {
//   calctax() {
//     console.log("tax rate is 30%");
//   },
// };

// const karanArjun = {
//   salary: 50000,
//   calctax() {
//     console.log("Tax rate is 40%");
//   },
// };

// karanArjun.__proto__ = employee;

// CLASSES and CLASSES

// class car {
//   constructor(brand, mileage) {
//     console.log("Creating new object");
//     this.brand = brand;
//     this.mileage = mileage;
//   }
//   start() {
//     console.log("Started");
//   }
//   stop() {
//     console.log("Stop");
//   }
// }

// let newcar = new car("fortuner", 12);
// console.log(newcar);

// Inhertince

// class parent {
//   hello() {
//     console.log("Hello");
//   }
// }

// class child extends parent {}

// let obj = new child();

// class person {
//   constructor() {
//     this.species = "homo erectus";
//   }
//   eat() {
//     console.log("eat");
//   }

//   sleep() {
//     console.log("sleep");
//   }
// }

// class engineer extends person {
//   work() {
//     console.log("Solve problems, build something");
//   }
// }

// let Aryan = new engineer();

// PRACTICE QUESTION

// let data = "Top secret";

// class user {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   viewdata() {
//     console.log("Data = ", data);
//   }
// }

// class Admin extends user {
//   constructor(name, email) {
//     super(name, email);
//   }
//   editdata() {
//     data = "Some new value";
//   }
// }

// let student1 = new user("Aryan", "wjoawjd");
// let student2 = new user("dawawd", "wdjaowajd");

// let admin1 = new Admin("ojdwao", "wdjpoawjd");

// Error Handling

// let a = 4;
// let b = 5;
// try {
//   console.log(b);
//   console.log(b);
//   console.log(a + b);
//   console.log(a + c); // error
// } catch (err) {
//   console.log(err);
// }
// console.log(a + b);
// console.log(a + b);
// console.log(a + b);
