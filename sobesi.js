//console.log(`_______JS подключен_________`)


// const group = {
//     name: ['Samurai-I', 'Samurai-II'],
//     users: [`Alex`, `Hanna`],
//
//
//     ShowUsersWithGroup() {
//         const handler = function (user) {              // undefined: Alex
//                                                        // undefined: Hanna
//             console.log(`${this.name}: ${user}`, this.Window.name)
//         }
//         group.users.forEach(handler)
//     },
//
//     // ShowUsersWithGroup() {
//     //     const handler = (user) => {              //       Samurai-I,Samurai-II: Alex
//     //                                              //  Samurai-I,Samurai-II: Hanna
//     //
//     //         console.log(`${this.name}: ${user}`)
//     //     }
//     //     group.users.forEach(handler)
//     // }
// }
//
// group.ShowUsersWithGroup()

//********************************************************************

// function a(x, y) {
//     //debugger
//     return x * y
// }
//
// const b = a.bind(null, 2)
// console.log(b(2)) //4
//
// console.log(b(3)) //6


//***********************************************************************


// const callCount = (fn) => {
//     //debugger
//     let count = 0;
//
//     return [
//         (...args) => {
//             count += 1  // count = 0 + 1 = 1 // 1+1 = 2 // 2+ 1 = 3
//             fn(...args)
//         },
//         () => {
//             return count
//         }
//     ]
// }
//
// const add = (a, b) => {
//     return a + b
// }
//
// const [addCount, getCount] = callCount(add)
// //
// addCount(1, 2)
// addCount(1, 3)
// addCount(20, 50)
// console. log(`getCount()= `, getCount()) // 3

// addCount(21, 22)
// addCount(21, 23)
// addCount(22, 25)
// addCount(22, 25)
// addCount(22, 25)
// console.log(`getCount()= `, getCount()) // 5

// *****************************************************************

// const user = {
//     sleep() {
//         this.isSleeping = true
//         this.isRunning = false
//     }
// }
//
// const john = Object.create(user)
// console.log(john) // {isSleeping: true, isRunning: false}
//
// john.sleep()  // обязательно нужно вызвать метод объекта sleep()
//
// console.log(john.isSleeping) // true
// console.log(john.isRunning)  // false

// *****************************************************************

// console.log(
//     [].__proto__.__proto__ === null          // false
// )
//
// console.log( [].__proto__.__proto__ === Object.prototype ) // true
// //    [].__proto__ -> Array.prototypy -> {}.__proto__ -> Object.prototype
//
// console.log(
//     (()=> { }).__proto__.__proto__ === Object.prototype   // true
// )
// // (()=> { }) -> Function.prototype -> __proto__ -> Object.prototype
//
// console.log(
//    Object.__proto__ === (()=> { }).__proto__    // true
// )
// //(()=> { }) -> Function.prototype -> __proto__ -> Object.prototype
//
// //[].__proto__.__proto__ - {constructor: f, f, f}
// //{}.__proto__.__proto__  === null - true

// *****************************************************************

// function User() {}
//
// User.prototype = {}
//
// const user = new User.prototype.constructor()
// console.log(user.constructor === User) //false
//
// console.log(user.constructor) // ƒ Object() { [native code] }
// console.log(User) // ƒ User() {}
// console.log(user) // {}

// *****************************************************************

// function Rabbit() { }
// const whiteRabbit = new Rabbit()
//
// Rabbit. prototype = {
//     jumps: true
// }
//
// const blackRabbit    = new whiteRabbit. constructor()
// console.log (whiteRabbit.constructor === Rabbit)  // true
// console.log( whiteRabbit.jumps) // undef
//
// console.log (blackRabbit. jumps)  // true
// console.log (blackRabbit.constructor ===  Rabbit)  //false

// *****************************************************************
//
// setTimeout(()=>{
//     console.log(`1`)
// }, 30)
//
// setTimeout(()=>{
//     console.log(`2`)
// }, 20)
//
// setTimeout(()=>{
//     console.log(`3`)
// }, 10)
//
// const p = new Promise((res) => {
//     console.log(`4`)
//     setTimeout(() => {
//         res(`5`)
//     }, 50)
// })
//
// p.then(res => console.log(res))
//
// Promise
//     .resolve(`6`)
//     .then(res=> console.log(res)) //6
//
//
// //4 -> 6 -> 3 -> 2 -> 1 - > 5

//***************************************************************
//
// class A {
//     constructor(name) {
//         this.name = name
//     }
// }
//
// class B {
//     constructor(name) {
//         this.name = name
//         return `D`
//     }
// }
//
// class C {
//     constructor(name) {
//         this.name = name
//         return {a: 1, b: 2, c: 3}
//     }
// }
//
// const a = new A(`A`)
// const b = new B(`B`)
// const c = new C(`C`)
//
// console.log(a.name) // A
// console.log(b.name) // B
// console.log(c.name) // undefined для return {a: 1, b: 2, c: 3}
//                     // some Name -> если добавить return {a: 1, b: 2, c: 3, name: `some Name`}
//

//***************************************************************

// class Car {name = `car`}
// class User {name = `user`}
// class Road {name = `road`}
//
// const aggregate = (classes) => {
//   const res = {}
//     Object.defineProperty(res, `showName`, {
//         value: function (){
//             console.log(this.name)
//         },
//         //enumerable: false
//     })
//     for (let i=0; i<classes.length; i++){
//         const instanse = new classes[i]
//         res[instanse.name] = instanse
//     }
//     return res
// }
//
// const a = aggregate([Car, User, Road])
//
//
//
// Object
//     .values(a)
//     .forEach(el => a.showName.call(el))
//
// // car
// // user
// // road
// console.log(Object.values(a))  //Car {name: 'car'}
//                                // User {name: 'user'}
//                                 // Road {name: 'road'}
// console.log(a) //car: Car {name: 'car'}
//                 //road: Road {name: 'road'}
//                 //user: User {name: 'user'}
//                 //showName: ƒ ()


//***************************************************************

// console.log([].__proto__) // [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
//
// console.log([].__proto__.__proto__) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//
// console.log([].__proto__.__proto__.__proto__)  //null
//
// console.log((()=>{}).__proto__) //ƒ () { [native code] }
//
// console.log((()=>{}).__proto__.__proto__) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//
// console.log({}.__proto__) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//
// console.log({}.__proto__.__proto__) // null
//
// console.log([].constructor.__proto__) // ƒ () { [native code] }
//
// console.log([].constructor.__proto__.__proto__) //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//
// console.log([].constructor.__proto__.__proto__.__proto__) // null

//***************************************************************

// const a = {
//     name: `Yo`,
//     getName() {
//         return this.name
//     }
// }
// console.log(a.name) // Yo
// console.log(a.getName()) // Yo

// //***************************************************************
//
// const a = {
//     name: `Yo`,
//     getName() {
//         (()=> {
//             console.log(this.name) // здесь a.getName() -> this будет браться от {name: 'Yo', getName: ƒ}
//         })()
//     }
// }
// // console.log(a.name) // Yo
// // a.getName() // Yo
// // a.getName.bind({name: `b`})() // b
//
// a.getName()


// //***************************************************************

// function User(name) {
//     this.name = name
//     console.log(this) //здесь User(`yo`) -> this будет браться от Windows
// }
// //User(`yo`)
// new User(`yo`)

//***************************************************************
//
// function User(name) {
//     this.name = name
//     console.log(this) //здесь User(`yo`) -> this будет браться от Windows
// }
// User(`yo`)

// //***************************************************************
//
// function User(name) {
//     this.name = name
//     return {name: `foo`}
// }
//
// const user = new User(`yo`)
// console.log(user.name) // foo


//***************************************************************

// Promise.resolve(`yo`).then(res=> console.log(res)).catch(err=> console.log(`err= `, err)) // yo
//
//
// Promise.reject(`yo`).then(res=> console.log(res)).catch(err=> console.log(`err = `, err)) // err =  yo
//

// Promise.resolve(`yo`).then(res=> {
//     console.log(res)
//     return res
// }).catch(err=> console.log(`err= `, err))
//     .then(res2=> console.log(`res2 = `, res2)) // res2 =  yo

// Promise.resolve(`yo`).then(res=> {
//     console.log(res) // yo
//     return res // возвращает промис
// }).catch(err=> console.log(`err= `, err))
//     .then(res2=> {
//         console.log(`res2 = `, res2) // res2 =  yo
//         return res2
//     })
//     .finally(res3 => console.log(`finaly data = `, res3)) // finaly data =  undefined

// Promise.reject(`yo`).then(res=> {
//     console.log(res) // yo
//     return res
// }).catch(err=> {
//     console.log(`err = `, err)
//     return err //  catch(err) - тоже возвращает промис
// }) // err =  yo
//     .then(res2=> {
//         console.log(`res2 = `, res2) // res2 = yo
//         return res2
//         //res2() // res2 is not a function
//     })
//     .finally(res3 => console.log(`finaly data = `, res3)) // finaly data =  undefined

// setTimeout( ()=> {
//         console.log(1)
// }, 3000)
//
// new Promise((res)=> {
//     console.log(2)
//     //return res
//     // return res(11)
//     res()
// }).then((res2)=>{
//     console.log(3 )
// })
//
// setTimeout( ()=> {
//     console.log(4)
// }, 1000)
//
// console.log(5)

//***************************************************************

// let a = 10
// console.log(a.__proto__ === Number.prototype) // true
// console.log(Number.prototype) // {} // Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}
// console.log(a.__proto__) // {} // Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}
// console.log(a.__proto__.__proto__) // [Object: null prototype] {}
//
// let b = `10`
// console.log(b.__proto__ === String.prototype) // true
// console.log(b.__proto__) // {} String {'', constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
//
// let c = Function
// console.log(c.__proto__ === Function.prototype) // true
// console.log(c.__proto__) // {}  ƒ () { [native code] }
//
// function User(){}
// console.log(432, User.prototype) //  {} // {constructor: ƒ User(){}}
//
// let d = {}
// console.log(d.__proto__ === Object.prototype)
// console.log(d.__proto__) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//                          //[Object: null prototype] {}

// //***************************************************************
//
// function Car() {
// }
// Car.prototype.engine = `default2`
// console.log(Car.prototype)
//
// // function Ford(){
// //     name:`default`
// // }
//
// function Ford(){}
// Ford.prototype.__proto__ = Car.prototype
//
// const ford = new Ford() // наследование от функций
//
// console.log(ford.engine)

//***************************************************************

// const promiseNew = new Promise((res, rej)=> {res()})
//     .then(()=>console.log(1))
//     .catch(()=>console.log(2))
//     .finally(()=>console.log(3))
//
// promiseNew
//     .then(()=>setTimeout(()=>console.log(4)),2000)
//     .catch(()=>console.log(5))
//     .finally(()=>console.log(5))
// //1 3 5 4
//
//
// var p1 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "foo");
// });
//
// Promise.all([p1, p2, p3]).then(values => {
//     console.log(values);  //  [0: 3,    1: 1337 ,    2: "foo"]
// });
//***************************************************************
//
// var p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "one");
// });
// var p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "two");
// });
// var p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "three");
// });
// var p4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, "four");
// });
// var p5 = new Promise((resolve, reject) => {
// // Этот промис прервёт Promise.all
//     reject("reject 496");
// });
//
// // var p6 = Promise.all([p1, p2, p3, p4, p5]).then(value => {
// //     console.log(500,value);
// // }, reason => {
// //     console.log(502,reason) // 502 'reject'
// // });
// var p6 = Promise.all([p1, p2, p3, p4, p5]).then(value => {
//     console.log(500,value);
// }).catch(err=>console.log(506, err));

//***************************************************************

// const a = () => {
//     console.log(this) // this = Window
// }
// a()
//
// function b () {
//     console.log(this) // this = Window
// }
// b()

// function foo (){
//     console.log(521, this) // this = Window
//
//     const a = () => {
//         console.log(524, this) // this = Window берет из функциональной области видимости, здесь this в функции foo равен тоже Windows
//     }
//     a()
// }
// foo()
//
// function foo2 (name){
//     this.name = name
//     console.log(521, this.name) // this = Window
//
//     const a = () => {
//         console.log(524, this) // this = Window берет из функциональной области видимости, здесь this в функции foo равен тоже Windows
//     }
//     a()
// }
// foo2(`Yo`)

// function f1(){
//     return this; // this = Window  в нестрогом режиме
// }
//
// console.log(f1())
//
// function f1(){
//     "use strict";
//     return this; // // this = undefined в строгом режиме
// }
// console.log(f1())
// var obj = {a: 'Custom'};
// var a = 'Global';
//
// function whatsThis() {
//     return this.a;  //значение this зависит от контекста вызова функции
// }
//
// console.log(whatsThis())
// console.log(whatsThis.call(obj));  // 'Custom'
// console.log(whatsThis.apply(obj))  // 'Custom'
// console.log(whatsThis.bind(obj)()) // 'Custom'

// function a(){
//     console.log( this.name)
// }
// const res = a.bind({name: `Alex`})()
// console.log(res)

//***************************************************************

// //"use strict"
// console.log(this) // this = Window - здесь будет Window в любом режиме
// function foo(){
//     console.log(`hello ${this}`) // hello [object Window]
// }
//
// foo() // hello [object Window]
//
// function foo2(){
//     "use strict"
//     console.log(`hello ${this}`) // hello undefined
// }
//
// foo2() // hello undefined
//
// const obj = {
//     name: "Nikita"
// }
//
// function foo3(){
//     console.log(`hello ${this.name}`) // hello Nikita
// }
//
// obj.foo3 = foo3
// obj.foo3() // hello Nikita
//
// const obj2 = {
//     name: "MAX"
// }
// obj.foo3.bind(obj2)()  // hello MAX

//***************************************************************

// const a = 10
//
// function f() {
//     console.log(a-2)
// }
//
// f() // 8
// console.log(a) //10
//***************************************************************

// Замыкания
//
// function person() {
//     let name = 'Peter';
//
//     return function displayName() {  // функция displayName() является замыканием.
//         console.log(name);
//     };
// }
// console.log(person()) // ƒ displayName() {console.log(name);}
// person()() // Peter
// // let peter = person();
// // peter(); // 'Peter'

//***************************************************************
//
// function getCounter() {
//      let counter = 0;
//     return () => counter++ // здесь анонимная функция является замыканием!!!, т.е. она замыкает в себе область видимости функции getCounter
// }
// let count = getCounter(); // здесь функция count является замыканием!!!
// console.log(count());  // 0
// console.log(count());  // 1
// console.log(count());  // 2
//
// let anotherCount = getCounter(); // здесь функция anotherCount является тоже замыканием!!! Получили отдельный независимый счетчик)
// console.log(anotherCount()) //0
// console.log(anotherCount()) //1
// console.log(anotherCount()) //2
//***************************************************************
// идея своего конструктора промиса

// function mySelfPromise(ecexutor) {
//     this.then = function (thenHandler){
//         //
//     }
//     this.catch = function (catchHandler){
//         //
//     }
//     const resolve = (value) => {
//         // this.status = `Resolve`
//         // this.result = value
//     }
//
//     const reject = (value) => {
//         // this.status = `Reject`
//         // this.result = value
//     }
//     ecexutor(resolve, reject)
// }
//
// new mySelfPromise((res, rej)=>{
//
// })
//***************************************************************
//this, bind, call, call

// function func1(){
//     console.log(this.name)  // здесь this = Windows,  this.name = `` по дефолту
// }
// func1() // ``
// func1.bind({name:`Mazda`})() //Mazda
// func1.call({name:`Mazda`}) //Mazda
// func1.apply({name:`Mazda`}) //Mazda


// const a = {
//     name: `Yo`,
//     getName: ()=> {
//         (()=> {
//             console.log(this.name)
//         })()
//     }
// }
//
// a.getName.bind({name: `Hi`})() // undefined
//


// const a = {
//     name: `Yo`,
//     getName: () => {
//         (()=> {
//             console.log(667, this.name) // здесь a.getName() -> this будет браться от Windows, this.name = ``
//         })()
//     }
// }
//console.log(a.name) // Yo
//console.log(a.getName()) // undefined
// a.getName.bind({name: `b`})() // undefined т.к. методы call, apply и bind не работают со стрелочными функциями !!!


//
// const b = {
//     name: `Yo`,
//     getName: function () {
//             console.log(this.name)
//     }
// }
//
// b.getName.bind({name: `Hi`})() // Hi

// //***************************************************************
// функция-конструктор this  !!!
// function User(name) {
//     console.log(this) // в функции-конструкторе this равен пустому объекту
//     console.log(this.name) // undefined
//     this.name = name
//     return `foo`
// }
//
// const user3 = new User(`Robert`)
// //console.log(user3.name) // Robert
// console.log(user3) // User { name: 'Robert' }

// //
// // const user = new (User.bind({age:25, name: `Dave`}))()
// // console.log(user.name) // undefined
// // console.log(user) // User { name: undefined }
// //
// // const user2 = new (User.bind({age:25, name: `Dave`}))(`MAX`)
// // console.log(user2.name) // MAX
// // console.log(user2) // User { name: 'MAX' }

//******************************************************************
// замыкание

// function f1() {
//     let result = 0
//     return ()=> result++
// }
//
// increm = f1()
// console.log(increm()) // 0
// console.log(increm()) // 1
// console.log(increm()) // 2

//******************************************************************

// function User(name) {
//     this.name = name
// }
//
// const user = new User(`Yo`)
// console.log(user.name) // Yo
// //***
// function User2(name) {
//     this.name = name
//     return {name: `foo`}
// }
// const user2 = new User2(`Yo`)
// console.log(user2.name) // foo
//****
// function User3(name) {
//     this.name = name
// }
// const user3 = new (User3.bind(({name: `TTT`})))()
// console.log(user3)  // {name: undefined}

//******************************************************************
//https://www.freecodecamp.org/
// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
// };
//
// function makeList(arr) {
//     // Only change code below this line
//     const failureItems = [];
//     for (let i = 0; i < 3; i++) {
//         let Items = `<li class="text-warning">${arr[i]}</li>`;
//         failureItems.push(Items)
//         console.log(failureItems)
//     }
//     // Only change code above this line
//     return failureItems;
// }
//
// const failuresList = makeList(result.failure);
// console.log(failuresList)
//******************************************************************
//https://www.freecodecamp.org/
//
// const createPerson = (name, age, gender) => {
//     // Only change code below this line
//     return {
//         name,
//         age,
//         gender
//     };
//     // Only change code above this line
// };
// console.log(createPerson(`a`,`b`, `c`))
//******************************************************************
//https://www.freecodecamp.org/

// Only change code below this line
// const bicycle = {
//     gear: 2,
//     setGear(newGear) {
//         this.gear = newGear;
//         console.log(this)
//     }
// };
// // Only change code above this line
// bicycle.setGear(3);
// console.log(bicycle.gear);
//******************************************************************
//https://www.freecodecamp.org/  функции-конструкторы = классы
// var SpaceShuttle = function(targetPlanet){
//     this.targetPlanet = targetPlanet;
// }
// var zeus = new SpaceShuttle('Jupiter');

// class SpaceShuttle {
//     constructor(targetPlanet) {
//         this.targetPlanet = targetPlanet;
//     }
// }
// const zeus = new SpaceShuttle('Jupiter');
//
// console.log(zeus) // {targetPlanet: 'Jupiter'}

//****

// Only change code below this line
// class Vegetable {
//     constructor(name) {
//         this.name = name
//     }
// }
// const Vegetable = function (name) {
//     this.name = name
// }
// Only change code above this line
//
// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // Should display 'carrot'
//******************************************************************
//https://www.freecodecamp.org/  классы геттеры и сеттеры
// class Book {
//     constructor(author) {
//         this._author = author;
//     }
//     // getter
//     get writer() {
//         return this._author;
//     }
//     // setter
//     set writer(updatedAuthor) {
//         this._author = updatedAuthor;
//     }
// }
// const novel = new Book('anonymous');
// console.log(novel.writer);
// novel.writer = 'newAuthor';
// console.log(novel.writer);
//******************************************************************
// классы геттеры и сеттеры
// Only change code below this line
// class Thermostat {
//     constructor(temperF) {
//         this._temperF = temperF
//     }
//     get temperature(){
//         return 5/9 * (this._temperF - 32)
//     }
//
//     set temperature(temperC){
//         this._temperF =  temperC * 9.0 / 5 + 32
//     }
// }
// // Only change code above this line
//
// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
//  let temp = thermos.temperature; // 24.44 in Celsius
// console.log(temp)
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius
// console.log(temp)
//******************************************************************
//https://www.freecodecamp.org/
// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer is set to false to represent an unsuccessful response from a server
//     let responseFromServer = false;
//
//     if(responseFromServer) {
//         resolve("We got the data");
//     } else {
//         reject("Data not received");
//     }
// });
//
// makeServerRequest.then(result => {
//     console.log(result);
// }).catch((err) => {console.log(err)});
//******************************************************************
//https://www.freecodecamp.org/  регулярные выражения
// let testStr = "freeCodeCamp";
// let testRegex = /Code/;
// console.log(testRegex.test(testStr)) // true
//****
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // Change this line
// let result = petRegex.test(petString);
// console.log(result) / true

//**** Ignore Case While Matching - flag i
// let myString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i; // Change this line
// let result = fccRegex.test(myString);
// console.log(result)

//**** Извлечение совпадений
// console.log("Hello, World!".match(/Hello/)); // ['Hello', index: 0, input: 'Hello, World!', groups: undefined]
// let ourStr = "Regular expressions";
// let ourRegex = /expressions/;
// console.log(ourStr.match(ourRegex)) // ['expressions', index: 8, input: 'Regular expressions', groups: undefined]

// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line
// console.log(result) // ['coding', index: 18, input: "Extract the word 'coding' from this string.", groups: undefined]

// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/;
// let result = testStr.match(ourRegex);
// console.log(result) // ['Repeat', index: 0, input: 'Repeat, Repeat, Repeat', groups: undefined]


//**** Find More Than the First Match - flag g
// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/g;
// let result = testStr.match(ourRegex);
// console.log(result) // ["Repeat", "Repeat", "Repeat"]

//****
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line
// console.log(result) // ['Twinkle', 'twinkle']


//** Сопоставить что угодно с помощью подстановочного знака точка "."
// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// let result = huRegex.test(humStr);
// let result2 = huRegex.test(hugStr);
// console.log(result) // true
// console.log(result2) // true

// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/; // Change this line - ищет есть ли слова заканчивающиеся на: un
// let result = unRegex.test(exampleStr);
// console.log(result) // true

//**** Сопоставление одного символа с несколькими возможностями - c помощью квадратных скобок /[]/gi
// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
// console.log(
// bigStr.match(bgRegex), // ['big', index: 0, input: 'big', groups: undefined]
// bagStr.match(bgRegex), // ['bag', index: 0, input: 'bag', groups: undefined]
// bugStr.match(bgRegex), // ['bug', index: 0, input: 'bug', groups: undefined]
// bogStr.match(bgRegex), // null
// )

//****
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line
// console.log(result) // ['e', 'a', 'e', 'o', 'u', 'i', 'e', 'a', 'o', 'e', 'o', 'e', 'I', 'a', 'e', 'o', 'o', 'e', 'i', 'o', 'e', 'o', 'i', 'e', 'i']
//

//**** Внутри набора символов можно определить диапазон символов для сопоставления с помощью символа дефиса: -.
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi; // Change this line
// let result = alphabetRegex.test(quoteSample); // Change this line
// console.log(result) // true
// let result2 = quoteSample.match(alphabetRegex); // Change this line
// console.log(result2) // (35)['T', 'h', 'e', 'q', 'u', 'i', 'c', 'k', 'b', 'r', 'o', 'w', 'n', 'f', 'o', 'x', 'j', 'u', 'm', 'p', 's', 'o', 'v', 'e', 'r', 't', 'h', 'e', 'l', 'a', 'z', 'y', 'd', 'o', 'g']
//

//****  Использование дефиса (-) для сопоставления диапазона символов не ограничивается буквами. Он также используется для сопоставления диапазона цифр.
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result) // (17) ['l', 'r', 'r', '3', '4', '5', '2', '6', '5', '3', 's', 'r', 'l', 'i', 'i', 'o', 's']

//*** Чтобы создать отрицаемый набор символов, поместите символ каретки (^) после открывающей скобки и перед символами, которые вы не хотите сопоставлять.
//Создайте один регекс, который будет соответствовать всем символам, не являющимся цифрами или гласными.
// Не забудьте включить в regex соответствующие флаги.
// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou0-9]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result) // (9)[' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.']
//***
//Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>".
// Remember the wildcard . in a regular expression matches any character.
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result) // ['<h1>', index: 0, input: '<h1>Winter is coming</h1>', groups: undefined]

// ****
// Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.
//let reCriminals = /C+/; // Change this line


//*** Используйте символ каретки в регексе, чтобы найти Cal только в начале строки rickyAndCal.
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; // Change this line
// let result = calRegex.test(rickyAndCal);
// console.log(result) // true


// //*** Используйте символ якоря ($) для сопоставления в конце строки.
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);
// console.log(result)  // true


//***
// let longHand = /[A-Za-z0-9_]+/;
// let shortHand = /\w+/;
// let numbers = "42";
// let varNames = "important_var";
// longHand.test(numbers);
// shortHand.test(numbers);
// longHand.test(varNames);
// shortHand.test(varNames)
// console.log(longHand.test(numbers))
// console.log(shortHand.test(numbers))
// console.log(longHand.test(varNames))
// console.log(shortHand.test(varNames))
//Используйте класс сокращенных символов \w для подсчета количества буквенно-цифровых символов в различных кавычках и строках.
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // Change this line
//  //let alphabetRegexV2 = /[A-Za-z0-9_]/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2)//.length
// console.log(result) // ['T', 'h', 'e', 'f', 'i', 'v', 'e', 'b', 'o', 'x', 'i', 'n', 'g', 'w', 'i', 'z', 'a', 'r', 'd', 's', 'j', 'u', 'm', 'p', 'q', 'u', 'i', 'c', 'k', 'l', 'y']

//***
//Вы можете искать противоположность \w с помощью \W. Обратите внимание, что в противоположном шаблоне используется
// заглавная буква. Это сокращение аналогично [^A-Za-z0-9_].
//Используйте класс сокращенных символов \W для подсчета количества неалфавитных символов в различных кавычках и строках.
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex)//.length; // (6) [' ', ' ', ' ', ' ', ' ', '.']
// console.log(result)

// ***
// Сокращение для поиска цифровых символов - \d
// Это равнозначно классу символов [0-9], который ищет один символ любого числа от нуля до девяти.
// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; // Change this line
// let result = movieName.match(numRegex).length;
// console.log(result)

//***
//Сокращение для поиска нецифровых символов - \D. Это равносильно классу символов [^0-9], который ищет один символ,
// не являющийся числом от нуля до девяти.
//Используйте сокращенный класс символов для нецифр \D, чтобы подсчитать, сколько нецифр содержится в названиях фильмов.
// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g; // Change this line
// let result = movieName.match(noNumRegex)//.length;
// console.log(result)

// Измените regex userCheck, чтобы он соответствовал ограничениям:
// 1. В именах пользователей могут использоваться только буквенно-цифровые символы.
// 2. Цифры в имени пользователя должны быть только в конце. В конце может быть ноль или больше. Имя пользователя не может начинаться с цифры.
// 3. Буквы имени пользователя могут быть строчными и прописными.
// 4. Длина имени пользователя должна быть не менее двух символов. В двухсимвольном имени пользователя в качестве символов
// могут использоваться только буквы алфавита.

//let username = "c57bT3"; // false
//let username = "JACK"; // true
//let username = "AB1"; // true
//let username = "J"; // false
//let username = "BadUs3rnam3"; // false
//let username = "J%4"; // false

//let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
//let userCheck = /^[a-z]([0-9]{2}|[a-z]+\d*)$/i; // или
// let userCheck = /^[a-z]([0-9]{2}|[a-z]+\d*)$/i;
//
// let result = userCheck.test(username);
// console.log(result)

//***
// Как найти многоточие "..." ?

// Напишите регулярное выражение, которое ищет многоточие (3 и более точек подряд).
// let regexp = /\.{3,}/g;
// console.log( "Привет!... Как дела?.....".match(regexp) ); // ..., .....

//Напишите регулярное выражение, которое ищет HTML-цвета в формате #ABCDEF: первым идёт символ #, и потом – 6 шестнадцатеричных символов.
// let regexp = /#+[0-9a-f]{6}\b/gi
//
// let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
// console.log(str.match(regexp) )  // #121212,#AA00ef

//*** Вы можете искать пробелы, используя \s, то есть строчную букву s.
// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let spaceRegex = /\s/g;
// console.log(whiteSpace.match(spaceRegex)) // [' ', ' ']
// //Change the regex countWhiteSpace to look for multiple whitespace characters in a string.
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countWhiteSpace);
// console.log(result) // [' ', ' ', ' ', ' ', ' ']

//*** Для поиска не пробельных символов используется \S, то есть заглавная S.
// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let nonSpaceRegex = /\S/g;
// console.log(whiteSpace.match(nonSpaceRegex)) // ['W', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', '.', 'W', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', 'e', 'v', 'e', 'r', 'y', 'w', 'h', 'e', 'r', 'e', '!']

// Измените regex countNonWhiteSpace для поиска нескольких не пробельных символов в строке.
// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/g; // Change this line
// let result = sample.match(countNonWhiteSpace);
// console.log(result) // ['W', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', 'i', 's', 'i', 'm', 'p', 'o', 'r', 't', 'a', 'n', 't', 'i', 'n', 's', 'e', 'p', 'a', 'r', 'a', 't', 'i', 'n', 'g', 'w', 'o', 'r', 'd', 's']

//*** используете знак плюс + для поиска одного или более символов и звездочку * для поиска нуля или более символов.
//Измените регекс ohRegex, чтобы он соответствовал всей фразе Oh no только тогда, когда в ней есть от 3 до 6 букв h.
// let ohStr = "Ohhhhh no";
// let ohRegex = /Oh{3,6} no/; // Change this line
// let result = ohRegex.test(ohStr);
// console.log(result)

// Измените регекс haRegex, чтобы он соответствовал слову Hazzah, только если в нем есть четыре или более букв z.
// let haStr = "Hazzzzzah";
// let haRegex = /z{4,}/; // Change this line
// let result = haRegex.test(haStr);
//
// console.log(result)

// Измените regex timRegex так, чтобы слово Timber соответствовало слову "m" только в том случае, если оно состоит из четырех букв.
// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/; // Change this line
// let result = timRegex.test(timStr);
// console.log(result)


// Вы можете указать возможное существование элемента с помощью вопросительного знака ? после этого элемента
//Измените regex favRegex для соответствия американской (favorite) и британской (favourite) версии слова.

// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);
// console.log(result)
//
// let quit = "qu";
// let noquit = "qz";
// let quRegex= /q(?=u)/;
// let qRegex = /q(?!u)/;
// console.log(quit.match(quRegex))
// console.log(noquit.match(qRegex))

//***
//Используйте головки lookaheads в pwRegex для соответствия паролям, длина которых превышает 5 символов и состоит из двух последовательных цифр.
// let sampleWord = "astr1on11aut";
// let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
// let result = pwRegex.test(sampleWord);
// console.log(result)

//***
//Исправьте regex таким образом, чтобы он проверял имена Франклина Рузвельта или Элеоноры Рузвельт с учетом регистра и
// должен делать уступки для средних имен. Затем исправьте код так, чтобы созданный вами regex проверялся
// на myString и возвращалось либо true, либо false в зависимости от того, совпадает ли regex.
// let myString = "Franklin D. Roosevelt";
// let myRegex = /(Franklin|Eleanor).*Roosevelt/g; // Change this line // Use .* to allow for middle names.
// let result = myRegex.test(myString); // Change this line
// console.log(result)
// // After passing the challenge experiment with myString and see how the grouping works

//***Используйте группы захвата в reRegex для поиска строки, состоящей только из одного и того же числа,
// повторяющегося ровно 4 раза, разделенных одиночными пробелами.
// let repeatNum = "42 42 42 42";
// let reRegex = /^(\d+)\s\1\s\1\s\1$/; // Change this line
// let result = reRegex.test(repeatNum);
// console.log(result)

//***
//Напишите регулярное выражение и используйте соответствующие методы строк для удаления пробелов в начале и конце строк.
// Примечание: Метод String.prototype.trim() будет работать здесь, но вам нужно будет решить эту задачу с помощью регулярных выражений.
// let hello = "   Hello, World!  ";
// let wsRegex = /^\s+|\s+$/g; // Change this line
// let result = hello.replace(wsRegex, ``) // Change this line
// console.log(result)

// let a =`first`
// console.log(a) //1
// function foo() {
//     console.log(`inside function foo`)
// }
// foo() //2
// console.log(`inside global Execution context`) //3


//****
// function myFunction() {
//     return "You rock!";
// }
// let varOne = myFunction;
// let varTwo = myFunction();
// console.log(varOne)// ƒ myFunction() {return "You rock!";}
// console.log(varTwo) // You rock!

// function getNine() {
//     let x = 6;
//     let y = 3;
//     return x + y;
// }
//
// let result = getNine();
// console.log(result); // 9

//***
//Функция raiseToPower возводит основание в экспоненту. К сожалению, она вызывается неправильно - исправьте код, чтобы значение мощности было равно ожидаемым 8.
// function raiseToPower(b, e) {
//     return Math.pow(b, e);
// }
//
// let base = 2;
// let exp = 3;
// let power = raiseToPower(base, exp);
// console.log(power);

//***
// function zeroArray(m, n) {
//     // Creates a 2-D array with m rows and n columns of zeroes
//     let newArray = [];
//     let row = [];
//     for (let i = 0; i < m; i++) {
//         // Adds the m-th row into newArray
//         row = [];
//         for (let j = 0; j < n; j++) {
//             // Pushes n zeroes into the current row to create the columns
//             row.push(0);
//         }
//
//         // Pushes the current row, which now has n zeroes in it, to the array
//         newArray.push(row);
//     }
//     return newArray;
// }
//
// let matrix = zeroArray(3, 2);
// console.log(matrix);

// // ***
// function loopy() {
//     while (true) {
//         setTimeout(() => {
//             console.log("Hello, world!");
//         }, 500)
//     }
// }
// //loopy()

//*** splice() позволяет удалить любое количество последовательных элементов из любой точки массива.
// splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые

//***
//We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function
// using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
// function htmlColorNames(arr) {
//     // Only change code below this line
//     arr.splice(0,2, `DarkSalmon`, `BlanchedAlmond`)
//     // Only change code above this line
//     return arr;
// }
//
// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
//                              //['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']

//***
//slice() копирует или извлекает заданное количество элементов в новый массив, оставляя массив, к которому он обращается,
// нетронутым. slice() принимает только 2 параметра - первый - индекс, с которого начинается извлечение, и второй - индекс,
// с которого прекращается извлечение (извлечение будет происходить до элемента с этим индексом, но не включая его).
// function forecast(arr) {
//     // Only change code below this line
//     arr= arr.slice(2,4)
//     return arr;
// }
//
// // Only change code above this line
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); // ['warm', 'sunny']

// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//         // Only change code below this line
//         newArr.push([...arr])
//         // Only change code above this line
//         num--;
//     }
//     return newArr;
// }
//
// console.log(copyMachine([true, false, true], 4));


//***
// function quickCheck(arr, elem) {
//     // Only change code below this line
//     return arr.indexOf(elem) === -1 ? false : true
//     // Only change code above this line
// }
//
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//***
//Мы определили функцию filteredArray, которая принимает arr, вложенный массив, и elem в качестве аргументов и возвращает
// новый массив. elem представляет элемент, который может присутствовать или отсутствовать в одном или нескольких массивах,
// вложенных в arr. Модифицируйте функцию с помощью цикла for, чтобы вернуть отфильтрованную версию переданного массива так,
// чтобы любой массив, вложенный в arr, содержащий elem, был удален.

// function filteredArray(arr, elem) {
//     let newArr = [];
//     // Only change code below this line
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i].indexOf(elem)===-1) {
//             //console.log(arr[i], arr[i].indexOf(elem))
//             newArr.push(arr[i])
//         }
//     }
//     // Only change code above this line
//     return newArr;
// }
//
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 19)); // [ [ 3, 2, 3 ], [ 1, 6, 3 ], [ 3, 13, 26 ] ]
//

//***
// let nestedArray = [
//     ['deep'],
//     [
//         ['deeper'], ['deeper']
//     ],
//     [
//         [
//             ['deepest'], ['deepest']
//         ],
//         [
//             [
//                 ['deepest-est?']
//             ]
//         ]
//     ]
// ];
//
// let myNestedArray = [
//         // Only change code below this line
//         ['unshift', false, 1, 2, 3, 'complex', 'nested'],
//         ['loop', 'shift', 6, 7, 1000, 'method'],
//     [['deep'], 'concat', false, true, 'spread', 'array'],
//     [[['deeper']], 'mutate', 1327.98, 'splice', 'slice', 'push'],
//     [[[['deepest']]], 'iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
// // Only change code above this line
// ];

//***
//We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the
// scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory

// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
// };
//
// function checkInventory(scannedItem) {
//     // Only change code below this line
//     if (foods[scannedItem])  return foods[scannedItem]
//     return 'no items'
//     // Only change code above this line
// }
//
// console.log(checkInventory("apples")); // 25
// console.log(checkInventory("zzz")); // no items


//***
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
// };
//
// // Only change code below this line
// delete foods.oranges
// delete foods.plums
// delete foods.strawberries
// // Only change code above this line
//
// console.log(foods); // {apples: 25, bananas: 13, grapes: 35}


//***
// let users = {
//     Alan: {
//         age: 27,
//         online: true
//     },
//     Jeff: {
//         age: 32,
//         online: true
//     }
// }
// // 2 одинаковых способа проверить наличие свойства в объекте:
// console.log(`Alan` in users) // true
// console.log(users.hasOwnProperty(`Alan`)) // true

// let users = {
//     Alan: {
//         age: 27,
//         online: true
//     },
//     Jeff: {
//         age: 32,
//         online: true
//     },
//     Sarah: {
//         age: 48,
//         online: true
//     },
//     Ryan: {
//         age: 19,
//         online: true
//     }
// };
//
// function isEveryoneHere(userObj) {
//     // Only change code below this line
//     //return ('Alan' in userObj) && ('Jeff' in userObj) && ('Sarah' in userObj) && ('Ryan' in userObj)
//     return [`Alan`, `Jeff`, `Sarah`, `Ryan`].every(name => userObj.hasOwnProperty(name))
//     // Only change code above this line
// }
//
// console.log(isEveryoneHere(users));

//***
// const users = {
//     Alan: {
//         online: false
//     },
//     Jeff: {
//         online: true
//     },
//     Sarah: {
//         online: false
//     }
// }
//
// for (let user in users) {
//     console.log(user);  // Alan     Jeff     Sarah
// }

// const users = {
//     Alan: {
//         online: false
//     },
//     Jeff: {
//         online: true
//     },
//     Sarah: {
//         online: false
//     },
//     Alan1: {
//         online: false
//     },
//     Jeff2: {
//         online: true
//     },
//     Sarah3: {
//         online: true
//     }
// }
//
// function countOnline(usersObj) {
//     // Only change code below this line
//     let count = 0
//     for (let user in usersObj) {
//         console.log(user);
//         console.log(usersObj[user].online)
//         if (usersObj[user].online === true) {count++}
//     }
//     return count
// }
//
// console.log(countOnline(users));

//***
//Закончите написание функции getArrayOfUsers, чтобы она возвращала массив, содержащий все свойства объекта,
// который она получает в качестве аргумента.

// let users = {
//     ZAlan: {
//         age: 27,
//         online: false
//     },
//     Jeff: {
//         age: 32,
//         online: true
//     },
//     Sarah: {
//         age: 48,
//         online: false
//     },
//     Ryan: {
//         age: 19,
//         online: true
//     }
// };
//
// function getArrayOfUsers(obj) {
//     // Only change code below this line
//     return Object.keys(obj)
//     // Only change code above this line
// }
//
// console.log(getArrayOfUsers(users)); // ['ZAlan', 'Jeff', 'Sarah', 'Ryan']


//***
// Посмотрите на объект, который мы предоставили, в редакторе кода. Объект user содержит три ключа. Ключ data содержит пять
// ключей, один из которых содержит массив друзей. Из этого видно, насколько гибкими являются объекты как структуры данных.
// Мы начали писать функцию addFriend. Допишите ее так, чтобы она принимала объект user, добавляла имя аргумента friend
// в массив, хранящийся в user.data.friends, и возвращала этот массив.

// let user = {
//     name: 'Kenneth',
//     age: 28,
//     data: {
//         username: 'kennethCodesAllDay',
//         joinDate: 'March 26, 2016',
//         organization: 'freeCodeCamp',
//         friends: [
//             'Sam',
//             'Kira',
//             'Tomo'
//         ],
//         location: {
//             city: 'San Francisco',
//             state: 'CA',
//             country: 'USA'
//         }
//     }
// };
//
// function addFriend(userObj, friend) {
//
//     return {
//         ...userObj,
//         data: {
//             ...userObj.data,
//             friends: [...userObj.data.friends, friend]
//         }
//     }
// }
//
// console.log(addFriend(user, 'Max'));

//***
// function convertToF(celsius) {
//     let fahrenheit = celsius*9/5 + 32;
//     return fahrenheit;
// }
//
//
// console.log(convertToF(30))

//***
// function reverseString(str) {
//     return str.split(``).reverse().join(``);
// }
// console.log(reverseString("hello"))

//***
// function factorialize(num) {
//     if (num ===0) return 1
//     //if (num === 1 ) return num
//     return factorialize(num-1)*num;
// }
// console.log(factorialize(5))


//***
//Найти самое длинное слово в строке. Верните длину самого длинного слова в заданном предложении. Вашим ответом должно быть число.
// function findLongestWordLength(str) {
//     return str.split(` `).sort((a,b)=>b.length-a.length)[0].length
// }
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

//***
//Возвратить массив, состоящий из наибольшего числа из каждого предоставленного подмассива.
// function largestOfFour(arr) {
//     let arrResult = []
//     for (let i=0; i<arr.length; i++) {
// //        console.log(arr[i])
//         let sortedArray = arr[i].sort((a,b)=> b-a)
//   //      console.log(sortedArray)
//         arrResult.push(sortedArray[0])
//     }
//     arr = arrResult
//     return arr;
// }
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
// console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))

//***
//Подтвердить окончание
// Проверьте, заканчивается ли строка (первый аргумент, str) заданной целевой строкой (второй аргумент, target)
// function confirmEnding(str, target) {
//     //return str.endsWith(target);
//     //return str.slice(str.length - target.length) === target;
//
//     // let regex = new RegExp(target+"$", "ig")
//     // return (regex).test(str)
//
//     return str.slice(-target.length) === target
// }
//
//
// console.log(confirmEnding("Bastian", "n"))
// console.log(confirmEnding("Open sesame", "same"))

//***
//Повторить строку Повторить строку
// Повторить заданную строку str (первый аргумент) num раз (второй аргумент). Верните пустую строку, если num не является
// положительным числом. Для решения этой задачи не используйте встроенный метод .repeat().
//
// function repeatStringNumTimes(str, num) {
//     // return str.repeat(num);
//
//     // let result = []
//     // if (num <= 0) return ''
//     // for (let i = 0; i < num; i++) {
//     //     result.push(str)
//     // }
//     // return result.join('')
//
//     // if (num<1) return ``
//     // return str + repeatStringNumTimes(str, num-1)
// }
// console.log(repeatStringNumTimes("abc", 10))

//***
// Усечь строку (первый аргумент), если она длиннее заданной максимальной длины строки (второй аргумент). Возвращает усеченную строку с ... окончанием.
// function truncateString(str, num) {
//     return (num >= str.length) ? str : str.slice(0, num) + `...`;
// }
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))

//***
//Создайте функцию, которая просматривает массив arr и возвращает первый элемент в нем, который проходит "тест на истинность".
// Это означает, что если дан элемент x, то "тест на истинность" пройден, если func(x) истинен. Если ни один элемент не проходит тест, возвращается значение undefined.

// function findElement(arr, func) {
//     let num = undefined;
//     return arr.find(func)
//     //return num;
// }
//
// console.log(findElement([1, 2, 3, 4], num => num % 2 === 7))


// //***
// function booWho(bool) {
//     return bool === true || bool === false;
// }
//
// console.log(booWho(null))


//****
//Заглавная буква в предложении
// Верните предоставленную строку с первой буквой каждого слова, написанной заглавными буквами.
// Убедитесь, что остальные слова написаны в нижнем регистре.
// Для целей данного упражнения вам также следует писать с заглавной буквы соединительные слова, такие как the и of.

// function titleCase(str) {
//     let result = []
//     let lowerCaseStrArr = str.toLowerCase().split(` `)
//     for (let i=0; i<lowerCaseStrArr.length; i++){
//         //console.log(lowerCaseStrArr[i].split(``)[0].toUpperCase() + lowerCaseStrArr[i].slice(1))
//         result.push(lowerCaseStrArr[i].split(``)[0].toUpperCase() + lowerCaseStrArr[i].slice(1))
//
//     }
//     return result.join(` `)
// }
//
// console.log(titleCase("I'm a little tea pot"))
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))

//***
//Вам даны два массива и индекс. Скопируйте каждый элемент первого массива во второй массив по порядку.
// Начните вставлять элементы с индекса n второго массива.
// Верните полученный массив. После выполнения функции входные массивы должны остаться неизменными.

// function frankenSplice(arr1, arr2, n) {
//     let result = []
//     result1 = arr2.slice(0, n)
//     result2 = arr2.slice(n)
//     result = [...result1, ...arr1, ...result2]
//     return result
// }
//
// console.log(frankenSplice([1, 2, 3], [4, 5], 1)) // [4, 1, 2, 3, 5]
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)) // [4, 1, 2, 3, 5, 6]
// console.log(frankenSplice([1, 2], ["a", "b"], 1)) // ['a', 1, 2, 'b']

//***
//Удаляет все ложные значения из массива.
// Фальшивыми значениями в JavaScript являются false, null, 0, "", undefined и NaN.
// Подсказка: попробуйте преобразовать каждое значение в булево значение.

// function bouncer(arr) {
//     //return arr.filter( el=> (el!==false)&&(el!==true) &&(el!==``) &&(el!==undefined) &&(el!==null) &&(el!==NaN) &&(el!==0));
//     //return arr.filter( el=> (new Boolean(el) == Boolean(true)));
//     return arr.filter(el => Boolean(el))
// }
//
// console.log(bouncer([7, "ate", "", false, 9]))
// console.log(bouncer([false, null, 0, NaN, undefined, ""]))
//
// var bNull = Boolean(null);
// console.log(bNull)
//
// let NaNstr = Boolean(NaN)
// console.log(NaNstr)


//***
// function getIndexToIns(arr, num) {
//     return [...arr, num].sort((a,b)=> a-b).indexOf(num)
//     return num;
// }
//
// console.log(getIndexToIns([40, 60], 50)) // 1

//***
// function mutation(arr) {
//     let sortedRegex = arr[1].split(``).sort().join(``)
//     console.log(sortedRegex)
//     let regex = new RegExp(sortedRegex, "g")
//     //console.log(regex)
//     //console.log(regex.test(arr[0].toLowerCase()))
//     str = arr[0].toLowerCase().split(``).sort().join(``)
//     console.log(str)
//     return regex.test(str)
// }

// function mutation(arr) {
//     return arr[1]
//         .toLowerCase()
//         .split("").every(el=> arr[0].toLowerCase().indexOf(el)!==-1)
// }
//
// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "az"]))
//
// //console.log(['y', 'h', 'e', 'y'].sort())
//
// console.log("Zyxwvutsrqponmlkjihgfedcba".toLowerCase().indexOf(`я`))

//***
//Напишите функцию, которая разбивает массив (первый аргумент) на группы
// длиной size (второй аргумент) и возвращает их в виде двумерного массива.

// function chunkArrayInGroups(arr, size) {
//     let result = []
//     for (let i=0; i<arr.length; i=i + size) {
//         //console.log(arr.slice(i, i+size))
//         result.push(arr.slice(i, i+size))
//     }
//     return result;
// }
//
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))

//***
// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: ()=> `This dog has 4 legs`
// };
//
// dog.sayLegs();
// console.log(dog.sayLegs())

//***
// function Bird() {
//     this.name = "Albert";
//     this.color  = "blue";
//     this.numLegs = 2;
// }
//
// let blueBird = new Bird();
// console.log(blueBird.name) // Albert
//
// function Dog() {
//     this.name = "Rupert";
//     this.color = "brown";
//     this.numLegs = 4;
// }
// // Only change code below this line
// let hound = new Dog() // instance === {}
// console.log(hound) // {name: 'Rupert', color: 'brown', numLegs: 4}

//***
// function Dog(name, color ) {
//     this.name = name
//     this.color = color
//     this.numLegs = 4
// }
//
// let terrier = new Dog(`terriery`, `brown`)
// console.log(terrier) // {name: 'terriery', color: 'brown', numLegs: 4}

//***
// function House(numBedrooms) {
//     this.numBedrooms = numBedrooms;
// }
//
// // Only change code below this line
// let myHouse = new House(4)
//
// console.log(myHouse instanceof House) // true

//***
// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
// }
//
// let duck = new Bird("Donald");
//
// let ownProps = [];
//
// for (let property in duck) {
//     if(duck.hasOwnProperty(property)) {
//         ownProps.push(property);
//     }
// }
//
// console.log(ownProps);

//***
// function Dog(name) {
//     this.name = name;
// }
//
// Dog.prototype.numLegs=4
//
// // Only change code above this line
// let beagle = new Dog("Snoopy");
// console.log(beagle) // {name: 'Snoopy'}
// console.log(beagle.numLegs) //4

//***
// function Bird(name) {
//     this.name = name;  //own property
// }
//
// Bird.prototype.numLegs = 2; // prototype property
//
// let duck = new Bird("Donald");
//
// let ownProps = [];
// let prototypeProps = [];
//
// for (let property in duck) {
//     if(duck.hasOwnProperty(property)) {
//         ownProps.push(property);
//     } else {
//         prototypeProps.push(property);
//     }
// }
//
// console.log(ownProps); // ['name']
// console.log(prototypeProps); // ['numLegs']
// console.log(duck.constructor) // [Function: Bird]
// console.log(duck.constructor === Bird) // true

//***
// Bird.prototype = {
//     numLegs: 2,
//     eat: function() {
//         console.log("nom nom nom");
//     },
//     describe: function() {
//         console.log("My name is " + this.name);
//     }
// };

// function Dog(name) {
//     this.name = name;
// }
//
// Dog.prototype = {
//     constructor: Dog,
//     numLegs : 4,
//     eat: () => `dog eat meat)`,
//     describe: () => `woof - woof !!!`
// };
//
// let bobik = new Dog('BOBIK')
//
// console.log(bobik.describe()) // woof - woof !!!
// console.log(bobik.eat()) // dog eat meat)
// console.log(bobik)
// console.log(bobik.constructor) // Dog / Object() (если не указать, что constructor: Dog)
// console.log(Dog.prototype.isPrototypeOf(bobik)) //true


//***
// Bird.prototype = {
//     constructor: Bird,
//     describe: function() {
//         console.log("My name is " + this.name);
//     }
// };
//
// Dog.prototype = {
//     constructor: Dog,
//     describe: function() {
//         console.log("My name is " + this.name);
//     }
// };
//
// function Animal() {
//
// };

// function Animal(name) {
//     this.animal = name;
// }
//
// Animal.prototype = {
//     constructor: Animal,
//     describe: function () {
//         console.log("My name is " + this.name);
//     },
//     eat: function () {
//         console.log("nom nom nom");
//     },
// }
//
// let animal = Object.create(Animal.prototype)
// animal.eat() // nom nom nom
// console.log(animal instanceof Animal) // true
// console.log(animal)

//***
// function Animal() { }
//
// Animal.prototype = {
//     constructor: Animal,
//     eat: function() {
//         console.log("nom nom nom");
//     }
// };
//
// // Only change code below this line
//
// let duck = Object.create(Animal.prototype); // Change this line
// let beagle = Object.create(Animal.prototype); // Change this line
// console.log(duck) // Animal {}
// console.log(beagle) // Animal {}
//
// function Dog(name) {
//     this.name = name;
// }
//
// Dog.prototype = {
//     // constructor: Dog,
//     // numLegs : 4,
//     // eat: () => `dog eat meat)`,
//     // describe: () => `woof - woof !!!`
// }
//
// Dog.prototype = Object.create(Animal.prototype)
// let dog = new Dog(`Bobbik`)
// dog.eat() // nom nom nom
// console.log(Dog.prototype.constructor) // function Animal() { }
// Dog.prototype.constructor = Dog
// console.log(Dog.prototype.constructor) // function Dog() { }


//**************************************************** Собесы 21/06/22  *****************************************************
// console.log(`6`/`2a`) //NaN
// console.log(`6` * `2`) // 12
// console.log(`6` + `2`) // 62
// console.log(2 + `6`) // 26
// console.log(`6`-`2`) // 4
// console.log(`2`+ true) // 2true  + дает конкатиниацию строки и true
// console.log(true + true) // 2 + дает сложение true + true = 2
// console.log(null == undefined) // true т.к. ==
// console.log(null === null) // true
// console.log(undefined === undefined) // true


// const a = {}
// const b = {}
// a[b] = `b` // ключем из b берем строку b.toString ->  [object Object]
// console.log(a) // {[object Object]: 'b'} b.toString ->  [object Object]
//console.log({}.toString()) // [object Object]

// const a = {}
// c = 'variableC'
// a.c = `c`
// a.g = `gg`
// a['z'] = `zzz`
// console.log(a) // {c: `c`, g: 'gg', z: 'zzz'}

// const a = {}
// // c = 'variableC'
// c = []
// a[c] = `c`
// a.g = `gg`
// a['z'] = `zzz`
// console.log(a) // {variableC: `c`, g: 'gg', z: 'zzz'}
//
// console.log(2022, [].toString()) // 2022 ''
//console.log(2023, {}.toString()) // 2023 '[object Object]'


// let a = b = 42
// (() => {
//     let a = b = 42
//
//
// })()
//
// console.log(a)
// //  -> ReferenceError: a is not defined <-
// console.log(b) // 42


//
// const a = {
//     name : `a`,
//     logName () {
//         console.log(this.name)
//         console.log(this)
//     }
// }
//
// setTimeout(a.logName, 100) // undefined  т.к. global.name = undefined для node и "" (пустая строка) для windows
//
// // console.log(this.name) // undefined
// // console.log(this) // windows в браузере


//*****


// const a = {
//     isMale : true,
//     age: 23,
//     getIsMale: ()=> {
//         return this.isMale
//     },
//     getAge: function () {
//         const age = 24
//         return this.age
//     }
//
// }
//
// console.log(a.getIsMale()) // стрелка берет контекст из внешнего лексич окружения windows
// console.log(a.getAge()) // this.age берется из объека a = 23


//****
//
// Object.prototype.getName = function () {
//     return this.name
//
// }
//
// const a = { name: `a`}
// const b = { name: `b`}
// const c = { name: `c`}
//
// console.log(
//     a.getName.bind(b).bind(c)() // b  bind привязывается контекст только первый раз
// )
//
// console.log(
//     a.getName.bind(c).call()  // с  call вызывает контекст из bind
// )


///***********************
// function User (name){
//     this.name = name
//     return "USER"
// }
//
// function Car(engine) {
//     this.engine = engine
//     return {}
//
// }
//
// const user = new User("Alex")
// const car = new Car("v8")
//
// console.log(user.name) // примитивы из конструктора игнорируются из return
// console.log(car.engine) // {} не игнорируются из return, т.е. {}.engine = undefined
//
//

// //***********************
//
// const watchBalanceWithLog = function (cb) {
//     let count = 0
//
//     return function () {
//         cb()  // this = windows
//         //cb.call(this) // this = {money: 100, currency: 'USD', watchBalance: ƒ}
//         console.log(2094, this) // {money: 100, currency: 'USD', watchBalance: ƒ}
//         console.log(`Balance was watched ${++count} times`)
//     }
//
// }
//
// const wallet = {
//     money: 100,
//     currency: "USD",
//     watchBalance() {
//         console.log(2104, `${this.money} ${this.currency}`, this) // 2104 '100 USD' {money: 100, currency: 'USD', watchBalance: ƒ}
//     }
//
// }
//
// wallet.watchBalance = watchBalanceWithLog(wallet.watchBalance)
// //wallet.watchBalance = watchBalanceWithLog(wallet.watchBalance.bind(wallet))
//   wallet.watchBalance()
//   wallet.watchBalance()
// ??????????????????????????

//***********************************
//
//  console.log([1,2,3] + true) // 1,2,3true
// console.log(`2`*3 + true) // 7
// console.log(`2` + 3) // 23
// console.log({} + {} + 3 + [4,5,6]) // [object Object][object Object]34,5,6
// console.log([1,2,3,4]+1)
//
//***********************************


//
// const a = {
//     name: `a`
// }
//
//
// let b = {
//     name: `b`
// }
//
// let c = {
//     name: `c`
// }
//
// c = b // b-> { name: new c} < - c
// console.log(c) // {name: 'b'}
// console.log(b) // {name: 'b'}
// b = a // b-> { name: new b} < - a
// console.log(b) // {name: 'a'}
// console.log(a) // {name: 'a'}
//
// c.name = `new c`
// b.name = `new b`
//
// console.log(a.name) // new b
// console.log(b.name) // new b
// console.log(c.name) // new c
// //new b
// // new b
// // new c


// **********************************

//  window.name = `outside`
//
// const a = {
//     name: `a`
// }
//
// const b = {
//     name: `b`,
//     getName: () => {
//         (function (){
//             console.log(this.name)
//         }).call(a)
//     }
//     //getName: () =>     console.log(this.name) // outside
//     // getName: function (){
//     //     console.log(this.name) // b
//     // }
//     // getName: function (){
//     //     console.log(this) // {name: 'b', getName: ƒ}
//     // }
//
//     //getName: () =>     console.log(this) // window
//
// }
// b.getName() // `a`  т.к. есть контекст call(a)


// **********************************

// const c = {
//     name: `c`
// }

// Object.setPrototypeOf(c,b)
//
// const a = () => {
//   age: 25
// }
// const b = () => {
//     age: 23,
//         hi: () => {
//         console.log(this.age)
//     },
//         hi2() {
//         console.log(this.age)
//     }
//
// }  //не успел

// ///*****************
//
// Object.prototype.name = "ObjectNew"
//
// Object.prototype.showName = function () {
//     console.log(this.name)
// }
// const a = () => {
//     name: `a`
// }
//
// const b = Object.create(a) // {}
// b.showName() // a
//
// Object.setPrototypeOf(b, {})
// b.showName() // Object
//???????????????????????????????

//***************************


// const arr = []
// console.log(arr.constructor === Array) // true
//
// const a = () => {}
//
// console.log(a.__proto__.__proto__.constructor === Object) // true
// console.log(a.__proto__) // ƒ () { [native code] }
// console.log(a.__proto__.__proto__) // [Object: null prototype] {}
// console.log(a.__proto__.__proto__.constructor) // ƒ Object() { [native code] }
//
// arr.__proto__ = []
// console.log(arr.__proto__.__proto__ === Object.prototype) // false
// console.log(arr.__proto__) // []
// console.log(arr.__proto__.__proto__) // [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ,…]
// ?????????????????????????

//*********************************

//
// console.log(`a`)
//
// console.log(`b`)
//
// setTimeout( ()=> {
//     console.log(`timer 10`)
// }, 10)
//
// setTimeout( ()=> {
//     console.log(`timer 20`)
// }, 20)
//
// Promise.resolve(`Promise 1 `). then( (res) => console.log (res))
// Promise.resolve(setTimeout(()=> (console.log('Promise 2')), 5))
// Promise.resolve(`Promise 3 `).then(console.log)
//
// setTimeout(() => {
//     console.log(`timer 0`)
//
// })
//
// console.log(`d`)

// a
// b
// d
// Promise 1
// Promise 3
// timer 0
// Promise 2
// timer 10
// timer 20


//***************************************


//
// console.log('hi')
//
// setTimeout(() => console.log('there'), 10)
//
// for (var i = 0; i < 10; i++) {
//     console.log(`inside for ${i}`)
//     setTimeout(function() {
//         console.log(`inside setTimeout ${i}`)
//     }, 0)
// }
//
// console.log('You')

//hi
// inside for 0
// inside for 1
// inside for 2
// inside for 3
// inside for 4
// inside for 5
// inside for 6
// inside for 7
// inside for 8
// inside for 9
// You
// inside setTimeout 10
// inside setTimeout 10
// inside setTimeout 10
// inside setTimeout 10
// inside setTimeout 10
// inside setTimeout 10
// inside setTimeout 10
// inside setTimeout 10
// inside setTimeout 10
// inside setTimeout 10
// there

//****************
//
// function Rabbit () {}
// const rabbit1 = new Rabbit ()
// Rabbit.prototype = {}
// const rabbit2 = new Rabbit()
//
// console.log(rabbit1.constructor === Rabbit) //true
// console.log(rabbit2.constructor === Rabbit) // false
// console.log(rabbit1)
// console.log(rabbit2)

//
// console.log(rabbit1.constructor ) // Rabbit
// console.log(rabbit2.constructor ) // Object


//*************************************************************************************
// freecodecamp freecodecamp freecodecamp

// function Animal() {
// }
//
// Animal.prototype.eat = function () {
//     console.log("nom nom nom");
// };
//
// function Bird() {
// }
//
// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Bird;
//
//
// Bird.prototype.fly = function () {
//     console.log("I'm flying!");
// };
//
//
// let duck = new Bird();
// duck.eat(); // nom nom nom
// duck.fly(); // I'm flying!
// console.log(duck)

//******
// function Animal() { }
// Animal.prototype.eat = function() {
//     return "nom nom nom";
// };
// function Bird() { }
//
// Bird.prototype = Object.create(Animal.prototype);
//
// Bird.prototype.eat = function() {
//     return "peck peck peck";
// };
//
// let duck = new Bird()
// console.log(duck.eat()) // peck peck peck

//*******

// let flyMixin = function (obj) {
//     obj.fly = function () {
//         console.log("Flying, wooosh!");
//     }
// };
//
//
// let bird = {
//     name: "Donald",
//     numLegs: 2
// };
//
// let plane = {
//     model: "777",
//     numPassengers: 524
// };
//
// flyMixin(bird);
// flyMixin(plane);
//
//
// bird.fly(); // Flying, wooosh!
// plane.fly(); / Flying, wooosh!

//***
// closure = замакание
// function Bird() {
//     let hatchedEgg = 10;   // заменилли для приватности this.hatchedEgg на let hatchedEgg и затем
//                            // через фунции  getHatchedEggCount и getHatchedEggCountIncrement обращаемся к hatchedEgg
//
//     this.getHatchedEggCount = function() {
//         return hatchedEgg;
//     };
//     this.getHatchedEggCountIncrement = function() {
//         return ++hatchedEgg;
//     };
// }
// let ducky = new Bird();
// ducky.getHatchedEggCount();
// console.log(ducky.getHatchedEggCount())//10
// //ducky.getHatchedEggCountIncrement()
// console.log(ducky.getHatchedEggCountIncrement())//11
// console.log(ducky.getHatchedEggCount())//11
// console.log(ducky.getHatchedEggCountIncrement())//12


//***
//Immediately Invoked Function Expression (IIFE)
// (function () {
//     console.log("Hi, Immediately Invoked Function!");
// })(); // sobesi.js:2461 Hi, Immediately Invoked Function!
//
// ( () => {
//     console.log("Hi,  I'm Immediately Invoked Arrow Function !");
// })(); // Hi,  I'm Immediately Invoked Arrow Function !
//
// //Перепишите функцию makeNest и удалите ее вызов, чтобы вместо нее было анонимное функциональное выражение с немедленным вызовом (IIFE).
// // function makeNest() {
// //     console.log("A cozy nest is ready");
// // }
//
// // makeNest(); // A cozy nest is ready
//
// // (function () {  // he function should be anonymous
// //     console.log("A cozy nest is ready");
// // })()   // A cozy nest is ready
//
// ( () => {  // he function should be anonymous
//     console.log("A cozy nest is ready 2481");
// })()   // A cozy nest is ready 2481

//***
//
// let bird = {
//     name: "Donald",
//     numLegs: 2
// };
//
// let motionModule = (function () {
//     return {
//         glideMixin: function (obj) {
//             obj.glide = function () {
//                 console.log("Gliding on the water");
//             };
//         },
//         flyMixin: function (obj) {
//             obj.fly = function () {
//                 console.log("Flying, wooosh!");
//             };
//         }
//     }
// })();
// motionModule.glideMixin(bird)
// motionModule.flyMixin(bird)
// console.log(bird) // {name: 'Donald', numLegs: 2, glide: ƒ, fly: ƒ}
// bird.glide() // Gliding on the water
// bird.fly() // Flying, wooosh!
//
//
// let funModule = (function () {
//         return {
//             isCuteMixin: function (obj) {
//                 obj.isCute = function () {
//                     return true;
//                 }
//             },
//             singMixin: function (obj) {
//                 obj.sing = function () {
//                     console.log("Singing to an awesome tune");
//                 };
//             }
//         }
//     }
// )()
// funModule.isCuteMixin(bird)
// funModule.singMixin(bird)
// console.log(bird) // fly: ƒ () glide: ƒ () isCute: ƒ ()  name: "Donald"  numLegs: 2 sing: ƒ ()
// console.log(bird.isCute()) // true
// bird.sing() // Singing to an awesome tune


////**************
// //Приготовьте 27 чашек зеленого чая и 13 чашек черного чая и сохраните их в переменных tea4GreenTeamFCC и tea4BlackTeamFCC
// // соответственно. Обратите внимание, что функция getTea была изменена, теперь она принимает функцию в качестве первого аргумента.
// // Function that returns a string representing a cup of green tea
// const prepareGreenTea = () => 'greenTea';
// // Function that returns a string representing a cup of black tea
// const prepareBlackTea = () => 'blackTea';
// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (prepareTea, numOfCups) => {
//     const teaCups = [];
//
//     for(let cups = 1; cups <= numOfCups; cups += 1) {
//         const teaCup = prepareTea();
//         teaCups.push(teaCup);
//     }
//     return teaCups;
// };
//
// // Only change code below this line
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27)
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13)
// // Only change code above this line
//
// console.log(
//     tea4GreenTeamFCC, // ['greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea', 'greenTea']
//     tea4BlackTeamFCC // ['blackTea', 'blackTea', 'blackTea', 'blackTea', 'blackTea', 'blackTea', 'blackTea', 'blackTea', 'blackTea', 'blackTea', 'blackTea', 'blackTea', 'blackTea']
// );


///********


// В нем используется метод, который имеет побочные эффекты в программе, вызывая неправильное поведение. Окончательный
// список открытых вкладок, хранящийся в finalTabs.tabs, должен быть таким ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium',
// 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'], но список,
// создаваемый кодом, немного отличается.
// Измените Window.prototype.tabClose так, чтобы он удалял правильную вкладку.

// // tabs is an array of titles of each site open within the window
// const Window = function(tabs) {
//     this.tabs = tabs; // We keep a record of the array inside the object
// };
//
// // When you join two windows into one window
// Window.prototype.join = function(otherWindow) {
//     this.tabs = this.tabs.concat(otherWindow.tabs);
//     return this;
// };
//
// // When you open a new tab at the end
// Window.prototype.tabOpen = function(tab) {
//     this.tabs.push('new tab'); // Let's open a new tab for now
//     return this;
// };
//
// // When you close a tab
// Window.prototype.tabClose = function(index) {
//
//     // Only change code below this line
//
//     const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
//     // const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab
//     const tabsAfterIndex = this.tabs.slice(index+1); // Get the tabs after the tab
//
//     //this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
//     this.tabs = [... tabsBeforeIndex, ...tabsAfterIndex] // Join them together
//
//     //this.tabsRemoved = this.tabs.splice(index,1)
//
//     // Only change code above this line
//     console.log(2607, this.tabs) // windows.tabs
//     return this;
// };
//
// // Let's create three browser windows
// const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
// const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
// const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
//
// // Now perform the tab opening, closing, and other operations
// const finalTabs = socialWindow
//     .tabOpen() // Open a new tab for cat memes
//     .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//     .join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs); // ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'GMail', 'Docs', 'freeCodeCamp', 'new tab']
//                              //['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Vimeo', 'Inbox', 'new tab']
//                  //should be : ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']
//                             // ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'GMail', 'Docs', 'freeCodeCamp', 'new tab']
// let indexX = 2
// var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
// // let removedFish = myFish.splice(indexX,)
// // console.log(removedFish)
// // console.log(myFish)
//
// let firstPartOfFish = myFish.slice(0, indexX)
// let secondPartOfFish = myFish.slice(indexX+1)
// let fishWithoutIndex = [...firstPartOfFish, ...secondPartOfFish]
// console.log(fishWithoutIndex)
// console.log(myFish) // slice работает без мутации первичного массива (в отличии от splice, который мутирует/видоизменяет первичный массив) !!!!!!

//****

//Заполните код функции incrementer так, чтобы она возвращала значение глобальной переменной fixedValue, увеличенное на единицу.
// The global variable

// let fixedValue = 4;
//
// function incrementer(fixedValue) {
//     // Only change code below this line
//     return fixedValue + 1
//     // Only change code above this line
// }
//
// console.log(incrementer(fixedValue))
// console.log(fixedValue)


//********
//Перепишите код так, чтобы глобальный массив bookList не изменялся ни в одной из функций. Функция add должна добавить заданное
// bookName в конец переданного ей массива и вернуть новый массив (список). Функция remove должна удалить данное bookName из переданного ей массива.
// Примечание: Обе функции должны возвращать массив, а все новые параметры должны быть добавлены перед параметром bookName.

// // The global variable
// const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
//
// // Change code below this line
// function add(bookList, bookName) {
//
//     //bookList.push(bookName);
//     return [ ...bookList, bookName]
//
//     // Change code above this line
// }
//
// // Change code below this line
// function remove(bookList, bookName) {
//     // const book_index = bookList.indexOf(bookName);
//     // if (book_index >= 0) {
//     //
//     //     bookList.splice(book_index, 1);
//         return bookList.filter(el=>el !== bookName);
//
//         // Change code above this line
//     //}
// }
//
// console.log(add( bookList, "A Brief History of Time"))

//***
//Массив watchList содержит объекты с информацией о нескольких фильмах. Используйте map на watchList, чтобы присвоить новый
// массив объектов переменной ratings. Каждый фильм в новом массиве должен иметь только ключ title с названием фильма и ключ
// rating с рейтингом IMDB. Код в редакторе в настоящее время использует цикл for для выполнения этой задачи, поэтому вам
// следует заменить функциональность цикла выражением map.

// // The global variable
// const watchList = [
//     {
//         "Title": "Inception",
//         "Year": "2010",
//         "Rated": "PG-13",
//         "Released": "16 Jul 2010",
//         "Runtime": "148 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Christopher Nolan",
//         "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//         "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//         "Language": "English, Japanese, French",
//         "Country": "USA, UK",
//         "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//         "Metascore": "74",
//         "imdbRating": "8.8",
//         "imdbVotes": "1,446,708",
//         "imdbID": "tt1375666",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Interstellar",
//         "Year": "2014",
//         "Rated": "PG-13",
//         "Released": "07 Nov 2014",
//         "Runtime": "169 min",
//         "Genre": "Adventure, Drama, Sci-Fi",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan, Christopher Nolan",
//         "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//         "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//         "Language": "English",
//         "Country": "USA, UK",
//         "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//         "Metascore": "74",
//         "imdbRating": "8.6",
//         "imdbVotes": "910,366",
//         "imdbID": "tt0816692",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "The Dark Knight",
//         "Year": "2008",
//         "Rated": "PG-13",
//         "Released": "18 Jul 2008",
//         "Runtime": "152 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//         "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//         "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//         "Language": "English, Mandarin",
//         "Country": "USA, UK",
//         "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//         "Metascore": "82",
//         "imdbRating": "9.0",
//         "imdbVotes": "1,652,832",
//         "imdbID": "tt0468569",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Batman Begins",
//         "Year": "2005",
//         "Rated": "PG-13",
//         "Released": "15 Jun 2005",
//         "Runtime": "140 min",
//         "Genre": "Action, Adventure",
//         "Director": "Christopher Nolan",
//         "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//         "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//         "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//         "Language": "English, Urdu, Mandarin",
//         "Country": "USA, UK",
//         "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//         "Metascore": "70",
//         "imdbRating": "8.3",
//         "imdbVotes": "972,584",
//         "imdbID": "tt0372784",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Avatar",
//         "Year": "2009",
//         "Rated": "PG-13",
//         "Released": "18 Dec 2009",
//         "Runtime": "162 min",
//         "Genre": "Action, Adventure, Fantasy",
//         "Director": "James Cameron",
//         "Writer": "James Cameron",
//         "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//         "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//         "Language": "English, Spanish",
//         "Country": "USA, UK",
//         "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//         "Metascore": "83",
//         "imdbRating": "7.9",
//         "imdbVotes": "876,575",
//         "imdbID": "tt0499549",
//         "Type": "movie",
//         "Response": "True"
//     }
// ];
//
// // Only change code below this line
//
// // const ratings = [];
// // for (let i = 0; i < watchList.length; i++) {
// //     ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
// // }
//
// //ratings = watchList.map(el=> ({title: el.Title, rating: el.imdbRating}))
// // или так: Using parameter destructuring, the title and rating are extracted and returned in an object. Parantheses are needed to return an object.
// ratings = watchList.map(({ Title: title, imdbRating: rating})=>({title, rating}))
//
//
// // Only change code above this line
// console.log(ratings)
// console.log(JSON.stringify(ratings));

//**********
//Напишите свой собственный Array.prototype.myMap(), который должен вести себя точно так же, как Array.prototype.map().
// Вы не должны использовать встроенный метод map. Доступ к экземпляру Array можно получить в методе myMap с помощью this.

// The global variable
// const s = [23, 65, 98, 5];
//
// Array.prototype.myMap = function(callback) {
//     const newArray = [];
//     //console.log(callback)
//     // Only change code below this line
//     for (let i=0; i<this.length; i++) {
//         newArray.push(callback(this[i]))
//     }
//
//     // Only change code above this line
//     return newArray;
// };
//
// const new_s = s.myMap(function(item) {
//     return item * 2;
// });
//
// console.log(new_s)


// //*****
// //Переменная watchList содержит массив объектов с информацией о нескольких фильмах. Используйте комбинацию filter и map
// // для watchList, чтобы назначить новый массив объектов только с ключами title и rating. Новый массив должен включать
// // только те объекты, где imdbRating больше или равен 8.0. Обратите внимание, что значения рейтинга сохраняются в объекте
// // в виде строк, и вам может понадобиться преобразовать их в числа, чтобы выполнить над ними математические операции.
// // The global variable
// const watchList = [
//     {
//         "Title": "Inception",
//         "Year": "2010",
//         "Rated": "PG-13",
//         "Released": "16 Jul 2010",
//         "Runtime": "148 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Christopher Nolan",
//         "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//         "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//         "Language": "English, Japanese, French",
//         "Country": "USA, UK",
//         "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//         "Metascore": "74",
//         "imdbRating": "8.8",
//         "imdbVotes": "1,446,708",
//         "imdbID": "tt1375666",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Interstellar",
//         "Year": "2014",
//         "Rated": "PG-13",
//         "Released": "07 Nov 2014",
//         "Runtime": "169 min",
//         "Genre": "Adventure, Drama, Sci-Fi",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan, Christopher Nolan",
//         "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//         "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//         "Language": "English",
//         "Country": "USA, UK",
//         "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//         "Metascore": "74",
//         "imdbRating": "8.6",
//         "imdbVotes": "910,366",
//         "imdbID": "tt0816692",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "The Dark Knight",
//         "Year": "2008",
//         "Rated": "PG-13",
//         "Released": "18 Jul 2008",
//         "Runtime": "152 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//         "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//         "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//         "Language": "English, Mandarin",
//         "Country": "USA, UK",
//         "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//         "Metascore": "82",
//         "imdbRating": "9.0",
//         "imdbVotes": "1,652,832",
//         "imdbID": "tt0468569",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Batman Begins",
//         "Year": "2005",
//         "Rated": "PG-13",
//         "Released": "15 Jun 2005",
//         "Runtime": "140 min",
//         "Genre": "Action, Adventure",
//         "Director": "Christopher Nolan",
//         "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//         "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//         "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//         "Language": "English, Urdu, Mandarin",
//         "Country": "USA, UK",
//         "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//         "Metascore": "70",
//         "imdbRating": "8.3",
//         "imdbVotes": "972,584",
//         "imdbID": "tt0372784",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Avatar",
//         "Year": "2009",
//         "Rated": "PG-13",
//         "Released": "18 Dec 2009",
//         "Runtime": "162 min",
//         "Genre": "Action, Adventure, Fantasy",
//         "Director": "James Cameron",
//         "Writer": "James Cameron",
//         "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//         "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//         "Language": "English, Spanish",
//         "Country": "USA, UK",
//         "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//         "Metascore": "83",
//         "imdbRating": "7.9",
//         "imdbVotes": "876,575",
//         "imdbID": "tt0499549",
//         "Type": "movie",
//         "Response": "True"
//     }
// ];
//
// // Only change code below this line
//
// const filteredList = watchList.map(el=> ({title: el.Title, rating: el.imdbRating})).filter(el=> Number(el.rating) > 8)
//
// // Only change code above this line
//
// console.log(filteredList);

//****
//Напишите свой собственный Array.prototype.myFilter(), который должен вести себя точно так же, как Array.prototype.filter().
// Вы не должны использовать встроенный метод filter. Доступ к экземпляру Array в методе myFilter можно получить следующим образом.

// The global variable
// const s = [23, 65, 98, 5];
//
// Array.prototype.myFilter = function(callback) {
//     // Only change code below this line
//     const newArray = [];
//     for (let i=0; i<this.length; i++){
//         if (callback(this[i])) {
//             newArray.push(this[i])
//         }
//     }
//
//     // Only change code above this line
//     return newArray;
// };
//
// const new_s = s.myFilter(function(item) {
//     return item % 2 === 1;
// });
// console.log(new_s)

//*****
//Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice
// and endSlice indices. The function should return an array.

// function sliceArray(anim, beginSlice, endSlice) {
//     // Only change code below this line
//
//     return anim.slice(beginSlice, endSlice)
//     // Only change code above this line
// }
//
// const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
//
//
// console.log(sliceArray(inputAnim, 1, 3))


//******
//Перепишите функцию nonMutatingSplice, используя slice вместо splice. Она должна ограничивать предоставленный массив
// cities длиной 3 и возвращать новый массив, содержащий только первые три элемента.
// Не мутируйте исходный массив, предоставленный функции.

//
// function nonMutatingSplice(cities) {
//     // Only change code below this line
//     return cities.slice(0, 3);
//
//     // Only change code above this line
// }
//
// const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
// //nonMutatingSplice(inputCities);
//
// console.log(nonMutatingSplice(inputCities))
// console.log(inputCities)


//******
//Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original.
// The function should return the concatenated array.
// function nonMutatingConcat(original, attach) {
//     // Only change code below this line
//     return original.concat(attach)
// //    return [...original, ...attach]
//
//     // Only change code above this line
// }
//
// const first = [1, 2, 3];
// const second = [4, 5];
//
// console.log(nonMutatingConcat(first, second))

//******
//Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.
//
// const first = [1, 2, 3];
// const second = [4, 5];
//
// function nonMutatingPush(original, newItem) {
//     // Only change code below this line
//     return original.concat(newItem);
//     //return [...original, ...newItem]
//
//     // Only change code above this line
// }
//
// console.log(nonMutatingPush(first, second))

//****
//
// const users = [
//     { name: 'John', age: 34 },
//     { name: 'Amy', age: 20 },
//     { name: 'camperCat', age: 10 }
// ];
//
// const sumOfAges = users.reduce((sum, user) => sum + user.age, 0 );
// console.log(sumOfAges); // 64
//
//
// console.log(0 + `John`) //0John
// console.log(`` + `John`) // John
// console.log({} + `John`) // [object Object]John
// console.log([] + `John`) // John
//
//
// const usersObj = users.reduce((obj, user) => {
//     obj[user.name] = user.age;
//     return obj;
// }, {});
// console.log(usersObj); // {John: 34, Amy: 20, camperCat: 10}
//
//***
// Переменная watchList содержит массив объектов с информацией о нескольких фильмах. С помощью reduce найдите средний
// рейтинг IMDB фильмов режиссера Кристофера Нолана. Вспомните из предыдущих задач, как фильтровать данные и строить над
// ними карты, чтобы получить то, что вам нужно. Возможно, вам потребуется создать другие переменные и вернуть средний
// рейтинг из функции getRating. Обратите внимание, что значения рейтинга сохраняются в объекте в виде строк и должны
// быть преобразованы в числа перед использованием в любых математических операциях.


// // The global variable
// const watchList = [
//     {
//         "Title": "Inception",
//         "Year": "2010",
//         "Rated": "PG-13",
//         "Released": "16 Jul 2010",
//         "Runtime": "148 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Christopher Nolan",
//         "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//         "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//         "Language": "English, Japanese, French",
//         "Country": "USA, UK",
//         "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//         "Metascore": "74",
//         "imdbRating": "8.8",
//         "imdbVotes": "1,446,708",
//         "imdbID": "tt1375666",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Interstellar",
//         "Year": "2014",
//         "Rated": "PG-13",
//         "Released": "07 Nov 2014",
//         "Runtime": "169 min",
//         "Genre": "Adventure, Drama, Sci-Fi",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan, Christopher Nolan",
//         "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//         "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//         "Language": "English",
//         "Country": "USA, UK",
//         "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//         "Metascore": "74",
//         "imdbRating": "8.6",
//         "imdbVotes": "910,366",
//         "imdbID": "tt0816692",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "The Dark Knight",
//         "Year": "2008",
//         "Rated": "PG-13",
//         "Released": "18 Jul 2008",
//         "Runtime": "152 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//         "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//         "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//         "Language": "English, Mandarin",
//         "Country": "USA, UK",
//         "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//         "Metascore": "82",
//         "imdbRating": "9.0",
//         "imdbVotes": "1,652,832",
//         "imdbID": "tt0468569",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Batman Begins",
//         "Year": "2005",
//         "Rated": "PG-13",
//         "Released": "15 Jun 2005",
//         "Runtime": "140 min",
//         "Genre": "Action, Adventure",
//         "Director": "Christopher Nolan",
//         "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//         "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//         "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//         "Language": "English, Urdu, Mandarin",
//         "Country": "USA, UK",
//         "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//         "Metascore": "70",
//         "imdbRating": "8.3",
//         "imdbVotes": "972,584",
//         "imdbID": "tt0372784",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Avatar",
//         "Year": "2009",
//         "Rated": "PG-13",
//         "Released": "18 Dec 2009",
//         "Runtime": "162 min",
//         "Genre": "Action, Adventure, Fantasy",
//         "Director": "James Cameron",
//         "Writer": "James Cameron",
//         "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//         "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//         "Language": "English, Spanish",
//         "Country": "USA, UK",
//         "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//         "Metascore": "83",
//         "imdbRating": "7.9",
//         "imdbVotes": "876,575",
//         "imdbID": "tt0499549",
//         "Type": "movie",
//         "Response": "True"
//     }
// ];
//
// function getRating(watchList) {
//     // Only change code below this line
//     let averageRatingFilms = watchList.filter(el => el[`Director`] === `Christopher Nolan`)
//     let averageRating = averageRatingFilms.reduce((acc, curr) => acc + Number(curr.imdbRating), 0) / averageRatingFilms.length
//
//
//     // Only change code above this line
//     return averageRating;
// }
//
// console.log(getRating(watchList));

// console.log([5,15,20].reduce((acc, cur)=> acc + cur, 0)/[5,15,20].length)

//****
//Завершите код функции squareList, используя любую комбинацию map(), filter() и reduce(). Функция должна возвращать новый
// массив, содержащий квадраты только положительных целых чисел (десятичные числа не являются целыми), если ей передан
// массив вещественных чисел. Примером массива вещественных чисел является [-3, 4.8, 5, 3, -3.2].
// Примечание: Ваша функция не должна использовать циклы for или while или функцию forEach().

// const squareList = arr => {
//     // Only change code below this line
//     return arr.filter(el=> (el>0)&&(el%1===0)).map(el=> el*el);
//     // Only change code above this line
// };
//
// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

// //*****
// console.log([10, 5, 2, 3, 4].sort()) // [10, 2, 3, 4, 5] - здесь 10 идет перед 2 !!!!! т.к. числа преобразуются в строку для сравнения в соотв с порядком в Unicode
// // В Unicode, числа находятся перед буквами в верхнем регистре,
// // а те, в свою очередь, перед буквами в нижнем регистре.
// console.log([10, 5, 2, 3, 4].sort((a,b)=>a-b)) // [2, 3, 4, 5, 10]
// console.log([10, 5, 2, 3, 4].sort((a,b)=> b-a)) // [5, 4, 3, 2, 1]
//
// function reverseAlpha(arr) {
//     return arr.sort(function(a, b) {
//         return a === b ? 0 : a < b ? 1 : -1;
//     });
// }
//
// //console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']))
// console.log(['l', 'h', 'z', 'b', 's'].sort((a,b)=>b>a ? 1 : -1 ))
//
// //Используйте метод sort в функции alphabeticalOrder для сортировки элементов массива arr в алфавитном порядке.
// // Функция должна вернуть отсортированный массив.
//
// function alphabeticalOrder(arr) {
//     // Only change code below this line
//     arr.sort((a,b)=> a>b ? 1 : -1)
//     return arr
//     // Only change code above this line
// }
// let arrBebore = ["a", "d", "c", "a", "z", "g"]
// console.log(alphabeticalOrder(arrBebore))
//
// console.log(arrBebore) // ['a', 'a', 'c', 'd', 'g', 'z'] - метод sort мутирует начальный массив => поэтому необх использовать спред-опрератор [...arr]
//
// //***
// //Используйте метод sort в функции nonMutatingSort для сортировки элементов массива по возрастанию.
// // Функция должна возвращать новый массив и не мутировать переменную globalArray.
//
// const globalArray = [5, 6, 3, 2, 9];
//
// function nonMutatingSort(arr) {
//     // Only change code below this line
//
//     return [...arr].sort((a,b)=>a-b)
//     // Only change code above this line
// }
//
// console.log(nonMutatingSort(globalArray))
// console.log(globalArray)

//***
//
// const otherString = "How9are7you2today";
// const byDigits = otherString.split(/\d/);
// console.log(byDigits)
//
// //Используйте метод split внутри функции splitify, чтобы разделить str на массив слов. Функция должна вернуть массив.
// // Обратите внимание, что слова не всегда разделяются пробелами, и массив не должен содержать знаков препинания.
//
// function splitify(str) {
//     // Only change code below this line
//
//     //return str.split(/[\s,-.]/g)
//     return str.split(/\W/g)
//     // Only change code above this line
// }
//
// console.log(splitify("Hello World,I-am code"))

//***
//Используйте метод join (среди прочих) внутри функции sentensify, чтобы составить предложение из слов в строке str.
// Функция должна вернуть строку. Например, I-like-Star-Wars будет преобразовано в I like Star Wars. В этом задании не
// используйте метод replace.

// function sentensify(str) {
//     // Only change code below this line
//     return str.split(/\W/).join(` `)
//
//     // Only change code above this line
// }
//
// console.log(sentensify("May-the-force-be-with-you"))

//***
//Заполните функцию urlSlug так, чтобы она преобразовывала строку title и возвращала дефисную версию для URL. Вы можете
// использовать любой из методов, рассмотренных в этом разделе, но не используйте replace. Вот требования:
// На вход подается строка с пробелами и словами в заголовке.
// Выходные данные - это строка, в которой пробелы между словами заменены дефисом (-).
// Выходные данные должны состоять из строчных букв
// В выходных данных не должно быть пробелов

// Only change code below this line
// function urlSlug(title) {
//     // return title.toLowerCase().trim().split(/\s+/g).join(`-`)
//     return title.toLowerCase().trim().split(/\s+/g).join(`-`)
// }
// // Only change code above this line
//
// console.log(urlSlug(" Winter Is  Coming "))
//

//***
//Используйте метод every внутри функции checkPositive, чтобы проверить, является ли каждый
// элемент в arr положительным. Функция должна вернуть булево значение.
// function checkPositive(arr) {
//     // Only change code below this line
//
//     return arr.every(el => el > 0)
//     // Only change code above this line
// }
//
// console.log(checkPositive([1, 2, 3, -4, 5])) // false

//***
//Use the some method inside the checkPositive function to check if any element in arr is positive.
// The function should return a Boolean value.
// function checkPositive(arr) {
//     // Only change code below this line
//     return arr.some(el => el > 0)
//
//     // Only change code above this line
// }
//
// console.log(checkPositive([1, 2, 3, -4, 5]))


//**
//Заполните тело функции add так, чтобы она использовала керринг для сложения параметров x, y и z.

// function add(x) {
//     // Only change code below this line
//     // return function (y) {
//     //     return function (z) {
//     //         return x+y+z
//     //     }
//     // }
//
//     return y => z => x + y + z
//
//     // Only change code above this line
// }
//
// console.log(add(10)(20)(30))

//***
// Сумма всех чисел в диапазоне
// Мы передадим вам массив из двух чисел. Возвращается сумма этих двух чисел плюс сумма всех чисел между ними.
// Наименьшее число не всегда будет стоять на первом месте.
// Например, sumAll([4,1]) должна вернуть 10, потому что сумма всех чисел от 1 до 4 (оба включительно) равна 10.
// function sumAll(arr) {
//     let sortedArray = arr.sort((a,b)=> a-b)
//     let newSortedArray = []
//     for (let i=sortedArray[0]; i<= sortedArray[1]; i++){
//         newSortedArray.push(i)
//     }
//
//     return newSortedArray.reduce((acc,curr)=> acc + curr,0)
//
//
// }
//
//
// console.log(sumAll([1, 4]))


//****
//Сравнение двух массивов
// Сравнивает два массива и возвращает новый массив с любыми элементами, находящимися только в одном из двух
// заданных массивов, но не в обоих. Другими словами, возвращается симметричная разность двух массивов.
// Примечание: Вы можете вернуть массив с элементами в любом порядке.

// function diffArray(arr1, arr2) {
//     const newArr = [];
//     let maxArr = arr1.length > arr2.length ? arr1 : arr2
//     let minArr = arr1.length > arr2.length ? arr2 : arr1
//     console.log(minArr, maxArr)
//     for (let i=0; i< maxArr.length; i++){
//         //console.log(arr2[i])
//         if (minArr.indexOf(maxArr[i])===-1) {
//             if (maxArr[i]) {
//                 newArr.push(maxArr[i])
//                 console.log(maxArr[i])
//             }
//         }
//         if (maxArr.indexOf(minArr[i])===-1) {
//             if (minArr[i]) {
//                 newArr.push(minArr[i])
//                 console.log(minArr[i])
//             }
//         }
//     }
//
//     return newArr;
// }

//console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
//console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
//console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
//console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]))

// function diffArray(arr1, arr2) {
//     return [...diff(arr1,arr2), ...diff(arr2,arr1)]
//
//     function diff(a,b) {
//         return a.filter(el => b.indexOf(el)===-1)
//     }
// }
//
//
// console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]))


//***
//Искать и уничтожать
// Вам будет предоставлен исходный массив (первый аргумент в функции destroyer), за которым следует один или несколько
// аргументов. Удалите из начального массива все элементы, значение которых совпадает со значением этих аргументов.
// Примечание: Вы должны использовать объект arguments.

// function destroyer(arr ) {
//     let args = [...arguments].slice(1)
//     console.log(args)
//     return arr.filter(el => args.indexOf(el)===-1);
// }
//
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
// console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
// console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))
//

// //****
// //Создайте функцию, которая просматривает массив объектов (первый аргумент) и возвращает массив всех объектов, имеющих
// // совпадающие пары имени и значения (второй аргумент). Каждая пара имени и значения исходного объекта должна присутствовать
// // в объекте из коллекции, если она должна быть включена в возвращаемый массив.
// //  Например, если первым аргументом является [{ first: "Romeo", last: "Монтекки" }, { first: "Меркуцио", last: null },
// //  { first: "Тибальт", last: "Capulet" }], а второй аргумент { last: "Capulet" }, то вы должны вернуть третий объект из
// //  массива (первый аргумент), поскольку он содержит имя и его значение, переданное в качестве второго аргумента.
//
//
// function whatIsInAName(collection, source) {
//     let arr = []
//
//     // const collectionKeys = Object.keys(collection)
//     // console.log(collectionKeys) // ['0', '1', '2'] т.к. на вход Object.keys передается массив, а не объект
//
//     const sourceKeys = Object.keys(source);
//     console.log(sourceKeys) // ['last'] т.к. на вход Object.keys передается объект
//
//
//     // Only change code below this line
//     return collection.filter(el =>
//         sourceKeys.every(key=> el.hasOwnProperty(key) && el[key] ===source[key])
//         // for (let i = 0; i < sourceKeys.length; i++) {
//         //     if ((!el.hasOwnProperty(sourceKeys[i])) || (el[sourceKeys[i]] !== source[sourceKeys[i]])) {
//         //         return false
//         //     }
//         // }
//         // return true
//     )
//
//     // Only change code above this line
//     //return arr;
// }
//
// //console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
// console.log(whatIsInAName([{"apple": 1, "bat": 2}, {"bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}], {  "apple": 1,   "bat": 2}))
//
// //console.log(Object.keys({ first: "Romeo", last: "Montague" }))
//
// let a = {first: "Romeo", last: "Montague"}
//
// //console.log(a.hasOwnProperty(`first`))

//*****
//Преобразуйте строку в спинномозговой регистр. Спинномозговой регистр - это все слова в нижнем регистре, соединенные тире.


// function spinalCase(str) {
//     // return str.replace(/([a-z])([A-Z])/g, `$1 $2`).toLowerCase().split(/\s|_/).join(`-`)
//     return str.split(/\s|_|(?=[A-Z])/).join(`-`).toLowerCase()
// }
//
// console.log(spinalCase('This Is Spinal Tap'))
//
// console.log(spinalCase("AllThe-small Things"))
// console.log(spinalCase("The_Andy_Griffith_Show"))


//****
//Свиная латынь - это способ изменения английских слов. Правила следующие:
// - Если слово начинается с согласной, возьмите первую согласную или кластер согласных, переместите ее в конец слова и добавьте к ней ay.
// - Если слово начинается с гласной, просто добавьте way в конце.
//
// function translatePigLatin(str) {
//     let strCopy = str
//     let vowelRegex = /[aeuio]/
//     let consonantrrayRegex = /[^aeuio]/
//     let consonantArray = []
//     if (vowelRegex.test(str.split(``)[0])) {
//        // console.log(`гласная!!!`)
//         return  str+`way`
//     }
//     for (let i=0; i<str.length; i ++) {
//         if (vowelRegex.test(str.split(``)[i])) {break}
//         if (consonantrrayRegex.test(str.split(``)[i])){
//            console.log(str.split(``)[i])
//             consonantArray.push(str[i])
//             //strCopy.slice(i+1)
//             strCopy = strCopy.slice(1)
//             console.log(35747, strCopy)
//         }
//     }
//     let consonantrrayStr = consonantArray.join(``)
//     console.log()
//     return strCopy + consonantrrayStr + `ay`
// }
//
// //console.log(translatePigLatin("gconsonant"))
// //console.log(translatePigLatin("algorithm")) // should return the string algorithmway.
// //console.log(translatePigLatin("california") )//  should return the string aliforniacay.
// //console.log(translatePigLatin("california"))
// console.log(translatePigLatin("schwartz"))  // artzschway

//***********
//Выполните поиск и замену в предложении, используя указанные аргументы, и верните новое предложение.
// Первый аргумент - предложение для поиска и замены.  Второй аргумент - слово, которое вы будете заменять (до).
// Третий аргумент - то, на что будет заменен второй аргумент (после).  Примечание: При замене сохраняйте регистр
// первого символа в исходном слове. Например, если вы хотите заменить слово Book на слово dog, оно должно быть заменено как Dog

// function myReplace(str, before, after) {
//     if (/[A-Z]/.test(before)) {
//         console.log(`Первая буква заглавная`)
//         after = after.slice(0,1).toUpperCase() + after.slice(1)
//     } else {after = after.toLowerCase()}
//     return str.replace(before, after)
// }
//
// //console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))// should return the string He is Sitting on the couch.

//**********
//Пары нитей ДНК состоят из пар белковых оснований. Пары оснований представлены символами AT и CG, которые образуют строительные
// блоки двойной спирали ДНК. В нити ДНК отсутствует элемент сопряжения. Напишите функцию для подбора недостающих пар
// оснований для предоставленной нити ДНК. Для каждого символа в предоставленной строке найдите символ пары оснований.
// Верните результаты в виде массива 2d.  Например, для входного GCG верните [["G", "C"], ["C", "G"], ["G", "C"]].
// Символ и его пара попарно объединяются в массив, а все массивы группируются в один инкапсулирующий массив.


//
// function pairElement(str) {
//     //return str.split(``).map(el=> el === `G`  ? [`G`,'C']   : el === `C` ? [`C`, 'G']: el === `A` ? [`A`, `T`]: el === `T`? [`T`, `A`]: ``)
//
//     let pairs = {
//         A: `T`,
//         T: `A`,
//         C: `G`,
//         G: `C`
//     }
//     return str.split(``).map(el=> [el, pairs[el]])
// }
//
// console.log(pairElement("GCG"))
// console.log(pairElement("TTGAG"))

//****
//Пропущенные буквы
// Найдите недостающую букву в переданном диапазоне букв и верните ее.
// Если в диапазоне присутствуют все буквы, возвращается undefined.


// function fearNotLetter(str) {
//     let result = []
//     let alphabet = `abcdefghijklmnopqrstuvwxyz`
//     result = alphabet.slice(alphabet.indexOf(str[0]), str.length+alphabet.indexOf(str[0])+1)
//     console.log( result)
//     let missingLetter
//     for (let i=0; i< result.length; i++) {
//         if ( result[i] !== str[i]) {
//             missingLetter = result[i]
//             break
//         }
//     }
//     return missingLetter
// }
//
// //console.log(fearNotLetter("cdfg"))
// console.log(fearNotLetter("stvwx"))

//***
//Напишите функцию, которая принимает два или более массивов и возвращает новый массив уникальных значений в порядке исходных массивов.
// Другими словами, все значения из всех массивов должны быть включены в исходном порядке, но без дубликатов в конечном массиве.
// Уникальные числа должны быть отсортированы по их исходному порядку, но итоговый массив не должен быть отсортирован в числовом порядке.

// function uniteUnique(arr, ...arg) {
//     let result = [...new Set(arr)]
//     let argArray = [...arg]
//     console.log(argArray)
//
//     for (let i = 0; i < argArray.length; i++) {
//         for (let j = 0; j < argArray[i].length; j++) {
//             if (!result.includes(argArray[i][j])) {
//                 result.push(argArray[i][j])
//             }
//         }
//     }
//     return result
// }
//
// //console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
// //console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
// console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))

//*****
//Преобразуйте символы &, <, >, " (двойная кавычка) и ' (апостроф) в строке в соответствующие им сущности HTML.
function convertHTML(str) {
    let pairs = {
        "&": "&amp;",
        "<": "&lt;",
        ">": `&gt;`,
        '"': `&quot;`,
        "'": `&apos;`,
    }
    return str.split(``).map(el=> pairs[el] || el).join(``) //3й способ
  //return str.replace(/([&<>"'])/, x=>pairs[x]) // 2й способ


    // let result = []  // 1й способ
    // for (let i=0; i< str.length; i++) {
    //     // console.log(str[i].toString())
    //     // console.log(2, str[i])
    //     switch (str[i].toString()) {
    //         case `&`:
    //             result.push(`&amp;`)
    //             break
    //         case `<`:
    //             result.push(`&lt;`)
    //             break
    //         case `>`:
    //             result.push(`&gt;`)
    //             break
    //         case `"`:
    //             result.push(`&quot;`)
    //             break
    //         case `'`:
    //             result.push(`&apos;`)
    //             break
    //         default:
    //             result.push(str[i])
    //     }
    // }
    // return result.join(``)
}

console.log(convertHTML("Dolce & Gabbana")) // Dolce &amp; Gabbana
console.log(convertHTML("Schindler's List")) // Schindler&apos;s List
