 const myarr=[0,1,2,"rahul",4,5];
 //console.log(myarr);
 //console.log(typeof myarr);
 const arr=new Array(1,3,2,4);
 arr.push(5);
 arr.push(6);
 //console.log(arr.length);
 arr.unshift(12);
 //console.log(arr);
 arr.shift();
 //console.log(arr);
//  console.log(arr.includes(3));
//  console.log(arr.indexOf(4));
 const newarr=myarr.join();
//  console.log(newarr);
//  console.log(typeof newarr);
//  console.log(typeof myarr);
const na=myarr.slice(1,3);

// console.log("a. ",na);
// console.log("b. ",myarr);
 const na1=myarr.splice(1,3);
// console.log("a. ",na1);
// console.log("b. ",myarr);
const marvel_hero=["thor","ironman","spiderman"];
const dc_heros=["superman","flash","batman"];
const new_array=marvel_hero.concat(dc_heros);
//console.log((marvel_hero));
//console.log((new_array));
 const all_new_heroes=[...marvel_hero,...dc_heros];
 console.log(all_new_heroes);
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=another_array.flat(Infinity);
// console.log(another_array);
//console.log(real_another_array);
console.log(Array.isArray("rahul"));
console.log(Array.from("rahul"));
console.log(Array.from({name:"rahul"}));
let a=100;
let b=200;
let c=300;
console.log(Array.of(a,b,c));