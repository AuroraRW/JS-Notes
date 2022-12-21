//////////class (from ES6)/////////////
// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     sayHello(){
//         return 'my name is ' + this.name + '. I am ' + this.age + ' years old.'
//     }
// }

// let lucy = new Person('Lucy', 28)
// console.log(lucy.name)
// console.log(lucy.sayHello())

////////Inheritance///////////
// class Student extends Person{
//     constructor(name, age, grade){
//         super(name, age)
//         this.grade = grade
//     }
//     sayHello2(){
//         return 'my name is ' + this.name + '. I am in grade ' + this.grade
//     }
// }
// let mary = new Student('Mary', 10, 5)
// console.log(mary.sayHello())
// console.log(mary.sayHello2())

//////////getter and setter/////////
// class Student extends Person{
//     constructor(name, age){
//         super(name, age)
//     }
//     get studentgrade(){
//         return this.grade
//     }
//     set studentgrade(grade){
//         this.grade = grade
//     }
//     sayHello2(){
//         return 'my name is ' + this.name + '. I am in grade ' + this.grade
//     }
// }
// let mary = new Student('Mary', 10)
// mary.studentgrade=5
// console.log(mary.studentgrade)

///////////////static///////
// class Student extends Person{
//     constructor(name, age){
//         super(name, age)
//     }
//     get studentgrade(){
//         return this.grade
//     }
//     set studentgrade(grade){
//         this.grade = grade
//     }
//     sayHello2(){
//         return 'my name is ' + this.name + '. I am in grade ' + this.grade
//     }
//     static hello(stu){
//         return 'Hello, '+ stu.name
//     }
// }
// let mary = new Student('Mary', 10)
// console.log(Student.hello(mary))


////////////////////////////////module/////////////////////
// for export default, you can rename it and not need {}
// import b, {student, a} from './student.js'
// console.log(a)
// console.log(student)
// console.log(b)

/////////callback////////
// a function as argument of other function
// const func = (a)=>{
//     console.log(a)
//     // a()
// }

// const func1 = ()=>{
//     console.log('aaaa')
// }
// func(func1)

////////////////////////////asynchronous//////////////////
// setTimeout(func1, 2000)
// console.log('bbbbb')
// setInterval(func1, 2000)
// console.log('bbbbb')

/////////////////////////////Promise/////////////////////////
// hard for writing code in callback, so Promise
// const promiseFunction = (a) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(a>4){
//                 resolve('sucess!')
//             }else{
//                 reject('fail')
//             }
//         }, 2000)
//         console.log('aaaa')
//     })
// }
// promiseFunction(5)
// .then((res)=>{
//     console.log(res)
// })
// .catch((rej)=>{
//     console.log(rej)
// })
// console.log('bbbb')


// Promise all
// const p1 = Promise.resolve(3);
// const p2 = 11;
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("sucess");
//   }, 1000);
// });
// Promise.all([p1, p2, p3]).then((values) => {
//   console.log(values); 
// });

///////////
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P1")
//     }, 2000)
//   })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P2")
//     }, 3000)
//   })
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P3")
//   }, 4000)
// })
// Promise.all([p1, p2, p3]).then((values) => {
//   console.log(values); 
// });


////////////////////async///////////////////
// async function return a promise
// async function asyncFunc(a){
//     if(a>4){
//         return 'sucess'
//     }else{
//         return 'fail'
//     }
// }

// console.log(asyncFunc(5))
// asyncFunc(5).then((res)=>{
//     console.log(res)
// })
// console.log('bbbb')


//////////////////await//////////////////
//////wait for a promise (await must be in async)
//////without await
// const myfunc = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('done')
//         }, 2000)
//     })
// }
// async function asyncFunc2(){
//     myfunc().then(r=>{
//         console.log(r)
//     })
//     myfunc().then(r=>{
//         console.log(r)
//     })
//     console.log("bbbb")
// }
// asyncFunc2()

////////with await
// const myfunc = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('done')
//         }, 2000)
//     })
// }
// async function asyncFunc2(){
//     const result = await myfunc()
//     console.log(result)
//     const result1 = await myfunc()
//     console.log(result1)
//     console.log("bbbb")
// }
// asyncFunc2()

//// implement await using Promise
// const promiseFunction = (a) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(a>4){
//                 resolve('sucess!')
//             }else{
//                 reject('fail')
//             }
//         }, 2000)
//         console.log('aaaa')
//     })
// }
// promiseFunction(5)
// .then((res)=>{
//     console.log(res)
//     promiseFunction(4)
//     .then((res)=>{
//         console.log(res)
//     })
//     .catch(rej=>{
//         console.log(rej)
//     })
// })
// .catch((rej)=>{
//     console.log(rej)
// })
// console.log('bbbb')

///// run in async, and await to get all
// const myfunc = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('done')
//         }, 2000)
//     })
// }
// const myfunc1 = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('done')
//         }, 4000)
//     })
// }
// async function asyncFunc2(){
//     const result = myfunc()
//     const result1 = myfunc1()
//     console.log(`${await result} ${await result1}`)
//     console.log("bbbb")
// }
// asyncFunc2()

////////try catch

// const myfunc = (a)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(a>4){
//                 resolve('sucess!')
//             }else{
//                 reject('fail')
//             }
//         }, 2000)
//     })
// }
// async function asyncFunc2(){
//     try{
//         const result = await myfunc(4)
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
//     console.log("bbbb")
// }
// asyncFunc2()

/////////promise all
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P1")
//     }, 2000)
//   })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P2")
//     }, 3000)
//   })
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P3")
//   }, 4000)
// })
// async function myPromiseAllFunc(){
//     const allPromise = await Promise.all([p1, p2, p3])
//     console.log(allPromise)
// }
// myPromiseAllFunc()

