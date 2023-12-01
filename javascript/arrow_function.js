//this function is used to know about current context
const user={
    username:"rahul",
    price:999,
    welcomefunction:function( )
    {
        console.log(`${this.username} , wecome to website`);
        console.log(this);
    }
}
// user.welcomefunction();
// user.username="sam";
// user.welcomefunction();
// console.log(this);
// function chai()
// {
//     let username="rahul";
// console.log(this.username);
// }
// chai();
// const chai=function()
// {
//   let username="rahul"
//   console.log(username);
// }
// chai();
const chai=() =>
{
    console.log("rahul");
    let x="ram";
    console.log(this.x);
}
//chai();
// const addtwo=(num1,num2)=>{
//    return num1+num2;
// }
// const addtwo=(num1,num2)=>num1+num2
const addtwo=(num1,num2)=>(num1+num2)


console.log(addtwo(2,3));
