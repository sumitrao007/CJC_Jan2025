// function
// 1 function without parameter & without return
// 2 function with parameter & without return
// 3 function without parameter & with return
// 4 function with parameter & with return

// 1 function without parameter & without return

function add1(){
    console.log("U r in first type of function")
}

// add1();

// 2 function with parameter & without return

function add2(a:number,b:number){
    console.log("Addition  is "+(a+b));
}

// add2(10,2);

// 3 function without parameter & with return

function add3():number{
    return (8+8);
}

// let res= add3();
// console.log("Result is "+res);

// 4 function with parameter & with return

function add4(a:number,b:number):number{
    return (a+b);
}

let res1= add4(40,5);
console.log("Result is "+res1)