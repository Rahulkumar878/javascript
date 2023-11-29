//object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);
//Object.freeze(JsUser)
// JsUser.age=23;
//console.log(JsUser);
JsUser.greeting=function(){
    console.log("hello js user");
}
console.log(JsUser.greeting());
JsUser.greeting2=function()
{
    console.log(`hello js user,${this.name}`);
}
console.log(JsUser.greeting2());