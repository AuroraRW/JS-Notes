// why we need javascript
// document.getElementById('title').innerHTML="Hello Aurora !"
// ECMAScript 2015: ES6

////////////////////variable///////////////
// var/let/const
// const a = 1
// a=3
// let has block scope {}/ var has function scope
// without keyword: var
// Ex 1
// const func = ()=>{
//     var a=1
// }
// console.log(a)
/////////////////data type I: number,string//////////////
// number:
// ++ Increment/-- Decrement
// assignment: a+=2

// string:
// a=3
// b='abc'
// console.log(a+b)
// method for string

//////////////////function, arrow function//////////////////////
// function func(num1,num2){
//     return num1 + num2
// }
// console.log(func(1,2))

// const func = (num1, num2)=>{
//     return num1 + num2
// }
// console.log(func(1,2))

// const func = (num1, num2)=> num1 + num2
// console.log(func(1,2))

////////////////data type II: array,object////////////////
// array:
// a = [1,3,2,4]
// push(),pop(),unshift(),shift(), slice()
// console.log(a.sort())
// console.log(a.reverse())

// a-b: ascending, b-a descending
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.
//console.log(a.sort(function(a,b){return a-b}))

// Iteration: forEach()/map()/filter()/reduce()
// forEach
// a = [2,5,3,4]
// b = []
// a.forEach((num)=>{
//     b.push(num*2)
// });
// // function func(num){
// //     b.push(num*2)
// // }
// console.log(b)

// map
// a = [2,5,3,4]
// b = a.map((num)=>{
//         return num*2
// })
// console.log(b)

// filter
// a = [2,5,3,4]
// b = a.filter((num)=>{
//      return num > 3
// })
// console.log(b)

// reduce
// a = [2,5,3,4]
// b = a.reduce((total, num)=>{
//     return total+num
// })
// console.log(b)


// object:
// const student = {
//     firstName: "John",
//     'lastName': "Doe",
//     'grade': 5,
//     getFirstName: function(){
//         return this.firstName
//     }
// };
// console.log(student.firstName)
// console.log(student['firstName'])
// console.log(student.getFirstName())

//JSON (JavaScript Object Notation): like text
// key value; double quote in key

// console.log(JSON.stringify(student))
// const studentJSON = JSON.stringify(student)
// console.log(studentJSON)
// console.log(typeof(JSON.parse(studentJSON)))



////////////////////loop//////////////
// for : array, string
// a=[2,4,3,1]
// a="abcdef"
// for(let i=0; i<a.length; i++){
//     console.log(a[i])
// }

// for in (index or key): array, object, string
// a={a:1, b:2, c:3}
// for(let i in a){
//     console.log(i)
// }

// for of (value): array, string
// for(let i of a){
//     console.log(i)
// }

// get value of object
// console.log(Object.keys(a))
// convert to array
// const keys = Object.keys(a)
// const values = Object.values(a)
// keys.forEach((num)=>console.log(num))
// const entries = Object.entries(a)
// console.log(entries)
// for(let [k, v] of entries){
//     console.log(v)
// }
// entries.forEach(([k,v])=>{
//     console.log(k)
// })
/////////////////Ternary operator//////////////////
// x=1
// if(x=1){
//     console.log('good')
// }else{
//     console.log('bad')
// }
// x=1? console.log('good') : console.log('bad')

////////////////////////destructuring///////////////////
// let [a,,b]=[1,2,3,4]
// console.log(b)
// ({age} = {firstName:'Mary', age: 28})
// console.log(age)

/////////////////while / do...while/////////////////////
// let i = 5;
// while (i<5){
//     console.log(i);
//     i++;  
// }
// do {
//     console.log(i);
//     i++;     
// }
// while (i < 5);

////////////////////primitive type, reference type////////////////
// primitive type: number/string/boolen
// reference type: object/array
// (when copy a object use spread operator)

// primitive type:
// a=1
// b=a
// a=2
// console.log(b)

// reference type:
// a = [1,3,2,4]
// b=a
// a[0]=0
// console.log(b)

// let person = {
//     name: 'Mary'
// }
// let person2 = person
// person2.name = 'Lucy'
// console.log(person)


//////////////////////spread operator, rest operator////////////////////
// spread:
// let num=[1,3,2,4]
// let num2=[5, ...num, 6]
// console.log(...num)

// let person = {
//     name: 'Mary'
// }
// let student = {...person, age:20}
// person.name='Lucy'
// console.log(student)

// rest:
// const func = (...args)=>{
//     return args.filter((num)=>num>4)
// }
// console.log(func(1,2,3,4,5,6))

