// lets understand this keyword
//In JavaScript, the this keyword refers to the object that is currently executing the function. It is a reference to the context in which the function is called. The value of this depends on how a function is invoked:


// const user = {
//     name:"krish",
//     age:24,
//      welcomemsg: function(){
//         console.log(` hello ${this.name}`);
//         console.log(this);
//     }
// }

// user.welcomemsg();
// user.name = "Abhi";
// user.welcomemsg();

// this keyword can;t bs used in function



// lets understand arrow function
// const addtwonumber = (num1,num2) => {
//     return num1+num2;
// }

// console.log(addtwonumber(4,9));

const addtwonumber = (num1,num2) => (num1+num2)
console.log(addtwonumber(4,9));
const addtwonumber1 = (num1,num2) => ({username:"krish"})
console.log(addtwonumber1(4,9));



