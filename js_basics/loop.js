//loop
// for(let i=0;i<=10;i++){
//     console.log(i);
//}


//break ans continue;
// for(let i=0;i<=10;i++){
//     if(i==5) break;
//         console.log(i);
// }


// for(let i=0;i<=10;i++){
//     if(i==5) continue;
//     console.log(i);
// }

//map is an object that holds the key value pairs

// const map = new Map();
// map.set('In',"India");
// map.set('Fr',"France");
// map.set('Ch',"China");

// for(const [key,value] of map){
//     console.log(key, '=>', value);
// }

// const user = [1,2,3,4,5,56,7,8,9];
// for(const num of user) console.log(num);


const myobject = {
    game1 :"Pubg",
    gam2 : "freefire"
}


//for of not iterate on object 
//for in loop is ised for object and also other work

// for(const key in myobject){
//     console.log(`${key} and value is ${myobject[key]}`);
// }



//for each loop
const coding = ["php","js","c++","c","java"];
// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach( (val) => {
//     console.log(val);
// })

// coding.forEach( (val,index,arr) => {
//     console.log(val,index,arr);
// })


// const mycoding = [
//     {
//         languageName:"javaScript",
//         fileName : "js"
//     },
//     {
//         languageName:"C++",
//         fileName : "c++"
//     },
//     {
//         languageName:"java",
//         fileName : "java"
//     }
// ]


// mycoding.forEach((item) => {
//     console.log(item.languageName);
// })

//for each loop can't return anything
// so use filter
const nums = [1,2,3,4,5,6,7,8,9];
// const numsdata = nums.filter((val) => (val>4))
// console.log(numsdata);

// const newnum = [];
// nums.forEach((val)=>{
//     if(val>4) newnum.push(val);
// })
// console.log(newnum);
// console.log(nums);

// const newnums = nums.map((num) => num+10);
// console.log(nums);
// console.log(newnums);


//chaining

// const newnum = nums.map((val) => val*10).map((val)=>val+1).filter((val) => val>50);
// console.log(newnum);


const sum = nums.reduce((accumulator,val) => accumulator+val,0);
console.log(sum);