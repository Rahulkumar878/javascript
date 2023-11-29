 //single turn objectconst 
 //tinderuser=new Object();
 //non single object
const tinderuser={}
tinderuser.id="123abc"
 tinderuser.name="rahul"
 tinderuser.tinderuser=false
// console.log(tinderuser);
const regularuser={
    email:"rahul@gmail.com",
    fullname:{
      userfullname:{
        first:"rahul",
        last:"kumar"
      }
    }
}
// console.log(regularuser);
// console.log(regularuser.fullname);
const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
//const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1, ...obj2};
//console.log(obj3);
const user=[{id:1,email:"rahul@gmail.com"}];
//user[1].email;
//console.log(tinderuser);
// console.log(Object.keys(tinderuser));
//console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('name'));