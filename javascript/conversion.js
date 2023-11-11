let score="33";
console.log(typeof(score));
let valueInNUmber=Number(score);
console.log(typeof(valueInNUmber));


score="35ab";
 valueInNUmber=Number(score);
 console.log(valueInNUmber);
console.log(typeof(valueInNUmber));


score=null;
valueInNUmber=Number(score);
 console.log(valueInNUmber);
console.log(typeof(valueInNUmber));


score=undefined;
valueInNUmber=Number(score);
 console.log(valueInNUmber);
console.log(typeof(valueInNUmber));


score=true;
valueInNUmber=Number(score);
 console.log(valueInNUmber);
console.log(typeof(valueInNUmber));


let isLoggedIn=1;
let booleanIsLoggIn=Boolean(isLoggedIn);
console.log(booleanIsLoggIn);


isLoggedIn="";
booleanIsLoggIn=Boolean(isLoggedIn);
console.log(booleanIsLoggIn);


let somenumbe=33;
let stringNumber=String(somenumbe);
console.log(stringNumber);
console.log(typeof(stringNumber));