//object -> there are ywo ways to declare an object
// 1 using constructor == singleton become
// 2 using literal  == singleton not become

//lets create an object in  liternal way
const user = {
    name : "Krish",
    age : 24
};

// user.age = 552; //for update object value

// Object.freeze(user); //if want to no one can change your value of object then freeze
// user.age = 852;
// console.log(user);



//in object we define out key and value in pair

//to access the object
// console.log(user.name);
// console.log(user["age"]);

// What are symbols JavaScript?
// Symbols are used to create object properties, for example, when you want to assign a unique identifier to an object. They can also be used as a way to create private properties in objects, as they are not enumerable. In addition, Symbols can be used to create unique constants, which are useful when creating APIs.

//object with function
// user.greetings = function(){
//     console.log("Hello js user");
// }
// user.greetingsTwo  = function(){
//     console.log(`Hello js user + ${this.age}`);
// }

// console.log(user.greetings());
// console.log(user.greetingsTwo());

//Object de-structure and JSON API intro

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "krish"
}
//this is object de-structure
const {courseInstructor:instructor} = course;
// console.log(courseInstructor);
console.log(instructor);
