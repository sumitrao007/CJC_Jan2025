// Anonymous Function
// it does not have any name 
// it execute there itself

let temp1= function (){
    console.log("u r in first type Anonymous Function")
}

// temp1();

let temp2=function (a:number,b:number):number{
    return (a+b);
}

// console.log("Result is "+temp2(20,30));

//fat arrow function / Arrow function
// it does not have any name 
// it execute there itself

let temp3=()=>{
    console.log("U r in first type of fat arrow function")
}

// temp3();

let temp4=(a:number,b:number):number=>{
    return (a+b);
}

let res=temp4(70,8);
console.log("Result is "+res);






