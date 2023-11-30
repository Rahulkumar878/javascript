// function saymyname()
// {
//     console.log("hiii");
// }
// saymyname();
function add(a,b)
{
    return a+b;
}
//console.log(add(3,4));
function loginusermessage(username)
{
   
   if(username) return `${username} just logged in`
}
//console.log(loginusermessage("rahul"));
// ... this is a rest operator
function calculatecartprice(...num1)
{
    return num1;
}
//console.log(calculatecartprice(200,400,500));
const user = {
    username: "Rahul",
    prices: 199
}
function handleobject(anyobject)
{
    console.log(`username is ${anyobject.username} ande price is ${anyobject.price}`)
}
handleobject(user);
const mynewarray=[200,300,400];
function returnsecondvalue(getarry)
{
  return getarry[1];
}
console.log(returnsecondvalue(mynewarray));