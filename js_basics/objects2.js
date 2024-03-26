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
