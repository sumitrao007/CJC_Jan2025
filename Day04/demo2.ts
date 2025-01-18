//basics of array
// array is growable & shrinkable dynamically 
// there are no any fixed type array 
// array can store homogenous & heterogenous value into it 

// let a:number[]=[10,45,80,90];
let a1:number[]=[];
let a2=[2.5,45];
let a3=[1.5,"Sumit",78,true];
let a4:any[]=[];

// for(let i=0;i<a.length;i++){
//     console.log("Value of array "+a[i]);
// }

// console.log(a);
// console.log(a.join("#"))
// console.log(a.join(" "))
// console.log(a.join())

//foreach method 

// a.forEach((myvalue,i,arr)=>{
//     console.log("data is "+myvalue+" index is "+i+" array is "+arr);
// })

// Push & Pop
// If u want to insert data dynamically into the array 
// It works on LIFO Principal 

// let a:number[]=[];

// a.push(63);
// console.log(a);
// a.push(74,90,25);
// console.log(a);
// let popedvalue=a.pop();
// console.log(a);
// console.log("Poped Value is "+popedvalue)

// splice 
// u can add data on particular index as well as u can remove a data from particular index 

// let a:number[]=[40,56,21];
// a.splice(1,0,100);
// console.log(a);
// a.splice(1,0,150,250);
// console.log(a);
// let res=a.splice(2,1);
// console.log(a)
// // console.log(res)
// a.splice(2,2);
// console.log(a);

//map 
let a:number[]=[2,3,4,5];

let sqrArr=a.map((value)=>{
    return (value*value);
});
console.log(a);
console.log(sqrArr);


