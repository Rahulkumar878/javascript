let mydate=new Date();
// console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(typeof(mydate));
let mycreatedate=new Date(2023,0,23);
console.log(mycreatedate.toDateString());
 let new_data=new Date(2023,0,23,5,3);
 console.log(new_data.toLocaleString());
 console.log(new Date("2023-01-14"));
let mytimestamp=  Date.now();
 console.log((mytimestamp));
 console.log(Math.floor(Date.now()/1000));
 let newDate=new Date();
 console.log(newDate);
 console.log(newDate.getMonth()+1);
 newDate.toLocaleString('default',{
    weekday:"long",
 })