// singleton
// object create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shivam",
    "full name": "Shivam Kumar",
    [mySym]: "mykey1",
    age: 21,
    location: "Noida",
    email: "shivam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
 
JsUser.email = "shivam@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "shivam@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
console.log(`Hello JS user, ${this.name}`);
}

consol.log(JsUser.greeting());
consol.log(JsUser.greetingTwo());

