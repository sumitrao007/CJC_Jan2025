//operators
// airthmathic => *,/,-,+,%
// logical => &&, ||,!
// relational => <,>,<=,>=,!=
// bitwise => &,|,^,<<,>>,~,!
// conditioanl => ==(it only checks the value of operand),===(strongly equality => it checks the value as well as data type of the operand)
// assignment => +=,-=,*=,/=,%=
// ternary => condition?expression1:expression2
//unary  => pre/post inc/dec ++a,a--

// Control Statement / sequaential statement
// if,if-else,nested if-else,switch,break,continue,goto

// if(4<10){
//     console.log("Condition is true");
// }else{
//     console.log("Condition is false");
// }

var choice=21;
// switch(choice){
//     case 1: console.log("U r in case 1");
//             break;        
//     case 2 : console.log("U r in case 2");
//             break;
//     default:console.log("U r in default case");
//             break;
// }

// Loop Statement
// for,while,do-while,foreach
// while
var count=5;
// while(count!=0){
//     console.log("Count is "+count);
//     count--;
// }

// for(var i=0;i<4;i++){
//    console.log("Index is "+i); 
// }

// console.log("Value of i After the loop "+i)

// var Vs const Vs let 
// var => scope=> it has global scope 

// let => it is also used for variable creation
// scope => it has scope within a nearest block ({})

for(let i=0;i<4;i++){
    console.log("Index is "+i); 
 }

//  console.log("Value of i After the loop "+i)

// const => it is also a keyword to use for variable
// that value of variable is does not change throughout the programe.
// scope => local as well as global 
const pi=3.14;
