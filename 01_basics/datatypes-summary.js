// primitive

// 7 types : string, Number, Boolean, null, undefined, symbol, bigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34565432544646465n



// refrence  (non- primitive)

// array, objects, functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "shivam",
    age: 22,

}
 const myFunction = function(){
    console.log("hello world");
 }

 console.log(typeof bigNumber);
 console.log(typeof outsideTemp);
 console.log(typeof scorevalue);



 // ++++++++++++++++++++++++++++++++++++++++++

 // Stack (primitive), Heap (non-primitive)

 let myYoutubename = "shivamdotcom"

 let anotherName = myYoutubename
 anothername = "chaiaurcode"

 console.log("shivamdotcom")
 console.log(anothername);

 let user = {
    email: "user@google.com"
    upi: "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "shivam@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);


